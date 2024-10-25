import { getProtected } from "../until/requestPrivate";

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

    const response = await fetch(
      `http://localhost:4000/admin/information/edit/${user.information}`,
      {
        method: "PATCH",
        headers: {
          // Do not set Content-Type, as FormData automatically sets the correct headers.
          Authorization: `Bearer ${user.token}`, // Include the token in the request header
        },
        body: formData, // Send the formData object
      }
    );

    // Check if the response is OK
    if (!response.ok) {
      throw new Error("Failed to update information");
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Lỗi khi cập nhật thông tin:", error);
    throw error;
  }
};
