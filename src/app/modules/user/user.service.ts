import { StudentModel } from './../student/student.model';

import config from '../../config';
import { Student } from '../student/student.interface';
import { TUser } from './user.interface';

import { User } from './user.model';

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  userData.id = '2024100001';
  //doing here references id with user
  const newUser = await User.create(userData);
  if (Object.keys(newUser).length) {
    studentData.id = newUser.id; //embdding id
    studentData.user = newUser._id; // reference id

    const newstudent = await StudentModel.create(studentData);
    return newstudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
