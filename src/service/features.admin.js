import { getProtected, patchProtected } from "../until/requestPrivate";

export const getFeatures = async () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await getProtected(`/admin/feature/${user.feature}`);
    return response.skills;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin:", error);
    throw error;
  }
};

export const editFeatures = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    const response = await patchProtected(
      `/admin/feature/edit/${user.feature}`,
      data
    );
    return response;
  } catch (error) {
    console.error("Lỗi khi lấy thông tin:", error);
    throw error;
  }
};
