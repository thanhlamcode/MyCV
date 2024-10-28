import { getProtected } from "../until/requestPrivate";

export const getEducation = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const response = await getProtected(`/admin/resume/${user.resume}`);
  return response.education;
};
