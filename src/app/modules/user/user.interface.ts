import { Model } from 'mongoose';

export interface TUser {
  id: string;
  password: string;
  needsPasswordChange: boolean;
  role: 'student' | 'admin' | 'faculty';
  status: 'in-progress' | 'blocked';
  isDeleted: boolean;
}
// export type newUser = {
//   password: string;
//   role: string;
//   id: string;
// };
export interface UserModel extends Model<TUser> {
  // myStaticMethod(): number;
  isUserExixtsByCustomId(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedpassword: string
  ): Promise<boolean>;
}
