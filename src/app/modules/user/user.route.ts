import express from 'express';
import { UserController } from './user.controller';

import { studentValidations } from '../student/student.validation';
import middleware from '../../middleware/validatedRequest';
import { createAdminValidationSchema } from '../Admins/admin.validation';

const router = express.Router();

router.post(
  '/create-student',
  middleware(studentValidations.createStudentValidationSchema),
  UserController.createStudent
);

// router.post(
//   '/create-faculty',
//   auth(USER_ROLE.admin),
//   validateRequest(createFacultyValidationSchema),
//   UserControllers.createFaculty,
// );

router.post(
  '/create-admin',
  // auth(USER_ROLE.admin),
  middleware(createAdminValidationSchema),
  UserController.createAdmin
);

export const UserRoutes = router;
