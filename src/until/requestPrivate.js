import { API_DOMAIN } from "../config/domain";

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

// POST request with Bearer Token
export const postProtected = async (path, data) => {
  const token = getToken();
  let headers = {
    Authorization: `Bearer ${token}`, // Include Bearer token
  };

  let body;
  // Check if the data is FormData (for file uploads)
  if (data instanceof FormData) {
    body = data; // FormData automatically handles the Content-Type
  } else {
    headers["Content-Type"] = "application/json"; // Set JSON Content-Type
    body = JSON.stringify(data); // Convert data to JSON
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers,
    body,
  });

  return response.json();
};

// PATCH request with Bearer Token
export const patchProtected = async (path, data) => {
  const token = getToken();
  let headers = {
    Authorization: `Bearer ${token}`, // Include Bearer token
  };

  let body;
  // Check if the data is FormData (for file uploads)
  if (data instanceof FormData) {
    body = data; // FormData automatically handles the Content-Type
  } else {
    headers["Content-Type"] = "application/json"; // Set JSON Content-Type
    body = JSON.stringify(data); // Convert data to JSON
  }

  const response = await fetch(API_DOMAIN + path, {
    method: "PATCH",
    headers,
    body,
  });

  return response.json();
};

// DELETE request với Bearer Token
export const deleteProtected = async (path, id) => {
  const token = getToken();
  const response = await fetch(`${API_DOMAIN}${path}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`, // Thêm Bearer token vào header
    },
  });
  return response.json();
};
