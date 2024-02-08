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
exports.AcademicSemesterControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const academeicSemester_service_1 = require("./academeicSemester.service");
const createAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academeicSemester_service_1.AcademicSemesterServices.createAcademicSemesterIntoDb(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Semester created successfully',
        data: result,
    });
}));
const getAllAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academeicSemester_service_1.AcademicSemesterServices.getAllAcademicSemesterFromDB();
    res.status(200).json({
        success: true,
        message: 'All Academic semester found successfully',
        data: result,
    });
}));
const getSingleAcademicSemester = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSemesterId = req.params.id;
    const result = yield academeicSemester_service_1.AcademicSemesterServices.getAcademicSemesterFromDB(academicSemesterId);
    res.status(200).json({
        success: true,
        message: 'Single Student data found successfully',
        data: result,
    });
}));
const singleAcademicSemesterDataUpdate = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const academicId = req.params.id;
    const updatedData = req.body;
    const existingAcademicSemester = yield academeicSemester_service_1.AcademicSemesterServices.getAcademicSemesterFromDB(academicId);
    if (!existingAcademicSemester || existingAcademicSemester.length === 0) {
        return res.status(404).json({
            success: false,
            message: 'Academic Semester not found',
        });
    }
    const result = yield academeicSemester_service_1.AcademicSemesterServices.updateSingleAcadamicSemesterInDB(academicId, updatedData);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Academic Semester updated successfull',
        data: result,
    });
}));
exports.AcademicSemesterControllers = {
    createAcademicSemester,
    getAllAcademicSemester,
    getSingleAcademicSemester,
    singleAcademicSemesterDataUpdate,
};
