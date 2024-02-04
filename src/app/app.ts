/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';
import { UserRoutes } from './modules/user/user.route';
import globalErrorHandeler from './middleware/globalerrorHandler';
import notFoundRoute from './middleware/notFoundRoute';
import router from './routes';

app.use(express.json());
app.use(cors());
app.use('/api/v1', router);

const getAController = (req: Request, res: Response) => {
  res.send('Hellow vai');
};

app.get('/', getAController);

app.use(globalErrorHandeler);
app.use(notFoundRoute);
export default app;
