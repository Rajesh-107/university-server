"use strict";
// import { z } from 'zod';
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = exports.CreateStudentSchema = void 0;
// export type Guardian = {
//   fatherName: string;
//   fatherOccupation: string;
//   fatherContactNo: string;
//   motherName: string;
//   motherOccupation: string;
//   motherContactNo: string;
// };
// export type LocalGuardian = {
//   name: string;
//   occupation: string;
//   contactNo: string;
//   address: string;
// };
// export const GuardianValidationSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });
// export const LocalGuardianValidationSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });
// export const CreateStudentSchema = z.object({
//   body: z.object({
//     user: z.string(),
//     password: z.string(),
//     student: z.object({
//       name: z.object({
//         firstName: z.string(),
//         middleName: z.string(),
//         lastName: z.string(),
//       }),
//       gender: z.enum(['male', 'female', 'other']),
//       dateOfBirth: z.string().optional(),
//       email: z.string().email(),
//       contactNo: z.string(),
//       emergencyContactNo: z.string(),
//       bloogGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
//       presentAddress: z.string(),
//       permanentAddress: z.string(),
//       localGuardian: LocalGuardianValidationSchema,
//       admissionSemester: z.string(),
//       profileImg: z.string(),
//     }),
//   }),
// });
// export const studentValidations = {
//   CreateStudentSchema,
// };
const zod_1 = require("zod");
const userNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z
        .string()
        .min(1)
        .max(20)
        .refine((value) => /^[A-Z]/.test(value), {
        message: 'First Name must start with a capital letter',
    }),
    middleName: zod_1.z.string(),
    lastName: zod_1.z.string(),
});
const guardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const localGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.CreateStudentSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().max(20),
        student: zod_1.z.object({
            name: userNameValidationSchema,
            gender: zod_1.z.enum(['male', 'female', 'other']),
            dateOfBirth: zod_1.z.string().optional(),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string(),
            emergencyNumber: zod_1.z.string(),
            bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: guardianValidationSchema,
            localGuardian: localGuardianValidationSchema,
            admissionSemester: zod_1.z.string(),
            profileImg: zod_1.z.string(),
        }),
    }),
});
exports.studentValidations = {
    CreateStudentSchema: exports.CreateStudentSchema,
};
