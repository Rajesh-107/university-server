// import { z } from 'zod';

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

import { z } from 'zod';

const userNameValidationSchema = z.object({
  firstName: z
    .string()
    .min(1)
    .max(20)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'First Name must start with a capital letter',
    }),
  middleName: z.string(),
  lastName: z.string(),
});

const guardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

const localGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const CreateStudentSchema = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userNameValidationSchema,
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email(),
      contactNo: z.string(),
      emergencyNumber: z.string(),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: guardianValidationSchema,
      localGuardian: localGuardianValidationSchema,
      admissionSemester: z.string(),
      profileImg: z.string(),
    }),
  }),
});

export const studentValidations = {
  CreateStudentSchema,
};
