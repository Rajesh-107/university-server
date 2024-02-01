import { Student } from './student.interface';
import { NextFunction, Request, Response } from 'express';
import { StudentServices } from './student.service';

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: 'Student found successfully',
      data: result,
    });
  } catch (error) {
    // res.status(500).json({
    //   success: false,
    //   message: 'Internal Server Error',
    //   error: error.message,
    // });
    next(error);
  }
};

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentId = req.params.studentId;

    const result = await StudentServices.getSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student data found successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deleteSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const studentId = req.params.studentId;

    const result = await StudentServices.deleteSingleStudentFromDB(studentId);
    res.status(200).json({
      success: true,
      message: 'Single Student data deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const singleStudentDataUpdate = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
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

    res.status(200).json({
      success: true,
      message: 'Single Student data updated successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
  deleteSingleStudent,
  singleStudentDataUpdate,
};
