import httpStatus from 'http-status';
import AppError from '../../errors/AppError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import bcrypt from 'bcrypt';

const loginUser = async (payLoad: TLoginUser) => {
  const usersData = await User.isUserExixtsByCustomId(payLoad.id);
  if (!usersData) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found');
  }
  // const isUserDeleted = isUserExixts?.isDeleted;
  // console.log(isUserExixts);
  // if (isUserDeleted) {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is not found');
  // }
  // const isUserStatus = isUserExixts?.status;
  // console.log(isUserExixts);
  // if (isUserStatus === 'blocked') {
  //   throw new AppError(httpStatus.FORBIDDEN, 'This user is blocked');
  // }

  //checcking if password is crrect
  if (!(await User.isPasswordMatched(payLoad?.password, usersData?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'password is not matched');
  }

  return {};
};

export const AuthServices = {
  loginUser,
};
