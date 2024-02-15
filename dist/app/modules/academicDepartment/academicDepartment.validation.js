"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFucaltyValidation = void 0;
const zod_1 = require("zod");
const createAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'Department must be string',
            required_error: 'Name is requried',
        }),
        academicFaculty: zod_1.z.string({
            invalid_type_error: 'Academic must be string',
            required_error: 'Faculty is requried',
        }),
    }),
});
const updatedAcademicDepartmentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z
            .string({
            invalid_type_error: 'Department must be string',
            required_error: 'Name is requried',
        })
            .optional(),
        academicFaculty: zod_1.z
            .string({
            invalid_type_error: 'Academic must be string',
            required_error: 'Faculty is requried',
        })
            .optional(),
    }),
});
exports.academicFucaltyValidation = {
    createAcademicDepartmentValidationSchema,
    updatedAcademicDepartmentValidationSchema,
};
