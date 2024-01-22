import express, { Application, NextFunction, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';

app.use(express.json());
app.use(cors());

const getAController = (req: Request, res: Response) => {
  res.send('Hellow vai');
};

app.get('/', getAController);

export default app;
