"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = exports.CreateStudentSchema = exports.LocalGuardianValidationSchema = exports.GuardianValidationSchema = void 0;
const zod_1 = require("zod");
exports.GuardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
exports.LocalGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.CreateStudentSchema = zod_1.z.object({
    body: zod_1.z.object({
        user: zod_1.z.string(),
        password: zod_1.z.string(),
        student: zod_1.z.object({
            name: zod_1.z.object({
                firstName: zod_1.z.string(),
                middleName: zod_1.z.string(),
                lastName: zod_1.z.string(),
            }),
            gender: zod_1.z.enum(['male', 'female']),
            dateOfBirth: zod_1.z.date().optional(),
            contactNo: zod_1.z.string(),
            emergencyNumber: zod_1.z.string(),
            bloodGroup: zod_1.z
                .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
                .optional(),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: exports.GuardianValidationSchema,
            email: zod_1.z.string(),
            avatar: zod_1.z.string().optional(),
            localGuardian: exports.LocalGuardianValidationSchema,
            profileImg: zod_1.z.string().optional(),
        }),
    }),
});
exports.studentValidations = {
    CreateStudentSchema: exports.CreateStudentSchema,
};
