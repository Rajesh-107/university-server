"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SemesterRegistrationValidation = void 0;
const zod_1 = require("zod");
const semesterReegistration_constant_1 = require("./semesterReegistration.constant");
const createSemesteRegistrationValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        academicSemester: zod_1.z.string(),
        status: zod_1.z.enum([...semesterReegistration_constant_1.SemesterRegistrationStatus]),
        startDate: zod_1.z.string().datetime(),
        endDate: zod_1.z.string().datetime(),
        minCredit: zod_1.z.number(),
        maxCredit: zod_1.z.number(),
    }),
});
exports.SemesterRegistrationValidation = {
    createSemesteRegistrationValidationSchema,
};
