import { z } from 'zod';
import { Days } from './offredCourse.constant';

const createOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string(),
    academicFaculty: z.string(),
    academicDepartment: z.string(),
    course: z.string(),
    faculty: z.string(),
    section: z.number(),
    maxCapacity: z.number(),
    days: z.array(z.enum([...Days])),
    startTime: z.string(),
    endTime: z.string(),
  }),
});
const updateOfferedCourseValidationSchema = z.object({
  body: z.object({
    semesterRegistration: z.string().optional(),
    academicFaculty: z.string().optional(),
    academicDepartment: z.string().optional(),
    course: z.string().optional(),
    faculty: z.string().optional(),
    section: z.number().optional(),
    maxCapacity: z.number().optional(),
    days: z.array(z.enum([...Days])).optional(),
    startTime: z.string().optional(),
    endTime: z.string().optional(),
  }),
});

export const OfferedCourseValidations = {
  createOfferedCourseValidationSchema,
  updateOfferedCourseValidationSchema,
};
