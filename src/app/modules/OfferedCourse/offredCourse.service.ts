import { OfferedCourse } from './offeredCourse.model';
import { TOfferedCourse } from './offeredCourse.interface';

const createOfferedCourseIntoDB = async (payLoad: TOfferedCourse) => {
  const result = await OfferedCourse.create(payLoad);

  return result;
};

export const OfferedCourseServices = {
  createOfferedCourseIntoDB,
  // getAllOfferedCoursesFromDB,
  // getSingleOfferedCourseFromDB,
  // deleteOfferedCourseFromDB,
  // updateOfferedCourseIntoDB,
};
