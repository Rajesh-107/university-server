export type Guardian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};

export type LocalGuardian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Student = {
  id: string;
  password: string;
  name: {
    firstName: string;
    middleName: string;
    lastName: string;
  };
  gender: 'male' | 'female';
  dateOfBirth?: string;
  contactNo: string;
  emergencyNumber: string;
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  email: string;
  avatar?: string;
  localGuardian: LocalGuardian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
  isDeleted: boolean;
};
