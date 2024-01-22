import { Schema, model, connect } from 'mongoose';
import { Student } from './student.interface';

const studentsSchema = new Schema<Student>({
  id: { type: String },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
  },
  dateOfBirth: {
    type: String,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyNumber: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  guardian: {
    fatherName: { type: String, required: true },
    fatherOccupation: { type: String, required: true },
    fatherContactNo: { type: String, required: true },
    motherName: { type: String, required: true },
    motherOccupation: { type: String, required: true },
    motherContactNo: { type: String, required: true },
  },
  email: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
  },
  localGuardian: {
    name: { type: String, required: true },
    occupation: { type: String, required: true },
    contactNo: { type: String, required: true },
    address: { type: String, required: true },
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    required: true,
  },
});

export const StudentModel = model<Student>('Student', studentsSchema);
