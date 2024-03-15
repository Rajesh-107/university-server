import httpStatus from 'http-status';
import { Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { OfferedCourseServices } from './offredCourse.service';

const createOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const result = await OfferedCourseServices.createOfferedCourseIntoDB(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester Registration is created successfully!',
    data: result,
  });
});
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })
// const createOfferedCourse = catchAsync(async (req:Request, res:Response) => {
//     const result = await
//     sendResponse(res, {
//         statusCode:httpStatus.ok,
//         success: true,
//         message: 'Course created successfully'
//         data:result
//     })
// })

export const OfferedCourseControllers = {
  createOfferedCourse,
  // getAllOfferedCourses,
  // getSingleOfferedCourses,
  // updateOfferedCourse,
  // deleteOfferedCourseFromDB,
};
