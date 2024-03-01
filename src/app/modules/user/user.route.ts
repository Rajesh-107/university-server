import express from 'express';
import { UserController } from './user.controller';

import { studentValidations } from '../student/student.validation';
import middleware from '../../middleware/validatedRequest';

const router = express.Router();

router.post(
  '/create-student',
  middleware(studentValidations.createStudentValidationSchema),
  UserController.createStudent
);

export const UserRoutes = router;
