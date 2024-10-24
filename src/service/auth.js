import { post } from "../until/request";

export const login = async (data) => {
  try {
    const response = await post("/auth/login", data);

    if (response.token && response.user) {
      localStorage.setItem("token", response.token);

      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error;
  }
};

export const register = async (data) => {
  try {
    const response = await post("/auth/register", data);

    if (response.token && response.user) {
      localStorage.setItem("token", response.token);

      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    throw error; // Ném lỗi ra ngoài để xử lý tiếp nếu cần
  }
};
