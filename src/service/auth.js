import { post } from "../until/request";

export const login = async (data) => {
  try {
    // Gửi yêu cầu đăng nhập
    const response = await post("/auth/login", data);

    // Kiểm tra nếu có token và thông tin người dùng trong phản hồi
    if (response.token && response.user) {
      // Lưu token vào localStorage
      localStorage.setItem("token", response.token);

      // Lưu toàn bộ đối tượng user vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error; // Ném lỗi ra ngoài để xử lý tiếp nếu cần
  }
};

export const register = async (data) => {
  try {
    const response = await post("/auth/register", data);

    // Kiểm tra nếu có token và thông tin người dùng trong phản hồi
    if (response.token && response.user) {
      // Lưu token vào localStorage
      localStorage.setItem("token", response.token);

      // Lưu toàn bộ đối tượng user vào localStorage
      localStorage.setItem("user", JSON.stringify(response.user));
    }

    return response;
  } catch (error) {
    console.error("Lỗi khi đăng ký:", error);
    throw error; // Ném lỗi ra ngoài để xử lý tiếp nếu cần
  }
};
