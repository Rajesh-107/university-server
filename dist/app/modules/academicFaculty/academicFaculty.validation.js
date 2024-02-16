"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.academicFucaltyValidation = void 0;
const zod_1 = require("zod");
const createAcademicFucaltyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'password must be string',
        }),
    }),
});
const updatedAcademicFucaltyValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string({
            invalid_type_error: 'password must be string',
        }),
    }),
});
exports.academicFucaltyValidation = {
    createAcademicFucaltyValidationSchema,
    updatedAcademicFucaltyValidationSchema,
};
