import { studentValidations } from './student.validation';
import express from 'express';
import { StudentControllers } from './student.controller';
import middleware from '../../middleware/validatedRequest';

const router = express.Router();

router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getSingleStudent);
router.delete('/:id', StudentControllers.deleteSingleStudent);
router.patch(
  '/:id',
  middleware(studentValidations.updateStudentValidationSchema),
  StudentControllers.updateStudent
);

export const StudentRoutes = router;
