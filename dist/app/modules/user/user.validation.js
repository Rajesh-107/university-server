"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidation = void 0;
const zod_1 = require("zod");
const userValidationSchema = zod_1.z.object({
    password: zod_1.z
        .string({
        invalid_type_error: 'password must be string',
    })
        .max(20, { message: 'Passwords can not be longer than 20 characters' })
        .optional(),
});
exports.UserValidation = {
    userValidationSchema,
};
