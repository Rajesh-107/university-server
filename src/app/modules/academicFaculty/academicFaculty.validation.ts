import { z } from 'zod';

const createAcademicFucaltyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'password must be string',
    }),
  }),
});
const updatedAcademicFucaltyValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'password must be string',
    }),
  }),
});

export const academicFucaltyValidation = {
  createAcademicFucaltyValidationSchema,
  updatedAcademicFucaltyValidationSchema,
};
