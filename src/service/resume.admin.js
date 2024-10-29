import {
  deleteProtected,
  getProtected,
  patchProtected,
  postProtected,
} from "../until/requestPrivate";

const user = JSON.parse(localStorage.getItem("user"));

export const getEducation = async () => {
  const response = await getProtected(`/admin/resume/${user.resume}`);
  return response.education;
};

export const addNewEducation = async (data) => {
  const response = await postProtected(
    `/admin/resume/add/education/${user.resume}`,
    data
  );
  return response;
};

export const editEducation = async (data, recordId) => {
  const response = await patchProtected(
    `/admin/resume/edit/education/${user.resume}/${recordId}`,
    data
  );
  return response;
};

export const deleteEducation = async (recordId) => {
  const response = await deleteProtected(
    `/admin/resume/delete/education/${user.resume}/${recordId}`
  );
  return response;
};
