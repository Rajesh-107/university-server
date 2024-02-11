import { TAcademicSemester } from '../academicSemester/academicSemester.interface';

export const generateStudentId = (payLoad: TAcademicSemester) => {
  const currentId = (0).toString().padStart(4, '0');
  let inrementId = (Number(currentId) + 1).toString();

  inrementId = `${payLoad?.year}${payLoad?.code}${inrementId}`;

  return inrementId;
};
