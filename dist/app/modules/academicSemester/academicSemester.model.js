"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemester = void 0;
const mongoose_1 = require("mongoose");
const academicSemester_Constant_1 = require("./academicSemester.Constant");
const academicSemesterSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
        enum: academicSemester_Constant_1.AcademicSemesterName,
    },
    year: {
        type: Date,
        required: true,
    },
    code: {
        type: String,
        required: true,
        enum: academicSemester_Constant_1.AcademicSemesterCode,
    },
    startMonth: {
        type: String,
        required: true,
        enum: academicSemester_Constant_1.Months,
    },
    endMonth: {
        type: String,
        enum: academicSemester_Constant_1.Months,
        required: true,
    },
}, {
    timestamps: true,
});
exports.AcademicSemester = (0, mongoose_1.model)('AcademicSemester', academicSemesterSchema);
