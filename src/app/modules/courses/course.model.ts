import { Schema } from 'mongoose';
import { TCourse, TpreRequisiteCourses } from './course.interface';
import { model } from 'mongoose';

const preRequisiteCoursesSchema = new Schema<TpreRequisiteCourses>({
  course: {
    type: Schema.Types.ObjectId,
    ref: 'Course',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});

const courseSchema = new Schema<TCourse>({
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
});

export const Course = model<TCourse>('Course', courseSchema);
