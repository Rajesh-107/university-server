import { z } from 'zod';

const loginValidationSchema = z.object({
  body: z.object({
    id: z.string({ required_error: 'Id is requred' }),
    password: z.string({ required_error: 'Password is requried' }),
  }),
});

export const AuthValidation = {
  loginValidationSchema,
};
