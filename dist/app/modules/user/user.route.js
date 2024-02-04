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
const router = express_1.default.Router();
router.post('/create-student', (0, validatedRequest_1.default)(student_validation_1.studentValidations.CreateStudentSchema), user_controller_1.UserController.createStudent);
exports.UserRoutes = router;
