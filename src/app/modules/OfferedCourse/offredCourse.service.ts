import { OfferedCourse } from './offeredCourse.model';
import { TOfferedCourse } from './offeredCourse.interface';
import { SemesterRegistration } from '../semesterRegistration/semesterRegistration.model';
import AppError from '../../errors/AppError';
import httpStatus from 'http-status';
import { AcademicFaculty } from '../academicFaculty/academicFaculty.model';
import { AcademicDepartment } from '../academicDepartment/academicDepartment.model';
import { Course } from '../courses/course.model';
import { Faculty } from '../Faculty/faculty.model';
import { hasTimeConflict } from './offeredCourse.utils';

const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
  const {
    semesterRegistration,
    academicFaculty,
    academicDepartment,
    course,
    faculty,
    section,
    days,
    startTime,
    endTime,
  } = payLoad;

  const isSemesterRegistrationExits = await SemesterRegistration.findById(
    semesterRegistration
  );
  if (!isSemesterRegistrationExits) {
    throw new AppError(httpStatus.NOT_FOUND, 'Semester registration not found');
  }
  const acadmecicSemester = isSemesterRegistrationExits?.academicSemester;

  const isAcademicFacultyExist = await AcademicFaculty.findById(
    academicFaculty
  );
  if (!isAcademicFacultyExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'AcademicFacultyExist not found');
  }
  const isAcademicDepartmentExist = await AcademicDepartment.findById(
    academicDepartment
  );
  if (!isAcademicDepartmentExist) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      'AcademicDepartmentExist Exist not found'
    );
  }
  const isCourseExist = await Course.findById(course);
  if (!isCourseExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'course Exist not found');
  }
  const isFacultyExist = await Faculty.findById(faculty);
  if (!isFacultyExist) {
    throw new AppError(httpStatus.NOT_FOUND, 'course Exist not found');
  }
  const isDepartmentBelongToFaculty = await AcademicDepartment.findOne({
    academicFaculty,
    _id: academicDepartment,
  });
  if (!isDepartmentBelongToFaculty) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This ${isAcademicDepartmentExist.name} is not belong to this  ${isFacultyExist.name}}`
    );
  }
  const isSameOfferedCourseExistsWithSameRegisteedCourse =
    await OfferedCourse.findOne({
      semesterRegistration,
      course,
      section,
    });
  if (!isSameOfferedCourseExistsWithSameRegisteedCourse) {
    throw new AppError(
      httpStatus.BAD_REQUEST,
      `This offred course sction alredy exists `
    );
  }

  const assignedSchedules = await OfferedCourse.find({
    semesterRegistration,
    faculty,
    days: { $in: days },
  }).select('days stratTime endTime');

  const newSchedule = {
    days,
    startTime,
    endTime,
  };
  if (hasTimeConflict(assignedSchedules, newSchedule)) {
    throw new AppError(
      httpStatus.CONFLICT,
      `This offred course sction alredy exists `
    );
  }

  const result = await OfferedCourse.create({ ...payLoad, acadmecicSemester });
  return result;
};

// const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
//   const result = await OfferedCourse.create(payLoad);

//   return result;
// };
// const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
//   const result = await OfferedCourse.create(payLoad);

//   return result;
// };
// const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
//   const result = await OfferedCourse.create(payLoad);

//   return result;
// };
// const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
//   const result = await OfferedCourse.create(payLoad);

//   return result;
// };

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
  // getAllOfferedCoursesFromDB,
  // getSingleOfferedCourseFromDB,
  // deleteOfferedCourseFromDB,
  // updateOfferedCourseIntoDB,
};
