import { ObjectId } from 'mongoose';
import { AcademicSemesterNameCodMapper } from './academicSemester.Constant';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payLoad: TAcademicSemester) => {
  if (AcademicSemesterNameCodMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid semester Code');
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};

const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};
const getAcademicSemesterFromDB = async (_id: ObjectId) => {
  const result = await AcademicSemester.findOne({ _id });

  return result;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateSingleAcadamicSemesterInDB = async (
  _id: ObjectId,
  updatedData: any
) => {
  const result = await AcademicSemester.updateOne(
    { _id },
    { $set: updatedData }
  );

  const updatedDocument = await AcademicSemester.findOne({ _id });

  return updatedDocument;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
  getAllAcademicSemesterFromDB,
  getAcademicSemesterFromDB,
  updateSingleAcadamicSemesterInDB,
};
