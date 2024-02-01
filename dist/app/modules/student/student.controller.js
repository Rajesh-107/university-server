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
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentControllers = void 0;
const student_service_1 = require("./student.service");
const getAllStudents = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield student_service_1.StudentServices.getAllStudentsFromDB();
        res.status(200).json({
            success: true,
            message: 'Student found successfully',
            data: result,
        });
    }
    catch (error) {
        // res.status(500).json({
        //   success: false,
        //   message: 'Internal Server Error',
        //   error: error.message,
        // });
        next(error);
    }
});
const getSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.studentId;
        const result = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Single Student data found successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const deleteSingleStudent = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.studentId;
        const result = yield student_service_1.StudentServices.deleteSingleStudentFromDB(studentId);
        res.status(200).json({
            success: true,
            message: 'Single Student data deleted successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
const singleStudentDataUpdate = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studentId = req.params.studentId;
        const updatedData = req.body;
        const existingStudent = yield student_service_1.StudentServices.getSingleStudentFromDB(studentId);
        if (!existingStudent || existingStudent.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'Student not found',
            });
        }
        const result = yield student_service_1.StudentServices.updateSingleStudentInDB(studentId, updatedData);
        res.status(200).json({
            success: true,
            message: 'Single Student data updated successfully',
            data: result,
        });
    }
    catch (error) {
        next(error);
    }
});
exports.StudentControllers = {
    getAllStudents,
    getSingleStudent,
    deleteSingleStudent,
    singleStudentDataUpdate,
};
