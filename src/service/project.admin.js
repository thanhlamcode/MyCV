import { getProtected } from "../until/requestPrivate";

// Hàm lấy thông tin dự án
export const getProject = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await getProtected(`/admin/project/${user.project}`);
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin dự án:", error);
    throw error;
  }
};
