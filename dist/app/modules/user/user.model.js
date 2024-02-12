"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../../config"));
const userSchema = new mongoose_1.Schema({
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
}, {
    timestamps: true,
});
//pre save hook
userSchema.pre('save', function (next) {
    const user = this;
    bcrypt_1.default.hash(user.password, Number(config_1.default.bcrypt_salt_round), function (err, hash) {
        if (err) {
            return next(err);
        }
        user.password = hash;
        next();
    });
});
//post save middleware
userSchema.post('save', function (doc, next) {
    doc.password = '';
    next();
    // console.log(this, 'we saveed our data');
});
exports.User = (0, mongoose_1.model)('User', userSchema);
