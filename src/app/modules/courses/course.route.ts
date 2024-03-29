import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { CourseControllers } from './course.controller';
import { CourseValidations } from './course.validation';

const router = express.Router();

router.post(
  '/create-course',
  middleware(CourseValidations.createCourseValidaationSchema),
  CourseControllers.createCourses
);
router.get('/:id', CourseControllers.getSingleCourse);
router.get('/', CourseControllers.getAllCourses);
router.delete('/:id', CourseControllers.getDeleteCourse);

router.put(
  '/:courseId/assign-faculties',
  middleware(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.assignFacultieswithCourse
);
router.delete(
  '/:courseId/remove-faculties',
  middleware(CourseValidations.facultiesWithCourseValidationSchema),
  CourseControllers.removeFacultiesFromCourseDB
);

router.patch(
  '/:id',
  middleware(CourseValidations.updateCurseValidationSchema),
  CourseControllers.updateCoourse
);

export const CourseRoutes = router;
