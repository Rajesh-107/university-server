"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = require("mongoose");
const studentsSchema = new mongoose_1.Schema({
    id: { type: String },
    name: {
        fisrtName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        },
    },
    gender: ['male', 'female'],
    dateofBirth: { type: String },
    email: {
        type: String,
        required: true,
    },
    contactNo: { type: String, required: true },
    emergencyNumber: { type: String, required: true },
    bloodGroup: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    presentAddress: { type: String, required: true },
    permanentAddress: { type: String, required: true },
    guardian: {
        fatherName: { type: String, required: true },
        fatherOccupation: { type: String, required: true },
        fatherContactNo: { type: String, required: true },
        motherName: { type: String, required: true },
        motherOccupation: { type: String, required: true },
        motherContactNo: { type: String, required: true },
    },
    localGuardian: {
        name: { type: String, required: true },
        occupation: { type: String, required: true },
        contactNo: { type: String, required: true },
        address: { type: String, required: true },
    },
    profileImg: { type: String },
    isActive: ['active', 'blocked'],
});
exports.StudentModel = (0, mongoose_1.model)('Student', studentsSchema);