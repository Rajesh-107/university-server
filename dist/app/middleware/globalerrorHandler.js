"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const globalErrorHandeler = (err, req, res, next) => {
    let statusCode = err.statusCode || 500;
    let message = err.message || 'Internal Server Error';
    let errorSources = [
        {
            path: '',
            message: 'Something went wrong',
        },
    ];
    if (err instanceof zod_1.ZodError) {
        statusCode = 400;
        message = 'Something vul';
    }
    return res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        // error: err,
    });
};
exports.default = globalErrorHandeler;
