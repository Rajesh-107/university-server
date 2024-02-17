import { TAcademicDepartment } from './academicDepartment.interface';
import { AcademicDepartment } from './academicDepartment.model';

const createAcademicDepartmentIntoDB = async (payload: TAcademicDepartment) => {
  const result = await AcademicDepartment.create(payload);
  return result;
};

const getAllAcademicDepartmentsFromDB = async () => {
  const result = await AcademicDepartment.find().populate('academicFaculty');
  return result;
};

const getSingleAcademicDepartmentsFromDB = async (id: string) => {
  const result = await AcademicDepartment.findById(id).populate(
    'academicFaculty'
  );
  if (!result) {
    throw new Error('Academic Department not found');
  }
  return result;
};

const updateSingleAcademicDepartmentInDB = async (
  id: string,
  payload: Partial<TAcademicDepartment>
) => {
  const result = await AcademicDepartment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    }
  );

  if (!result) {
    throw new Error('Academic Department not found');
  }

  return result;
};

export const AcademicDepartmentServices = {
  createAcademicDepartmentIntoDB,
  getSingleAcademicDepartmentsFromDB,
  updateSingleAcademicDepartmentInDB,
  getAllAcademicDepartmentsFromDB,
};
