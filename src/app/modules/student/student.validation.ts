import { z } from 'zod';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export const GuardianValidationSchema = z.object({
  fatherName: z.string(),
  fatherOccupation: z.string(),
  fatherContactNo: z.string(),
  motherName: z.string(),
  motherOccupation: z.string(),
  motherContactNo: z.string(),
});

export const LocalGuardianValidationSchema = z.object({
  name: z.string(),
  occupation: z.string(),
  contactNo: z.string(),
  address: z.string(),
});

export const CreateStudentSchema = z.object({
  body: z.object({
    user: z.string(),
    password: z.string(),
    student: z.object({
      name: z.object({
        firstName: z.string(),
        middleName: z.string(),
        lastName: z.string(),
      }),
      gender: z.enum(['male', 'female']),
      dateOfBirth: z.date().optional(),
      contactNo: z.string(),
      emergencyNumber: z.string(),
      bloodGroup: z
        .enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'])
        .optional(),
      presentAddress: z.string(),
      permanentAddress: z.string(),
      guardian: GuardianValidationSchema,
      email: z.string(),
      avatar: z.string().optional(),
      localGuardian: LocalGuardianValidationSchema,
      profileImg: z.string().optional(),
    }),
  }),
});

export const studentValidations = {
  CreateStudentSchema,
};
