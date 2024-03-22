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
// const getAllOfferedCourses = catchAsync(async (req: Request, res: Response) => {
//   //   const result =
//   //   sendResponse(res, {
//   //     statusCode: httpStatus.OK,
//   //     success: true,
//   //     message: 'OfferedCourses retrieved successfully !',
//   //     data: result,
//   //   });
// });

// const getSingleOfferedCourses = catchAsync(
//   async (req: Request, res: Response) => {
//     const { id } = req.params;
//     //   const result =
//     //   sendResponse(res, {
//     //     statusCode: httpStatus.OK,
//     //     success: true,
//     //     message: 'OfferedCourse fetched successfully',
//     //     data: result,
//     //   });
//   }
// );
const updateOfferedCourse = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  const result = await OfferedCourseServices.updateOfferedCourseIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'OfferedCourse updated successfully',
    data: result,
  });
});

const deleteOfferedCourseFromDB = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await OfferedCourseServices.de(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'OfferedCourse deleted successfully',
      data: result,
    });
  }
);

export const OfferedCourseControllers = {
  createOfferedCourse,
  updateOfferedCourse,
  deleteOfferedCourseFromDB,
  // getAllOfferedCourses,
};
