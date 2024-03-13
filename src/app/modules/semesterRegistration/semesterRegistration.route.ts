import middleware from '../../middleware/validatedRequest';
import { SemesterRegistrationController } from './semesterRegistration.controller';
import { SemesterRegistrationValidation } from './semesterRegistration.validation';
import express from 'express';

const router = express.Router();

router.post(
  '/create-semester-registration',
  middleware(
    SemesterRegistrationValidation.createSemesteRegistrationValidationSchema
  ),
  SemesterRegistrationController.createSemesterRegistration
);

router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

router.patch(
  '/:id',
  middleware(
    SemesterRegistrationValidation.updateSemesteRegistrationValidationSchema
  ),
  SemesterRegistrationController.updateSemesterRegistration
);

router.get(
  '/:id',
  SemesterRegistrationController.getSingleSemesterRegistrations
);

// router.delete(
//   '/:id',
//   SemesterRegistrationController.deleteSemesterRegistration,
// );

// router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);

export const semesterRegistrationRoutes = router;
