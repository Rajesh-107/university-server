import express from 'express';
import { AcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  AcademicSemesterControllers.createAcademicSemester
);

// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);
// router.put('/:studentId', StudentControllers.singleStudentDataUpdate);

export const AcademicSemesterRoutes = router;
