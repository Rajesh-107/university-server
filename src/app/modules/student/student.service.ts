import { TStudent } from './student.interface';
import { Student } from './student.model';

const getAllStudentsFromDB = async (student: TStudent) => {
  const result = await Student.find(student)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findById(id)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });

  // const result = await Student.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

const updateSingleStudentInDB = async (id, updatedData) => {
  const result = await Student.updateOne({ id }, { $set: updatedData });

  const updatedDocument = await Student.findOne({ id });

  return updatedDocument;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
  updateSingleStudentInDB,
};
