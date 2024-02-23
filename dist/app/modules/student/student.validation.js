"use strict";
// import { z } from 'zod';
Object.defineProperty(exports, "__esModule", { value: true });
exports.studentValidations = exports.updateStudentValidationSchema = exports.createStudentValidationSchema = void 0;
// const userNameValidationSchema = z.object({
//   firstName: z
//     .string()
//     .min(1)
//     .max(20)
//     .refine((value) => /^[A-Z]/.test(value), {
//       message: 'First Name must start with a capital letter',
//     }),
//   middleName: z.string(),
//   lastName: z.string(),
// });
// const guardianValidationSchema = z.object({
//   fatherName: z.string(),
//   fatherOccupation: z.string(),
//   fatherContactNo: z.string(),
//   motherName: z.string(),
//   motherOccupation: z.string(),
//   motherContactNo: z.string(),
// });
// const localGuardianValidationSchema = z.object({
//   name: z.string(),
//   occupation: z.string(),
//   contactNo: z.string(),
//   address: z.string(),
// });
// export const CreateStudentSchema = z.object({
//   body: z.object({
//     password: z.string().max(20),
//     student: z.object({
//       name: userNameValidationSchema,
//       gender: z.enum(['male', 'female', 'other']),
//       dateOfBirth: z.string().optional(),
//       email: z.string().email(),
//       contactNo: z.string(),
//       emergencyNumber: z.string(),
//       bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
//       presentAddress: z.string(),
//       permanentAddress: z.string(),
//       guardian: guardianValidationSchema,
//       localGuardian: localGuardianValidationSchema,
//       admissionSemester: z.string(),
//       profileImg: z.string(),
//     }),
//   }),
// });
// export const studentValidations = {
//   CreateStudentSchema,
// };
const zod_1 = require("zod");
const createUserNameValidationSchema = zod_1.z.object({
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
const createGuardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string(),
    fatherOccupation: zod_1.z.string(),
    fatherContactNo: zod_1.z.string(),
    motherName: zod_1.z.string(),
    motherOccupation: zod_1.z.string(),
    motherContactNo: zod_1.z.string(),
});
const createLocalGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string(),
    occupation: zod_1.z.string(),
    contactNo: zod_1.z.string(),
    address: zod_1.z.string(),
});
exports.createStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        password: zod_1.z.string().max(20),
        student: zod_1.z.object({
            name: createUserNameValidationSchema,
            gender: zod_1.z.enum(['male', 'female', 'other']),
            dateOfBirth: zod_1.z.string().optional(),
            email: zod_1.z.string().email(),
            contactNo: zod_1.z.string(),
            emergencyNumber: zod_1.z.string(),
            bloodGroup: zod_1.z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
            presentAddress: zod_1.z.string(),
            permanentAddress: zod_1.z.string(),
            guardian: createGuardianValidationSchema,
            localGuardian: createLocalGuardianValidationSchema,
            admissionSemester: zod_1.z.string(),
            profileImg: zod_1.z.string(),
            academicDepartment: zod_1.z.string(),
        }),
    }),
});
const updateUserNameValidationSchema = zod_1.z.object({
    firstName: zod_1.z.string().min(1).max(20).optional(),
    middleName: zod_1.z.string().optional(),
    lastName: zod_1.z.string().optional(),
});
const updateGuardianValidationSchema = zod_1.z.object({
    fatherName: zod_1.z.string().optional(),
    fatherOccupation: zod_1.z.string().optional(),
    fatherContactNo: zod_1.z.string().optional(),
    motherName: zod_1.z.string().optional(),
    motherOccupation: zod_1.z.string().optional(),
    motherContactNo: zod_1.z.string().optional(),
});
const updateLocalGuardianValidationSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    occupation: zod_1.z.string().optional(),
    contactNo: zod_1.z.string().optional(),
    address: zod_1.z.string().optional(),
});
exports.updateStudentValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        student: zod_1.z.object({
            name: updateUserNameValidationSchema,
            gender: zod_1.z.enum(['male', 'female', 'other']).optional(),
            dateOfBirth: zod_1.z.string().optional(),
            email: zod_1.z.string().email().optional(),
            contactNo: zod_1.z.string().optional(),
            emergencyContactNo: zod_1.z.string().optional(),
            bloogGroup: zod_1.z
                .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
                .optional(),
            presentAddress: zod_1.z.string().optional(),
            permanentAddress: zod_1.z.string().optional(),
            guardian: updateGuardianValidationSchema.optional(),
            localGuardian: updateLocalGuardianValidationSchema.optional(),
            admissionSemester: zod_1.z.string().optional(),
            profileImg: zod_1.z.string().optional(),
            academicDepartment: zod_1.z.string().optional(),
        }),
    }),
});
exports.studentValidations = {
    createStudentValidationSchema: exports.createStudentValidationSchema,
    updateStudentValidationSchema: exports.updateStudentValidationSchema,
};
