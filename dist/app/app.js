"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const student_route_1 = require("./modules/student/student.route");
const user_route_1 = require("./modules/user/user.route");
const globalerrorHandler_1 = __importDefault(require("./middleware/globalerrorHandler"));
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/api/v1/students', student_route_1.StudentRoutes);
app.use('/api/v1/users', user_route_1.UserRoutes);
const getAController = (req, res) => {
    res.send('Hellow vai');
};
app.get('/', getAController);
app.use(globalerrorHandler_1.default);
exports.default = app;
