import express, { NextFunction, Request, Response } from 'express';
const app = express()
const port = 3000

app.use(express.json());
app.use(express.text());

const userRouter = express.Router();
const courseRuter = express.Router();
app.use('/',userRouter)
app.use('/api/v1/courses', courseRuter);

courseRuter.post('/courses', (req:Request, res:Response) => {
    const courses = req.body.courses
})

userRouter.post('/api/v1/users/createUser', (req:Request, res:Response) => {
    const user = req.body;
    console.log(user)

    res.json({
        success: true,
        message: 'User created successfully',
        data:user
    })
})


const logger = (req:Request, res:Response, next:NextFunction) => {
    console.log(req.url, req.method)

    next()
}

app.get('/',logger, (req:Request, res:Response) => {
  res.send('Hello worldddddd!')
})

app.get('/',logger, async (req:Request, res:Response,next:NextFunction) => {
    try{
      res.send(some)
    }
    catch(error){
        // console.log(error)
        // res.status(400).json({
        //     success:false,
        //     message:'Failed to get data'
        // })
        next(error)
    }
    console.log(req.body)
    res.send('Hello data pailo')
});

app.all('*', (req:Request, res:Response) => {
    res.status(400).json({
        success:false,
        message: 'not route match'
    })
})

app.use((error:any, req:Request, res:Response, next:NextFunction) => {
    console.log(error)
    if(error){
        res.status(400).json({
            success:false,
            message:"Failed to get data"
        })
    }
})

export default app;