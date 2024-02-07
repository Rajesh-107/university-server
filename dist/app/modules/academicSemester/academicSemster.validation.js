"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicValidations = void 0;
const zod_1 = require("zod");
const academicSemester_Constant_1 = require("./academicSemester.Constant");
const createAcademicValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.enum([...academicSemester_Constant_1.AcademicSemesterName]),
        year: zod_1.z.string(),
        code: zod_1.z.enum([...academicSemester_Constant_1.AcademicSemesterCode]),
        startMonth: zod_1.z.enum([...academicSemester_Constant_1.Months]),
        endMonth: zod_1.z.enum([...academicSemester_Constant_1.Months]),
    }),
});
exports.AcademicValidations = {
    createAcademicValidationSchema,
};
