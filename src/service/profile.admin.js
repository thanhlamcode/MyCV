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

    const formData = new FormData();

    // Append each field to FormData
    for (const key in data) {
      if (key === "avatar" && data.avatar && data.avatar.length > 0) {
        // Append the avatar file if it exists
        formData.append("avatar", data.avatar[0].originFileObj);
      } else {
        formData.append(key, data[key]);
      }
    }

    // Use patchProtected to handle the API request
    const response = await patchProtected(
      `/admin/information/edit/${user.information}`,
      formData // Pass FormData object
    );

    return response;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin:", error);
    throw error;
  }
};
