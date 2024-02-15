import { TAcademicFaculty } from './academicFaculty.interface';
import { AcademicFaculty } from './academicFaculty.model';

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFaculty.create(payload);
  return result;
};

const getAllAcademicFacaltiesFromDB = async () => {
  const result = await AcademicFaculty.find();
  return result;
};

const getSingleAcademicFacultyFromDB = async (id: string) => {
  const result = await AcademicFaculty.findById(id);
  if (!result) {
    throw new Error('Academic semester not found');
  }
  return result;
};

const updateSingleAcademicFacultyInDB = async (
  id: string,
  payload: Partial<TAcademicFaculty>
) => {
  const result = await AcademicFaculty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });

  if (!result) {
    throw new Error('Academic semester not found');
  }

  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFacaltiesFromDB,
  getSingleAcademicFacultyFromDB,
  updateSingleAcademicFacultyInDB,
};
