import { getProtected, patchProtected } from "../until/requestPrivate";

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

// Hàm cập nhật thông tin dự án
export const editProject = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    const formData = new FormData();

    // Đưa từng trường vào FormData
    for (const key in data) {
      if (key === "projects") {
        // Duyệt qua mảng dự án và đưa vào FormData
        data.projects.forEach((project, index) => {
          formData.append(
            `projects[${index}][projectName]`,
            project.projectName
          );
          formData.append(
            `projects[${index}][description]`,
            project.description
          );
          formData.append(
            `projects[${index}][linkProject]`,
            project.linkProject
          );

          // Nếu có ảnh, đưa ảnh vào FormData
          if (project.image && project.image.originFileObj) {
            formData.append(
              `projects[${index}][image]`,
              project.image.originFileObj
            );
          } else if (typeof project.image === "string") {
            // Nếu ảnh là URL (đã có trên server), chỉ đưa URL vào
            formData.append(`projects[${index}][image]`, project.image);
          }
        });
      } else {
        formData.append(key, data[key]);
      }
    }

    // Gửi yêu cầu cập nhật với FormData
    const response = await patchProtected(
      `/admin/project/edit/${user.project}`,
      formData
    );

    return response;
  } catch (error) {
    console.error("Lỗi khi cập nhật dự án:", error);
    throw error;
  }
};
