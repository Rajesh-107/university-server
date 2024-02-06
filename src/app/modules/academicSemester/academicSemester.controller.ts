import { RequestHandler } from 'express';

const createAcademicSemester: RequestHandler = async (req, res, next) => {
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
};

export const AcademicSemesterControllers = {
  createAcademicSemester,
};
