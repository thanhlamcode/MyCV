import { getProtected } from "../until/requestPrivate";
import { post } from "../until/request";

const user = JSON.parse(localStorage.getItem("user"));

export const getContact = async () => {
  const response = await getProtected(`/admin/contact/${user.contact}`);
  return response;
};

export const sendContact = async () => {
  const response = await post(
    `contact/671728fe982e1b8fd2babb71/${user.contact}`
  );
  return response;
};
