"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserServices = void 0;
const config_1 = __importDefault(require("../../config"));
const user_model_1 = require("./user.model");
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const user_utils_1 = require("./user.utils");
const student_model_1 = require("../student/student.model");
const createStudentIntoDB = (password, payload) => __awaiter(void 0, void 0, void 0, function* () {
    // Create a user object
    const userData = {};
    // If password is not given, use default password
    userData.password = password || config_1.default.default_password;
    // Set student role
    userData.role = 'student';
    // Find academic semester info
    const Admissionsemester = yield academicSemester_model_1.AcademicSemester.findById(payload.admissionSmester);
    console.log(Admissionsemester);
    // Ensure admissionSemester is not null
    // if (!admissionSemester) {
    //   throw new Error('Admission semester not found');
    // }
    // Set generated id
    userData.id = yield (0, user_utils_1.generateStudentId)(Admissionsemester);
    // Create a user
    const newUser = yield user_model_1.User.create(userData);
    // Ensure newUser has been created
    if (!newUser) {
        throw new Error('Failed to create user');
    }
    // Set id and user properties in payload
    payload.id = newUser.id;
    payload.user = newUser._id; // Reference _id
    // Create a student
    const newStudent = yield student_model_1.Student.create(payload);
    // Ensure newStudent has been created
    if (!newStudent) {
        throw new Error('Failed to create student');
    }
    return newStudent;
});
exports.UserServices = {
    createStudentIntoDB,
};
