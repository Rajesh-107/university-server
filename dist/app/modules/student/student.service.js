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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentServices = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const student_model_1 = require("./student.model");
const http_status_1 = __importDefault(require("http-status"));
const user_model_1 = require("../user/user.model");
const AppError_1 = __importDefault(require("../../errors/AppError"));
const Querybuilder_1 = __importDefault(require("../../builder/Querybuilder"));
const student_constant_1 = require("./student.constant");
const getAllStudentsFromDB = (query) => __awaiter(void 0, void 0, void 0, function* () {
    // const queryObj = { ...query };
    // let searchTerm = '';
    // if (query?.searchTerm) {
    //   searchTerm = query?.searchTerm as string;
    // }
    // const searchQuery = Student.find({
    //   $or: stdentSearchfields.map((field) => ({
    //     [field]: { $regex: searchTerm, $options: 'i' },
    //   })),
    // });
    // const excludeFields = ['searchTerm', 'sort', 'limit', 'page', 'fields'];
    // excludeFields.forEach((el) => delete queryObj[el]);
    // let sort = '-createdAt';
    // if (query.sort) {
    //   sort = query.sort as string;
    // }
    // const filterQuery = searchQuery
    //   .find(queryObj)
    //   .populate('admissionSemester')
    //   .populate({
    //     path: 'academicDepartment',
    //     populate: {
    //       path: 'academicFaculty',
    //     },
    //   })
    //   .sort(sort);
    // let page = 1;
    // let limit = 10;
    // if (query.page) {
    //   page = Number(query.page);
    // }
    // if (query.limit) {
    //   limit = Number(query.limit);
    // }
    // const skipValue = (page - 1) * limit;
    // const paginateQuery = filterQuery.skip(skipValue).limit(limit);
    // let fields = '-__v';
    // if (query.fields) {
    //   fields = (query.fields as string).split(',').join(' ');
    // }
    // const fieldsQuery = paginateQuery.select(fields);
    // return fieldsQuery.exec();
    const studentQuery = new Querybuilder_1.default(student_model_1.Student.find(), query)
        .search(student_constant_1.stdentSearchfields)
        .filter()
        .sort()
        .paginate()
        .fields();
    const result = yield studentQuery.modelQuery;
    return result;
});
const getSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield student_model_1.Student.findOne({ id })
        .populate('admissionSemester')
        .populate({
        path: 'academicDepartment',
        populate: {
            path: 'academicFaculty',
        },
    });
    return result;
});
const deleteSingleStudentFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield mongoose_1.default.startSession();
    try {
        session.startTransaction();
        const deletedStudent = yield student_model_1.Student.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session });
        if (!deletedStudent) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to delete student');
        }
        const deletedUser = yield user_model_1.User.findOneAndUpdate({ id }, { isDeleted: true }, { new: true, session });
        if (!deletedUser) {
            throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Failed to delete user');
        }
        yield session.commitTransaction();
        yield session.endSession();
        return deletedStudent;
    }
    catch (err) {
        yield session.abortTransaction();
        yield session.endSession();
        throw new Error('Failed to delete student');
    }
});
const updateSingleStudentInDB = (id, payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, guardian, localGuardian } = payLoad, remainingStudentData = __rest(payLoad, ["name", "guardian", "localGuardian"]);
    const moodifiedUpdatedData = Object.assign({}, remainingStudentData);
    if (name && Object.keys(name).length) {
        for (const [key, value] of Object.entries(name)) {
            moodifiedUpdatedData[`name.${key}`] = value;
        }
    }
    if (guardian && Object.keys(guardian).length) {
        for (const [key, value] of Object.entries(guardian)) {
            moodifiedUpdatedData[`guardian.${key}`] = value;
        }
    }
    if (localGuardian && Object.keys(localGuardian).length) {
        for (const [key, value] of Object.entries(localGuardian)) {
            moodifiedUpdatedData[`localGuardian.${key}`] = value;
        }
    }
    console.log(moodifiedUpdatedData);
    const updatedDocument = yield student_model_1.Student.findOneAndUpdate({ id }, moodifiedUpdatedData, {
        new: true,
        runValidators: true,
    });
    return updatedDocument;
});
exports.StudentServices = {
    getAllStudentsFromDB,
    getSingleStudentFromDB,
    deleteSingleStudentFromDB,
    updateSingleStudentInDB,
};
