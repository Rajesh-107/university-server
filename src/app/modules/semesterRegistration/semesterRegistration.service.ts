import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TSemesterRegistration } from './semesterRegistration.interface';
import { SemesterRegistration } from './semesterRegistration.model';
import QueryBuilder from '../../builder/Querybuilder';
import { RegistrationStatus } from './semesterReegistration.constant';

const createSemesterRegistrationIntoDB = async (
  payLoad: TSemesterRegistration
) => {
  const academicSmester = payLoad?.academicSemester;

  //check if the semester that is already upcoming
  const isThereAnyUpcmingOngoingSemeester = await SemesterRegistration.findOne({
    $or: [
      { status: RegistrationStatus.UPCOMING },
      { status: RegistrationStatus.ONGOING },
    ],
  });

  if (isThereAnyUpcmingOngoingSemeester) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `There is already a ${isThereAnyUpcmingOngoingSemeester.status} registred semester`
    );
  }

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
const updateSemesterRegistrationsFromDB = async (
  id: string,
  payLoad: Partial<TSemesterRegistration>
) => {
  //check if the registration semesters are already existing

  const isSemesterRegistrationExists = await SemesterRegistration.findById(id);

  if (!isSemesterRegistrationExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Not found semesters');
  }

  const currentSeemesterStatus = isSemesterRegistrationExists?.status;
  const requestedstatus = payLoad?.status;

  if (currentSeemesterStatus === RegistrationStatus.ENDED) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `this semester is already ${currentSeemesterStatus}`
    );
  }
  //upcoming ongoing ended
  if (
    currentSeemesterStatus === RegistrationStatus.UPCOMING &&
    requestedstatus === RegistrationStatus.ENDED
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not update status ${currentSeemesterStatus} to ${requestedstatus}`
    );
  }
  if (
    currentSeemesterStatus === RegistrationStatus.ONGOING &&
    requestedstatus === RegistrationStatus.UPCOMING
  ) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `You can not update status ${currentSeemesterStatus} to ${requestedstatus}`
    );
  }
  const result = await SemesterRegistration.findByIdAndUpdate(id, payLoad, {
    new: true,
    runValidators: true,
  });
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
