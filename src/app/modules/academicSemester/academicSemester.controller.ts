import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicSemesterServices } from './academeicSemester.service';

const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDb(
    req.body
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester created successfully',
    data: result,
  });
});

const getAllAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllAcademicSemesterFromDB();
  res.status(200).json({
    success: true,
    message: 'All Academic semester found successfully',
    data: result,
  });
});

const getSingleAcademicSemester = catchAsync(async (req, res) => {
  const academicSemesterId = req.params.id;

  const result = await AcademicSemesterServices.getAcademicSemesterFromDB(
    academicSemesterId
  );
  res.status(200).json({
    success: true,
    message: 'Single Student data found successfully',
    data: result,
  });
});

const singleAcademicSemesterDataUpdate = catchAsync(async (req, res) => {
  const academicId = req.params.id;
  const updatedData = req.body;

  const existingAcademicSemester =
    await AcademicSemesterServices.getAcademicSemesterFromDB(academicId);
  if (!existingAcademicSemester || existingAcademicSemester.length === 0) {
    return res.status(404).json({
      success: false,
      message: 'Academic Semester not found',
    });
  }

  const result =
    await AcademicSemesterServices.updateSingleAcadamicSemesterInDB(
      academicId,
      updatedData
    );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester updated successfull',
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllAcademicSemester,
  getSingleAcademicSemester,
  singleAcademicSemesterDataUpdate,
};
