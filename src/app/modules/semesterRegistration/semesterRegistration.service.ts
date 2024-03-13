import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import QueryBuilder from '../../builder/Querybuilder';

const createSemesterRegistrationIntoDB = async (
  payLoad: TSemesterRegistration
) => {
  const academicSmester = payLoad?.academicSemester;
  const isAcademicSmesterExist = await AcademicSemester.findById(
    academicSmester
  );
  if (!isAcademicSmesterExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not found data');
  }

  const isSemesterRegistrationExists = await SemesterRegistration.findOne({
    academicSmester,
  });

  if (isSemesterRegistrationExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      'Already exists Semester registration'
    );
  }
  const result = await SemesterRegistration.create(payLoad);

  return result;
};

const getAllSemesterRegistrationsFromDB = async (
  query: Record<string, unknown>
) => {
  const semesterRegistrationQuery = new QueryBuilder(
    SemesterRegistration.find().populate('academicSemester'),
    query
  )
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await semesterRegistrationQuery.modelQuery;
  return result;
};

const getSingleSemesterRegistrationsFromDB = async (id: string) => {
  const result = await SemesterRegistration.findById(id);

  return result;
};
const updateSemesterRegistrationsFromDB = async (id: string) => {
  const result = await SemesterRegistration.findByIdAndUpdate(id);

  return result;
};

export const SemesterRegistrationService = {
  createSemesterRegistrationIntoDB,
  getAllSemesterRegistrationsFromDB,
  getSingleSemesterRegistrationsFromDB,
  updateSemesterRegistrationsFromDB,
  // updateSemesterRegistrationIntoDB,
  // deleteSemesterRegistrationFromDB,
};
