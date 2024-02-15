import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { academicFucaltyValidation } from './academicFaculty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controller';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  middleware(academicFucaltyValidation.createAcademicFucaltyValidationSchema),
  AcademicFacultyControllers.createAcademicFaculty
);

router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  middleware(academicFucaltyValidation.updatedAcademicFucaltyValidationSchema),
  AcademicFacultyControllers.updateAcademicFaculty
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);

export const AcademicFacultyRoutes = router;
