import { z } from 'zod';

const createAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Department must be string',
      required_error: 'Name is requried',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic must be string',
      required_error: 'Faculty is requried',
    }),
  }),
});
const updatedAcademicDepartmentValidationSchema = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Department must be string',
        required_error: 'Name is requried',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic must be string',
        required_error: 'Faculty is requried',
      })
      .optional(),
  }),
});

export const academicFucaltyValidation = {
  createAcademicDepartmentValidationSchema,
  updatedAcademicDepartmentValidationSchema,
};
