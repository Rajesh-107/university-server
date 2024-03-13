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
exports.SemesterRegistrationService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const academicSemester_model_1 = require("../academicSemester/academicSemester.model");
const semesterRegistration_model_1 = require("./semesterRegistration.model");
const createSemesterRegistrationIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSmester = payLoad === null || payLoad === void 0 ? void 0 : payLoad.academicSemester;
    const isAcademicSmesterExist = yield academicSemester_model_1.AcademicSemester.findById(academicSmester);
    if (!isAcademicSmesterExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Not found data');
    }
    const isSemesterRegistrationExists = yield semesterRegistration_model_1.SemesterRegistration.findOne({
        academicSmester,
    });
    if (isSemesterRegistrationExists) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, 'Already exists Semester registration');
    }
    const result = yield semesterRegistration_model_1.SemesterRegistration.create(payLoad);
    return result;
});
exports.SemesterRegistrationService = {
    createSemesterRegistrationIntoDB,
    // getAllSemesterRegistrationsFromDB,
    // getSingleSemesterRegistrationsFromDB,
    // updateSemesterRegistrationIntoDB,
    // deleteSemesterRegistrationFromDB,
};
