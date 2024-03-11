"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const course_controller_1 = require("./course.controller");
const course_validation_1 = require("./course.validation");
const router = express_1.default.Router();
router.post('/create-course', (0, validatedRequest_1.default)(course_validation_1.CourseValidations.createCourseValidaationSchema), course_controller_1.CourseControllers.createCourses);
router.get('/:id', course_controller_1.CourseControllers.getSingleCourse);
router.get('/', course_controller_1.CourseControllers.getAllCourses);
router.delete('/:id', course_controller_1.CourseControllers.getDeleteCourse);
router.put('/:courseId/assign-faculties', (0, validatedRequest_1.default)(course_validation_1.CourseValidations.facultiesWithCourseValidationSchema), course_controller_1.CourseControllers.assignFacultieswithCourse);
router.patch('/:id', (0, validatedRequest_1.default)(course_validation_1.CourseValidations.updateCurseValidationSchema), course_controller_1.CourseControllers.updateCoourse);
exports.CourseRoutes = router;
