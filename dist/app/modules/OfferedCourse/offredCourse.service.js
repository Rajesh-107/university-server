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
exports.OfferedCourseServices = void 0;
const offeredCourse_model_1 = require("./offeredCourse.model");
const semesterRegistration_model_1 = require("../semesterRegistration/semesterRegistration.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const http_status_1 = __importDefault(require("http-status"));
const academicFaculty_model_1 = require("../academicFaculty/academicFaculty.model");
const academicDepartment_model_1 = require("../academicDepartment/academicDepartment.model");
const course_model_1 = require("../courses/course.model");
const faculty_model_1 = require("../Faculty/faculty.model");
const offeredCourse_utils_1 = require("./offeredCourse.utils");
const Querybuilder_1 = __importDefault(require("../../builder/Querybuilder"));
const createOfferedCourseIntoDB = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const { semesterRegistration, academicFaculty, academicDepartment, course, faculty, section, days, startTime, endTime, } = payLoad;
    const isSemesterRegistrationExits = yield semesterRegistration_model_1.SemesterRegistration.findById(semesterRegistration);
    if (!isSemesterRegistrationExits) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Semester registration not found');
    }
    const acadmecicSemester = isSemesterRegistrationExits === null || isSemesterRegistrationExits === void 0 ? void 0 : isSemesterRegistrationExits.academicSemester;
    const isAcademicFacultyExist = yield academicFaculty_model_1.AcademicFaculty.findById(academicFaculty);
    if (!isAcademicFacultyExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'AcademicFacultyExist not found');
    }
    const isAcademicDepartmentExist = yield academicDepartment_model_1.AcademicDepartment.findById(academicDepartment);
    if (!isAcademicDepartmentExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'AcademicDepartmentExist Exist not found');
    }
    const isCourseExist = yield course_model_1.Course.findById(course);
    if (!isCourseExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'course Exist not found');
    }
    const isFacultyExist = yield faculty_model_1.Faculty.findById(faculty);
    if (!isFacultyExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'course Exist not found');
    }
    const isDepartmentBelongToFaculty = yield academicDepartment_model_1.AcademicDepartment.findOne({
        academicFaculty,
        _id: academicDepartment,
    });
    if (!isDepartmentBelongToFaculty) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `This ${isAcademicDepartmentExist.name} is not belong to this  ${isFacultyExist.name}}`);
    }
    const isSameOfferedCourseExistsWithSameRegisteedCourse = yield offeredCourse_model_1.OfferedCourse.findOne({
        semesterRegistration,
        course,
        section,
    });
    if (!isSameOfferedCourseExistsWithSameRegisteedCourse) {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `This offred course sction alredy exists `);
    }
    const assignedSchedules = yield offeredCourse_model_1.OfferedCourse.find({
        semesterRegistration,
        faculty,
        days: { $in: days },
    }).select('days stratTime endTime');
    const newSchedule = {
        days,
        startTime,
        endTime,
    };
    if ((0, offeredCourse_utils_1.hasTimeConflict)(assignedSchedules, newSchedule)) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, `This offred course sction alredy exists `);
    }
    const result = yield offeredCourse_model_1.OfferedCourse.create(Object.assign(Object.assign({}, payLoad), { acadmecicSemester }));
    return result;
});
// const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
//   const result = await OfferedCourse.create(payLoad);
//   return result;
// };
const updateOfferedCourseIntoDB = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { faculty, days, startTime, endTime } = payload;
    const isOfferedCourseExist = yield offeredCourse_model_1.OfferedCourse.findById(id);
    if (!isOfferedCourseExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'offered course not found');
    }
    const isFacultyExist = yield faculty_model_1.Faculty.findById(faculty);
    if (!isFacultyExist) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Faculty not found');
    }
    const semesterregistration = isOfferedCourseExist.semesterRegistration;
    const semesterRegistrationstatus = yield semesterRegistration_model_1.SemesterRegistration.findById(semesterregistration);
    if ((semesterRegistrationstatus === null || semesterRegistrationstatus === void 0 ? void 0 : semesterRegistrationstatus.status) !== 'UPCOMING') {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `You can not updated this course`);
    }
    const assignedSchedules = yield offeredCourse_model_1.OfferedCourse.find({
        semesterregistration,
        faculty,
        days: { $in: days },
    }).select('days stratTime endTime');
    const newSchedule = {
        days,
        startTime,
        endTime,
    };
    if ((0, offeredCourse_utils_1.hasTimeConflict)(assignedSchedules, newSchedule)) {
        throw new AppError_1.default(http_status_1.default.CONFLICT, `This offred course sction alredy exists `);
    }
    const result = yield offeredCourse_model_1.OfferedCourse.findByIdAndUpdate(id, payload, {
        new: true,
    });
    return result;
});
const getAllOfferedCoursesFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const offeredCourseQuery = new Querybuilder_1.default(offeredCourse_model_1.OfferedCourse.find(), query)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield offeredCourseQuery.modelQuery;
    return result;
});
const deleteOfferedCourseFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const isOfferedCourseExists = yield offeredCourse_model_1.OfferedCourse.findById(id);
    if (!isOfferedCourseExists) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Offered Course not found');
    }
    const semesterRegistation = isOfferedCourseExists.semesterRegistration;
    const semesterRegistrationStatus = yield semesterRegistration_model_1.SemesterRegistration.findById(semesterRegistation).select('status');
    if ((semesterRegistrationStatus === null || semesterRegistrationStatus === void 0 ? void 0 : semesterRegistrationStatus.status) !== 'UPCOMING') {
        throw new AppError_1.default(http_status_1.default.BAD_REQUEST, `Offered course can not update ! because the semester ${semesterRegistrationStatus}`);
    }
    const result = yield offeredCourse_model_1.OfferedCourse.findByIdAndDelete(id);
    return result;
});
exports.OfferedCourseServices = {
    createOfferedCourseIntoDB,
    getAllOfferedCoursesFromDB,
    deleteOfferedCourseFromDB,
    updateOfferedCourseIntoDB,
};
