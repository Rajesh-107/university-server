"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handleDuplicateError = (err) => {
    const match = err.message.match(/"([^"]*)"/);
    const extractedmessage = match && match[1];
    const errorSources = [
        {
            path: err.keyvalue,
            message: `${extractedmessage} is already exist`,
        },
    ];
    const statusCode = 400;
    return {
        statusCode,
        messsage: 'Invalid ID',
        errorSources,
    };
};
exports.default = handleDuplicateError;
