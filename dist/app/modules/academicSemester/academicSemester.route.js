"use strict";
// import express from 'express';
// import { AcademicSemesterControllers } from './academicSemester.controller';
// import middleware from '../../middleware/validatedRequest';
// import { AcademicValidations } from './academicSemster.validation';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
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
const express_1 = __importDefault(require("express"));
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const academicSemster_validation_1 = require("./academicSemster.validation");
const academicSemester_controller_1 = require("./academicSemester.controller");
const router = express_1.default.Router();
router.post('/create-academic-semester', (0, validatedRequest_1.default)(academicSemster_validation_1.AcademicValidations.createAcademicValidationSchema), academicSemester_controller_1.AcademicSemesterControllers.createAcademicSemester);
router.get('/:semesterId', academicSemester_controller_1.AcademicSemesterControllers.getSingleAcademicSemester);
router.patch('/:semesterId', (0, validatedRequest_1.default)(academicSemster_validation_1.AcademicValidations.updateAcademicSemesterValidationSchema), academicSemester_controller_1.AcademicSemesterControllers.updateAcademicSemester);
router.get('/', academicSemester_controller_1.AcademicSemesterControllers.getAllAcademicSemesters);
exports.AcademicSemesterRoutes = router;
