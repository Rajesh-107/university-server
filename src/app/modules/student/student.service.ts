import { TStudent } from './student.interface';
import { StudentModel } from './student.model';

const getAllStudentsFromDB = async (student: TStudent) => {
  const result = await StudentModel.find(student);
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  // const result = await StudentModel.findOne({ id });

  const result = await StudentModel.aggregate([{ $match: { id: id } }]);
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true });
  return result;
};

const updateSingleStudentInDB = async (id, updatedData) => {
  const result = await StudentModel.updateOne({ id }, { $set: updatedData });

  const updatedDocument = await StudentModel.findOne({ id });

  return updatedDocument;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
  updateSingleStudentInDB,
};
