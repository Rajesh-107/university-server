import mongoose from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.model';

import httpStatus from 'http-status';
import { User } from '../user/user.model';
import AppError from '../../errors/AppError';

const getAllStudentsFromDB = async (query: Record<string, unknown>) => {
  const queryObj = { ...query };
  const stdentSearchfields = [
    'email',
    'name.firstname',
    'email.lastname',
    'presentAddress',
  ];
  let searchTerm = '';

  if (query?.searchTerm) {
    searchTerm = query?.searchTerm as string;
  }
  const searchQuery = Student.find({
    $or: stdentSearchfields.map((field) => ({
      [field]: { $regex: searchTerm, $options: 'i' },
    })),
  });

  const excludeFields = ['searchTerm', 'sort', 'limit'];

  excludeFields.forEach((el) => delete queryObj[el]);

  let sort = '-createdAt';

  if (query.sort) {
    sort = query.sort as string;
  }

  const filterQuery = searchQuery
    .find(queryObj)
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    })
    .sort(sort);

  let limit = 1;
  if (query.limit) {
    limit = Number(query.limit);
  }

  const limitedQuery = await filterQuery.limit(limit);

  return limitedQuery;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await Student.findOne({ id })
    .populate('admissionSemester')
    .populate({
      path: 'academicDepartment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const deleteSingleStudentFromDB = async (id: string) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedStudent) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session }
    );

    if (!deletedUser) {
      throw new AppError(httpStatus.BAD_REQUEST, 'Failed to delete user');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

const updateSingleStudentInDB = async (
  id: string,
  payLoad: Partial<TStudent>
) => {
  const { name, guardian, localGuardian, ...remainingStudentData } = payLoad;
  const moodifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      moodifiedUpdatedData[`name.${key}`] = value;
    }
  }
  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      moodifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      moodifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  console.log(moodifiedUpdatedData);
  const updatedDocument = await Student.findOneAndUpdate(
    { id },
    moodifiedUpdatedData,
    {
      new: true,
      runValidators: true,
    }
  );

  return updatedDocument;
};

export const StudentServices = {
  getAllStudentsFromDB,
  getSingleStudentFromDB,
  deleteSingleStudentFromDB,
  updateSingleStudentInDB,
};
