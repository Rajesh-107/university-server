import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB();
  res.status(200).json({
    success: true,
    message: 'Student found successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.getSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Single Student data found successfully',
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;

  const result = await StudentServices.deleteSingleStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Single Student data deleted successfully',
    data: result,
  });
});

const singleStudentDataUpdate = catchAsync(async (req, res) => {
  const studentId = req.params.studentId;
  const updatedData = req.body;

  const existingStudent = await StudentServices.getSingleStudentFromDB(
    studentId
  );
  if (!existingStudent || existingStudent.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'Student not found',
    });
  }

  const result = await StudentServices.updateSingleStudentInDB(
    studentId,
    updatedData
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student updated successfull',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
  singleStudentDataUpdate,
};
