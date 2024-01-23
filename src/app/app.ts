import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { StudentRoutes } from './modules/student/student.route';

app.use(express.json());
app.use(cors());
app.use('/api/v1/students', StudentRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('Hellow vai');
};

app.get('/', getAController);

export default app;
