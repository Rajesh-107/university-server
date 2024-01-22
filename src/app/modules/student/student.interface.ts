import { Schema, model, connect } from 'mongoose';

export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type localGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};
export type Student = {
  id: string;
  name: {
    fisrtName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateofBirth?: string;
  contactNo: string;
  emergencyNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  email: string;
  avatar?: string;
  localGuardian: localGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
