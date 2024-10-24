import { getProtected, patchProtected } from "../until/requestPrivate";

export const getInfomation = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await getProtected(
      `/admin/information/${user.information}`
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin:", error);
    throw error;
  }
};

export const editInformation = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user);
    const response = await patchProtected(
      `/admin/information/edit/${user.information}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin:", error);
    throw error;
  }
};
