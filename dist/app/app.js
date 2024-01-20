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
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRuter = express_1.default.Router();
app.use('/', userRouter);
app.use('/api/v1/courses', courseRuter);
courseRuter.post('/courses', (req, res) => {
    const courses = req.body.courses;
});
userRouter.post('/api/v1/users/createUser', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: 'User created successfully',
        data: user
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method);
    next();
};
app.get('/', logger, (req, res) => {
    res.send('Hello worldddddd!');
});
app.get('/', logger, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(some);
    }
    catch (error) {
        // console.log(error)
        // res.status(400).json({
        //     success:false,
        //     message:'Failed to get data'
        // })
        next(error);
    }
    console.log(req.body);
    res.send('Hello data pailo');
}));
app.all('*', (req, res) => {
    res.status(400).json({
        success: false,
        message: 'not route match'
    });
});
app.use((error, req, res, next) => {
    console.log(error);
    if (error) {
        res.status(400).json({
            success: false,
            message: "Failed to get data"
        });
    }
});
exports.default = app;
