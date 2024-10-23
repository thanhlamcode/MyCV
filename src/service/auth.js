import { post } from "../until/request";

export const login = async (data) => {
  try {
    // Gửi yêu cầu đăng nhập
    const response = await post("/auth/login", data);

    // Kiểm tra nếu có token và thông tin người dùng trong phản hồi
    if (response.token && response.user) {
      // Lưu token vào localStorage
      localStorage.setItem("token", response.token);

      // Lưu thông tin người dùng vào localStorage
      localStorage.setItem("userId", response.user._id);
      localStorage.setItem("emailAddress", response.user.emailAddress);
      localStorage.setItem("contact", response.user.contact);
      localStorage.setItem("feature", response.user.feature);
      localStorage.setItem("information", response.user.information);
      localStorage.setItem("project", response.user.project);
      localStorage.setItem("resume", response.user.resume);
    }

    return response;
  } catch (error) {
    console.error("Lỗi khi đăng nhập:", error);
    throw error; // Ném lỗi ra ngoài để xử lý tiếp nếu cần
  }
};
