"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudentId = void 0;
const generateStudentId = (payLoad) => {
    const currentId = (0).toString().padStart(4, '0');
    let inrementId = (Number(currentId) + 1).toString();
    inrementId = `${payLoad === null || payLoad === void 0 ? void 0 : payLoad.year}${payLoad === null || payLoad === void 0 ? void 0 : payLoad.code}${inrementId}`;
    return inrementId;
};
exports.generateStudentId = generateStudentId;
