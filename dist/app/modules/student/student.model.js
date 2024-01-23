"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const validator_1 = __importDefault(require("validator"));
const studentsSchema = new mongoose_1.Schema({
    id: { type: String, unique: true, required: true },
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
        required: [true, 'Email is required'],
        validate: {
            validator: (value) => validator_1.default.isEmail(value),
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
});
exports.StudentModel = (0, mongoose_1.model)('Student', studentsSchema);
