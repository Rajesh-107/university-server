"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfferedCourseValidations = void 0;
const zod_1 = require("zod");
const offredCourse_constant_1 = require("./offredCourse.constant");
const createOfferedCourseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        semesterRegistration: zod_1.z.string(),
        academicFaculty: zod_1.z.string(),
        academicDepartment: zod_1.z.string(),
        course: zod_1.z.string(),
        faculty: zod_1.z.string(),
        section: zod_1.z.number(),
        maxCapacity: zod_1.z.number(),
        days: zod_1.z.array(zod_1.z.enum([...offredCourse_constant_1.Days])),
        startTime: zod_1.z.string(),
        endTime: zod_1.z.string(),
    }),
});
const updateOfferedCourseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        semesterRegistration: zod_1.z.string().optional(),
        academicFaculty: zod_1.z.string().optional(),
        academicDepartment: zod_1.z.string().optional(),
        course: zod_1.z.string().optional(),
        faculty: zod_1.z.string().optional(),
        section: zod_1.z.number().optional(),
        maxCapacity: zod_1.z.number().optional(),
        days: zod_1.z.array(zod_1.z.enum([...offredCourse_constant_1.Days])).optional(),
        startTime: zod_1.z.string().optional(),
        endTime: zod_1.z.string().optional(),
    }),
});
exports.OfferedCourseValidations = {
    createOfferedCourseValidationSchema,
    updateOfferedCourseValidationSchema,
};
