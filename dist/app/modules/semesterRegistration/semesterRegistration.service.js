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
const Querybuilder_1 = __importDefault(require("../../builder/Querybuilder"));
const semesterReegistration_constant_1 = require("./semesterReegistration.constant");
const createSemesterRegistrationIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const academicSmester = payLoad === null || payLoad === void 0 ? void 0 : payLoad.academicSemester;
    //check if the semester that is already upcoming
    const isThereAnyUpcmingOngoingSemeester = yield semesterRegistration_model_1.SemesterRegistration.findOne({
        $or: [
            { status: semesterReegistration_constant_1.RegistrationStatus.UPCOMING },
            { status: semesterReegistration_constant_1.RegistrationStatus.ONGOING },
        ],
    });
    if (isThereAnyUpcmingOngoingSemeester) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `There is already a ${isThereAnyUpcmingOngoingSemeester.status} registred semester`);
    }
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
const getAllSemesterRegistrationsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const semesterRegistrationQuery = new Querybuilder_1.default(semesterRegistration_model_1.SemesterRegistration.find().populate('academicSemester'), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield semesterRegistrationQuery.modelQuery;
    return result;
});
const getSingleSemesterRegistrationsFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield semesterRegistration_model_1.SemesterRegistration.findById(id);
    return result;
});
const updateSemesterRegistrationsFromDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    //check if the registration semesters are already existing
    const isSemesterRegistrationExists = yield semesterRegistration_model_1.SemesterRegistration.findById(id);
    if (!isSemesterRegistrationExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Not found semesters');
    }
    const currentSeemesterStatus = isSemesterRegistrationExists === null || isSemesterRegistrationExists === void 0 ? void 0 : isSemesterRegistrationExists.status;
    const requestedstatus = payLoad === null || payLoad === void 0 ? void 0 : payLoad.status;
    if (currentSeemesterStatus === semesterReegistration_constant_1.RegistrationStatus.ENDED) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `this semester is already ${currentSeemesterStatus}`);
    }
    //upcoming ongoing ended
    if (currentSeemesterStatus === semesterReegistration_constant_1.RegistrationStatus.UPCOMING &&
        requestedstatus === semesterReegistration_constant_1.RegistrationStatus.ENDED) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `You can not update status ${currentSeemesterStatus} to ${requestedstatus}`);
    }
    if (currentSeemesterStatus === semesterReegistration_constant_1.RegistrationStatus.ONGOING &&
        requestedstatus === semesterReegistration_constant_1.RegistrationStatus.UPCOMING) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `You can not update status ${currentSeemesterStatus} to ${requestedstatus}`);
    }
    const result = yield semesterRegistration_model_1.SemesterRegistration.findByIdAndUpdate(id, payLoad, {
        new: true,
        runValidators: true,
    });
    return result;
});
exports.SemesterRegistrationService = {
    createSemesterRegistrationIntoDB,
    getAllSemesterRegistrationsFromDB,
    getSingleSemesterRegistrationsFromDB,
    updateSemesterRegistrationsFromDB,
    // updateSemesterRegistrationIntoDB,
    // deleteSemesterRegistrationFromDB,
};
