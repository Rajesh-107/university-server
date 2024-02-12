import { Schema, model } from 'mongoose';
import { TUser } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser>(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
      required: true,
      maxLength: [20, 'Password cannot be more than 20 characters'],
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['student', 'admin', 'faculty'],
    },
    status: {
      type: String,
      enum: ['in-progress', 'blocked'],
      default: 'in-progress',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

//pre save hook
userSchema.pre('save', function (next) {
  const user = this;

  bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
    function (err, hash) {
      if (err) {
        return next(err);
      }

      user.password = hash;
      next();
    }
  );
});

//post save middleware
userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
  // console.log(this, 'we saveed our data');
});

export const User = model<TUser>('User', userSchema);
