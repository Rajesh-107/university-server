"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseValidations = void 0;
const zod_1 = require("zod");
const PreRequisiteCoursesValidationSchema = zod_1.z.object({
    course: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
const createCourseValidaationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string(),
        prefix: zod_1.z.string(),
        code: zod_1.z.number(),
        credits: zod_1.z.number(),
        isDeleted: zod_1.z.boolean().optional(),
        preRequisiteCourses: zod_1.z
            .array(PreRequisiteCoursesValidationSchema)
            .optional(),
    }),
});
const updatePreRequisiteCoursesValidationSchema = zod_1.z.object({
    course: zod_1.z.string(),
    isDeleted: zod_1.z.boolean().optional(),
});
const updateCurseValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        title: zod_1.z.string().optional(),
        prefix: zod_1.z.string().optional(),
        code: zod_1.z.number().optional(),
        credits: zod_1.z.number().optional(),
        isDeleted: zod_1.z.boolean().optional(),
        preRequisiteCourses: zod_1.z
            .array(updatePreRequisiteCoursesValidationSchema)
            .optional(),
    }),
});
// const updateCurseValidationSchema = createCourseValidaationSchema.partial();
exports.CourseValidations = {
    createCourseValidaationSchema,
    updateCurseValidationSchema,
};
