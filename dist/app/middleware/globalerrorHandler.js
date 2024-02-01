"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globalErrorHandeler = (err, req, res, next) => {
    // res.status(500).send('Internal Server Error');
    const statusCode = 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        error: err,
    });
};
exports.default = globalErrorHandeler;
