import { getProtected, postProtected } from "../until/requestPrivate";

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
