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
exports.AcademicSemesterServices = void 0;
const academicSemester_Constant_1 = require("./academicSemester.Constant");
const academicSemester_model_1 = require("./academicSemester.model");
const createAcademicSemesterIntoDb = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    if (academicSemester_Constant_1.AcademicSemesterNameCodMapper[payLoad.name] !== payLoad.code) {
        throw new Error('Invalid semester Code');
    }
    const result = yield academicSemester_model_1.AcademicSemester.create(payLoad);
    return result;
});
const getAllAcademicSemesterFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.AcademicSemester.find();
    return result;
});
const getAcademicSemesterFromDB = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.AcademicSemester.findOne({ _id });
    return result;
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleAcadamicSemesterInDB = (_id, updatedData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield academicSemester_model_1.AcademicSemester.updateOne({ _id }, { $set: updatedData });
    const updatedDocument = yield academicSemester_model_1.AcademicSemester.findOne({ _id });
    return updatedDocument;
});
exports.AcademicSemesterServices = {
    createAcademicSemesterIntoDb,
    getAllAcademicSemesterFromDB,
    getAcademicSemesterFromDB,
    updateSingleAcadamicSemesterInDB,
};
