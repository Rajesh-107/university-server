import express, { Application, NextFunction, Request, Response } from 'express';
const app : Application = express()
import cors from 'cors';

app.use(express.json());
app.use(cors())

app.get('/', (req:Request, res:Response) => {
    res.send("Hellow vai")
})

console.log(process.cwd())

export default app;