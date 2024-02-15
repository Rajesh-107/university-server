"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AcademicFacultyRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const academicFaculty_validation_1 = require("./academicFaculty.validation");
const academicFaculty_controller_1 = require("./academicFaculty.controller");
const router = express_1.default.Router();
router.post('/create-academic-faculty', (0, validatedRequest_1.default)(academicFaculty_validation_1.academicFucaltyValidation.createAcademicFucaltyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.createAcademicFaculty);
router.get('/:facultyId', academicFaculty_controller_1.AcademicFacultyControllers.getSingleAcademicFaculty);
router.patch('/:facultyId', (0, validatedRequest_1.default)(academicFaculty_validation_1.academicFucaltyValidation.updatedAcademicFucaltyValidationSchema), academicFaculty_controller_1.AcademicFacultyControllers.updateAcademicFaculty);
router.get('/', academicFaculty_controller_1.AcademicFacultyControllers.getAllAcademicFaculty);
exports.AcademicFacultyRoutes = router;
