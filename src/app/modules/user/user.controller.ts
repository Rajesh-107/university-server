// import { RequestHandler } from 'express';
// import { UserServices } from './user.service';

import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;

  try {
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData
    );

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student is created successfully',
      data: result,
    });
  } catch (error) {
    sendResponse(res, {
      statusCode: error.status || httpStatus.INTERNAL_SERVER_ERROR,
      success: false,
      message: error.message || 'Internal Server Error',
      error: error,
    });
  }
});

export const UserController = {
  createStudent,
};
