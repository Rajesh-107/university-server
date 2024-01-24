import { Schema, model } from 'mongoose';
import { Student } from './student.interface';
import validator from 'validator';
import bcrypt from 'bcrypt';
import config from '../../config';

const studentsSchema = new Schema<Student>(
  {
    id: { type: String, required: true },
    password: {
      type: String,
      unique: true,
      required: true,
      maxLength: [20, 'Password cannot be more than 20 characters'],
    },
    name: {
      firstName: {
        type: String,
        required: [true, 'First Name is required'],
        trim: true,
        validate: function (value) {
          console.log(value);
        },
      },
      middleName: {
        type: String,
        trim: true,
      },
      lastName: {
        type: String,
        required: true,
        trim: true,
      },
    },
    gender: {
      type: String,
      enum: {
        values: ['male', 'female', 'other'],
        message: 'Gender must be needed',
      },
      required: true,
    },
    dateOfBirth: {
      type: String,
    },
    contactNo: {
      type: String,
      required: true,
    },
    emergencyNumber: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    presentAddress: {
      type: String,
      required: true,
    },
    permanentAddress: {
      type: String,
      required: true,
    },
    guardian: {
      fatherName: { type: String, required: true },
      fatherOccupation: { type: String, required: true },
      fatherContactNo: { type: String, required: true },
      motherName: { type: String, required: true },
      motherOccupation: { type: String, required: true },
      motherContactNo: { type: String, required: true },
    },
    email: {
      type: String,
      unique: true,
      required: [true, 'Email is required'],
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: 'Email is not a valid email',
      },
    },
    avatar: {
      type: String,
    },
    localGuardian: {
      name: { type: String, required: true },
      occupation: { type: String, required: true },
      contactNo: { type: String, required: true },
      address: { type: String, required: true },
    },
    profileImg: {
      type: String,
    },
    isActive: {
      type: String,
      enum: ['active', 'blocked'],
      default: 'active',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

//pre save hook
studentsSchema.pre('save', function (next) {
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

studentsSchema.virtual('fullName').get(function (err, hash) {
  return this.name.firstName + this.name.middleName + this.name.lastName;
});

//post save middleware
studentsSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
  // console.log(this, 'we saveed our data');
});

studentsSchema.pre('find', function (next) {
  // console.log(this, 'found');
  this.find({ isDeleted: { $ne: true } });
  next();
});

studentsSchema.pre('findOne', function (next) {
  // console.log(this, 'found');
  this.find({ isDeleted: { $ne: true } });
  next();
});

export const StudentModel = model<Student>('Student', studentsSchema);
