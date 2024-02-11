import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';

import { User } from './user.model';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';
import { Student } from '../student/student.model';

const createStudentIntoDB = async (password: string, payload: TStudent) => {
  // Create a user object
  const userData: Partial<TUser> = {};

  // If password is not given, use default password
  userData.password = password || (config.default_password as string);

  // Set student role
  userData.role = 'student';

  // Find academic semester info
  const Admissionsemester = await AcademicSemester.findById(
    payload.admissionSmester
  );
  console.log(Admissionsemester);

  // Ensure admissionSemester is not null
  // if (!admissionSemester) {
  //   throw new Error('Admission semester not found');
  // }

  // Set generated id
  userData.id = await generateStudentId(Admissionsemester);

  // Create a user
  const newUser = await User.create(userData);

  // Ensure newUser has been created
  if (!newUser) {
    throw new Error('Failed to create user');
  }

  // Set id and user properties in payload
  payload.id = newUser.id;
  payload.user = newUser._id; // Reference _id

  // Create a student
  const newStudent = await Student.create(payload);

  // Ensure newStudent has been created
  if (!newStudent) {
    throw new Error('Failed to create student');
  }

  return newStudent;
};

export const UserServices = {
  createStudentIntoDB,
};
