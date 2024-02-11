// import express from 'express';
// import { AcademicSemesterControllers } from './academicSemester.controller';
// import middleware from '../../middleware/validatedRequest';
// import { AcademicValidations } from './academicSemster.validation';

// const router = express.Router();

// router.post(
//   '/create-academic-semester',
//   middleware(AcademicValidations.createAcademicValidationSchema),
//   AcademicSemesterControllers.createAcademicSemester
// );

// router.get(
//   '/all-academic-semester',
//   middleware(AcademicValidations.createAcademicValidationSchema),
//   AcademicSemesterControllers.getAllAcademicSemester
// );
// router.get(
//   '/single-academic-semester/:id',
//   middleware(AcademicValidations.createAcademicValidationSchema),
//   AcademicSemesterControllers.getSingleAcademicSemester
// );
// router.patch(
//   '/single-academic-semester/:id',
//   middleware(AcademicValidations.createAcademicValidationSchema),
//   AcademicSemesterControllers.getSingleAcademicSemester
// );

// // router.get('/', StudentControllers.getAllStudents);
// // router.get('/:studentId', StudentControllers.getSingleStudent);
// // router.delete('/:studentId', StudentControllers.deleteSingleStudent);
// // router.put('/:studentId', StudentControllers.singleStudentDataUpdate);

// export const AcademicSemesterRoutes = router;
import express from 'express';
import middleware from '../../middleware/validatedRequest';
import { AcademicValidations } from './academicSemster.validation';
import { AcademicSemesterControllers } from './academicSemester.controller';

const router = express.Router();

router.post(
  '/create-academic-semester',
  middleware(AcademicValidations.createAcademicValidationSchema),
  AcademicSemesterControllers.createAcademicSemester
);

router.get(
  '/:semesterId',
  AcademicSemesterControllers.getSingleAcademicSemester
);

router.patch(
  '/:semesterId',
  middleware(AcademicValidations.updateAcademicSemesterValidationSchema),
  AcademicSemesterControllers.updateAcademicSemester
);

router.get('/', AcademicSemesterControllers.getAllAcademicSemesters);

export const AcademicSemesterRoutes = router;
