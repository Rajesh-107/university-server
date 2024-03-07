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

export const CourseRoutes = router;
