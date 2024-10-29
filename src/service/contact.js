import { getProtected } from "../until/requestPrivate";

const user = JSON.parse(localStorage.getItem("user"));
export const getContact = async () => {
  const response = await getProtected(`/admin/contact/${user.contact}`);
  return response;
};
