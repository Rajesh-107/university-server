import express, { NextFunction, Request, Response } from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send("Hellow vai")
})

console.log(process.cwd())

export default app;