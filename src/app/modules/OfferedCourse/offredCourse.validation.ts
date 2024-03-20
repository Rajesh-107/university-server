import { z } from 'zod';
import { Days } from './offredCourse.constant';

const createOfferedCourseValidationSchema = z.object({
  body: z
    .object({
      semesterRegistration: z.string(),
      academicFaculty: z.string(),
      academicDepartment: z.string(),
      course: z.string(),
      faculty: z.string(),
      section: z.number(),
      maxCapacity: z.number(),
      days: z.array(z.enum([...Days])),
      startTime: z.string().refine(
        (time) => {
          const regex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        { message: 'Invalid time format' }
      ),
      endTime: z.string().refine(
        (time) => {
          const regex = /^([01][0-9]|2[0-3]):[0-5][0-9]$/;
          return regex.test(time);
        },
        { message: 'Invalid time format' }
      ),
    })
    .refine(
      (body) => {
        const start = new Date(`1970-01-01T${body.startTime}:00`);
        const end = new Date(`1970-01-01T${body.endTime}:00`);

        return end > start;
      },
      {
        message: 'Start time should be before End time',
      }
    ),
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
