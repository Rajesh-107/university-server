import { StudentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

const getAllStudents = catchAsync(async (req, res) => {
  const result = await StudentServices.getAllStudentsFromDB(req.query);
  res.status(200).json({
    success: true,
    message: 'Student found successfully',
    data: result,
  });
});

const getSingleStudent = catchAsync(async (req, res) => {
  // const studentId = req.params.studentId;
  const { id } = req.params;
  const result = await StudentServices.getSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Single Student data found successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await StudentServices.updateSingleStudentInDB(id, student);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is updated succesfully',
    data: result,
  });
});

const deleteSingleStudent = catchAsync(async (req, res) => {
  // const studentId = req.params.studentId;
  const { id } = req.params;

  const result = await StudentServices.deleteSingleStudentFromDB(id);
  res.status(200).json({
    success: true,
    message: 'Single Student data deleted successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
  updateStudent,
};
