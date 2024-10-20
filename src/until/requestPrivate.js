const API_DOMAIN = "http://localhost:4000";
// const API_DOMAIN = "https://database-tuyendung.onrender.com";

// Lấy token từ localStorage
const getToken = () => {
  return localStorage.getItem("token"); // Hoặc thay đổi nơi lưu trữ token theo nhu cầu
};

// GET request với Bearer Token
export const getProtected = async (path) => {
  const token = getToken();
  const response = await fetch(API_DOMAIN + path, {
    headers: {
      Authorization: `Bearer ${token}`, // Thêm Bearer token vào header
    },
  });
  const results = await response.json();
  return results;
};

// POST request với Bearer Token
export const postProtected = async (path, data) => {
  const token = getToken();
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Thêm Bearer token vào header
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// PATCH request với Bearer Token
export const patchProtected = async (path, id, data) => {
  const token = getToken();
  const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`, // Thêm Bearer token vào header
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

// DELETE request với Bearer Token
export const deleteProtected = async (path, id) => {
  const token = getToken();
  const response = await fetch(`${API_DOMAIN}${path}/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // Thêm Bearer token vào header
    },
  });
  return response.json();
};
