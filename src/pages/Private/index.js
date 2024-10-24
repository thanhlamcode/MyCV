import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => {
  const token = localStorage.getItem("token"); // Lấy token từ localStorage (không cần JSON.parse)
  return token !== null; // Trả về true nếu token tồn tại, ngược lại là false
};

const PrivateRoute = () => {
  if (!isAuthenticated()) {
    return <Navigate to="/" state={{ message: "Vui lòng đăng nhập" }} />;
  }

  return <Outlet />; // Hiển thị các route con khi người dùng đã đăng nhập
};

export default PrivateRoute;
