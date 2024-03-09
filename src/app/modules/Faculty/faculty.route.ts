import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { updateFacultyValidationSchema } from './faculty.validation';
import { FacultyControllers } from './faculty.controller';

const router = express.Router();

router.get('/:id', FacultyControllers.getSingleFaculty);

router.patch(
  '/:id',
  middleware(updateFacultyValidationSchema),
  FacultyControllers.updateFaculty
);

router.delete('/:id', FacultyControllers.deleteFaculty);

router.get('/', FacultyControllers.getAllFaculties);

export const FacultyRoutes = router;
