import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';
import middleware from '../../middleware/validatedRequest';
import { AcademicValidations } from './academicSemster.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  middleware(AcademicValidations.createAcademicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester
);

router.get(
  '/all-academic-semester',
  middleware(AcademicValidations.createAcademicValidationSchema),
  AcademicSemesterControllers.getAllAcademicSemester
);
router.get(
  '/single-academic-semester/:id',
  middleware(AcademicValidations.createAcademicValidationSchema),
  AcademicSemesterControllers.getSingleAcademicSemester
);
router.patch(
  '/update-single-academic-semester/:id',
  middleware(AcademicValidations.createAcademicValidationSchema),
  AcademicSemesterControllers.singleAcademicSemesterDataUpdate
);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);
// router.put('/:studentId', StudentControllers.singleStudentDataUpdate);

export const AcademicSemesterRoutes = router;
