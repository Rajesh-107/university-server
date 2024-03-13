import { Schema } from 'mongoose';
import {
  TCourse,
  TCourseFaculty,
  TpreRequisiteCourses,
} from './course.interface';
import { model } from 'mongoose';

const preRequisiteCoursesSchema = new Schema<TpreRequisiteCourses>(
  {
    course: {
      type: Schema.Types.ObjectId,
      ref: 'Course',
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    _id: false,
  }
);

const courseSchema = new Schema<TCourse>(
  {
    title: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    prefix: {
      type: String,

      trim: true,
      required: true,
    },
    code: {
      type: Number,

      trim: true,
      required: true,
    },
    credits: {
      type: Number,

      trim: true,
      required: true,
    },
    preRequisiteCourses: [preRequisiteCoursesSchema],
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Course = model<TCourse>('Course', courseSchema);
const courseFacultiySchema = new Schema<TCourseFaculty>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
    unique: true,
  },
  faculties: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Faculty',
    },
  ],
});

export const courseFaculty = model<TCourseFaculty>(
  'CourseFaculty',
  courseFacultiySchema
);
