import { studentValidations } from './student.validation';
import express from 'express';
import { StudentControllers } from './student.controller';
import middleware from '../../middleware/validatedRequest';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:studentId', StudentControllers.getSingleStudent);
router.delete('/:studentId', StudentControllers.deleteSingleStudent);
router.patch(
  '/:studentId',
  middleware(studentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent
);

export const StudentRoutes = router;
