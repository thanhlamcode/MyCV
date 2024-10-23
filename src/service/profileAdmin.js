import { getProtected } from "../until/requestPrivate";

export const getInfomation = async (idInfo) => {
  try {
    const response = await getProtected(`admin/information/edit/${idInfo}`);
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin:", error);
    throw error;
  }
};
