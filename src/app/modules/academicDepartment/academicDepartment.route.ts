import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { AcademicDepartmentControllers } from './academicDepartment.controller';
import { academicDepartmentValidation } from './academicDepartment.validation';

const router = express.Router();

router.post(
  '/create-academic-department',
  middleware(
    academicDepartmentValidation.createAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.createAcademicDepartrment
);

router.get(
  '/:departmentId',
  AcademicDepartmentControllers.getSingleAcademicDepartment
);

router.patch(
  '/:departmentId',
  middleware(
    academicDepartmentValidation.updatedAcademicDepartmentValidationSchema
  ),
  AcademicDepartmentControllers.updateAcademicDepartment
);

router.get('/', AcademicDepartmentControllers.getAllAcademicDepartment);

export const AcademicFacultyDepartments = router;
