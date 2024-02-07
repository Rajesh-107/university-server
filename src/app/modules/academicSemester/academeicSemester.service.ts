import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDb = async (payLoad: TAcademicSemester) => {
  type tAcademicSemesterNameCodMapper = {
    [key: string]: string;
  };
  //check semester name and code
  const AcademicSemesterNameCodMapper: tAcademicSemesterNameCodMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };
  if (AcademicSemesterNameCodMapper[payLoad.name] !== payLoad.code) {
    throw new Error('Invalid semester Code');
  }
  const result = await AcademicSemester.create(payLoad);
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDb,
};
