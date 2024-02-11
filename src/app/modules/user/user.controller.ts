// import { RequestHandler } from 'express';
// import { UserServices } from './user.service';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

// const createStudent: RequestHandler = async (req, res, next) => {
//   try {
//     const { password, student: studentData } = req.body;

//     const result = await UserServices.createStudentIntoDB(
//       password,
//       studentData
//     );

//     res.status(200).json({
//       success: true,
//       message: 'Student created successfully',
//       data: result,
//     });
//   } catch (error) {
//     console.error('Error creating student:', error);

//     next(error);
//   }
// };

// export const UserController = {
//   createStudent,
// };

const createStudent = catchAsync(async (req, res) => {
  const { password } = req.body;
  const studentData = req.body.student;

  const result = await UserServices.createStudentIntoDB(password, studentData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const UserController = {
  createStudent,
};
