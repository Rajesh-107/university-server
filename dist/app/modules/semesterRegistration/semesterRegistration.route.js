"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.semesterRegistrationRoutes = void 0;
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const semesterRegistration_controller_1 = require("./semesterRegistration.controller");
const semesterRegistration_validation_1 = require("./semesterRegistration.validation");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.post('/create-semester-registration', (0, validatedRequest_1.default)(semesterRegistration_validation_1.SemesterRegistrationValidation.createSemesteRegistrationValidationSchema), semesterRegistration_controller_1.SemesterRegistrationController.createSemesterRegistration);
// router.get(
//   '/:id',
//   SemesterRegistrationController.getSingleSemesterRegistration,
// );
// router.patch(
//   '/:id',
//   validateRequest(
//     SemesterRegistrationValidations.upadateSemesterRegistrationValidationSchema,
//   ),
//   SemesterRegistrationController.updateSemesterRegistration,
// );
// router.get(
//   '/:id',
//   SemesterRegistrationController.getSingleSemesterRegistration,
// );
// router.delete(
//   '/:id',
//   SemesterRegistrationController.deleteSemesterRegistration,
// );
// router.get('/', SemesterRegistrationController.getAllSemesterRegistrations);
exports.semesterRegistrationRoutes = router;
