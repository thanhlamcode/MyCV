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

// Lấy danh sách Achievement
export const getAchievement = async () => {
  const response = await getProtected(`/admin/resume/${user.resume}`);
  return response.achievement;
};

// Thêm Achievement mới
export const addAchievement = async (data) => {
  const response = await postProtected(
    `/admin/resume/add/achievement/${user.resume}`,
    data
  );
  return response;
};

// Chỉnh sửa Achievement
export const editAchievement = async (data, recordId) => {
  const response = await patchProtected(
    `/admin/resume/edit/achievement/${user.resume}/${recordId}`,
    data
  );
  return response;
};

// Xóa Achievement
export const deleteAchievement = async (recordId) => {
  const response = await deleteProtected(
    `/admin/resume/delete/achievement/${user.resume}/${recordId}`
  );
  return response;
};

// Lấy danh sách Certificate
export const getCertificate = async () => {
  const response = await getProtected(`/admin/resume/${user.resume}`);
  return response.certificate;
};

// Thêm Certificate mới
export const addCertificate = async (data) => {
  const response = await postProtected(
    `/admin/resume/add/certificate/${user.resume}`,
    data
  );
  return response;
};

// Chỉnh sửa Certificate
export const editCertificate = async (data, recordId) => {
  const response = await patchProtected(
    `/admin/resume/edit/certificate/${user.resume}/${recordId}`,
    data
  );
  return response;
};

// Xóa Certificate
export const deleteCertificate = async (recordId) => {
  const response = await deleteProtected(
    `/admin/resume/delete/certificate/${user.resume}/${recordId}`
  );
  return response;
};
