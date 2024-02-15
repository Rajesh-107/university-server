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
exports.AcademicDepartmentControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const academicDepartment_service_1 = require("./academicDepartment.service");
const createAcademicDepartrment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_service_1.AcademicDepartmentServices.createAcademicDepartmentIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic department is created successfully',
        data: result,
    });
}));
const getAllAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicDepartment_service_1.AcademicDepartmentServices.getAllAcademicDepartmentsFromDB();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic faculty are retrieved successfully',
        data: result,
    });
}));
const getSingleAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield academicDepartment_service_1.AcademicDepartmentServices.getSingleAcademicFacultyFromDB(facultyId);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic faculty is retrieved successfully',
        data: result,
    });
}));
const updateAcademicDepartment = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facultyId } = req.params;
    const result = yield academicDepartment_service_1.AcademicDepartmentServices.updateSingleAcademicFacultyInDB(facultyId, req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic faculty is updated successfully',
        data: result,
    });
}));
exports.AcademicDepartmentControllers = {
    createAcademicDepartrment,
    getAllAcademicDepartment,
    getSingleAcademicDepartment,
    updateAcademicDepartment,
};
