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
exports.AuthServices = void 0;
const http_status_1 = __importDefault(require("http-status"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const user_model_1 = require("../user/user.model");
const loginUser = (payLoad) => __awaiter(void 0, void 0, void 0, function* () {
    const usersData = yield user_model_1.User.isUserExixtsByCustomId(payLoad.id);
    if (!usersData) {
        throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'This user is not found');
    }
    // const isUserDeleted = isUserExixts?.isDeleted;
    // console.log(isUserExixts);
    // if (isUserDeleted) {
    //   throw new AppError(httpStatus.FORBIDDEN, 'This user is not found');
    // }
    // const isUserStatus = isUserExixts?.status;
    // console.log(isUserExixts);
    // if (isUserStatus === 'blocked') {
    //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked');
    // }
    //checcking if password is crrect
    if (!(yield user_model_1.User.isPasswordMatched(payLoad === null || payLoad === void 0 ? void 0 : payLoad.password, usersData === null || usersData === void 0 ? void 0 : usersData.password))) {
        throw new AppError_1.default(http_status_1.default.FORBIDDEN, 'password is not matched');
    }
    return {};
});
exports.AuthServices = {
    loginUser,
};
