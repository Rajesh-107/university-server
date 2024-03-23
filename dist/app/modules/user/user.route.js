"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const student_validation_1 = require("../student/student.validation");
const validatedRequest_1 = __importDefault(require("../../middleware/validatedRequest"));
const admin_validation_1 = require("../Admins/admin.validation");
const router = express_1.default.Router();
router.post('/create-student', (0, validatedRequest_1.default)(student_validation_1.studentValidations.createStudentValidationSchema), user_controller_1.UserController.createStudent);
// router.post(
//   '/create-faculty',
//   auth(USER_ROLE.admin),
//   validateRequest(createFacultyValidationSchema),
//   UserControllers.createFaculty,
// );
router.post('/create-admin', 
// auth(USER_ROLE.admin),
(0, validatedRequest_1.default)(admin_validation_1.createAdminValidationSchema), user_controller_1.UserController.createAdmin);
exports.UserRoutes = router;
