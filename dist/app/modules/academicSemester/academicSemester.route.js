"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicSemesterRoutes = void 0;
const express_1 = __importDefault(require("express"));
const academicSemester_controller_1 = require("./academicSemester.controller");
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const academicSemster_validation_1 = require("./academicSemster.validation");
const router = express_1.default.Router();
router.post('/create-academic-semester', (0, validatedRequest_1.default)(academicSemster_validation_1.AcademicValidations.createAcademicValidationSchema), academicSemester_controller_1.AcademicSemesterControllers.createAcademicSemester);
// router.get('/', StudentControllers.getAllStudents);
// router.get('/:studentId', StudentControllers.getSingleStudent);
// router.delete('/:studentId', StudentControllers.deleteSingleStudent);
// router.put('/:studentId', StudentControllers.singleStudentDataUpdate);
exports.AcademicSemesterRoutes = router;
