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
exports.OfferedCourseControllers = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const sendResponse_1 = __importDefault(require("../../utils/sendResponse"));
const offredCourse_service_1 = require("./offredCourse.service");
const createOfferedCourse = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield offredCourse_service_1.OfferedCourseServices.createOfferedCourseIntoDB(req.body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        success: true,
        message: 'Semester Registration is created successfully!',
        data: result,
    });
}));
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })
exports.OfferedCourseControllers = {
    createOfferedCourse,
    // getAllOfferedCourses,
    // getSingleOfferedCourses,
    // updateOfferedCourse,
    // deleteOfferedCourseFromDB,
};
