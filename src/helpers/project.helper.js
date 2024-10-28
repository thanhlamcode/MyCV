import { API_DOMAIN } from "../config/domain";

export const upLoadFile = async (fileList, initialFileList, setFileList) => {
  const uploadedFiles = await Promise.all(
    fileList.map(async (files, index) => {
      if (
        files.length > 0 &&
        (!initialFileList[index] ||
          files[0]?.originFileObj !== undefined || // Check if there's a new file to be uploaded
          files[0]?.url !== initialFileList[index][0]?.url)
      ) {
        const formData = new FormData();
        formData.append("file", files[0].originFileObj);
        formData.append("upload_preset", "your_upload_preset");

        // Send the file to Cloudinary or another service using fetch
        const response = await fetch(`${API_DOMAIN}/admin/project/upload`, {
          method: "POST",
          body: formData,
        });

        if (!response.ok) {
          throw new Error(
            `Upload failed for index ${index}: ${response.statusText}`
          );
        }

        const data = await response.json();
        console.log(`File uploaded for index ${index}:`, data);

        // Update fileList to include the new URL after successful upload
        const updatedFileList = [...fileList];
        updatedFileList[index] = [
          {
            ...files[0],
            url: data.secure_url,
            status: "done",
          },
        ];
        setFileList(updatedFileList);

        return data.secure_url; // Return the URL of the uploaded file
      }

      // Return the original URL if no new file was uploaded
      return files.length > 0 ? files[0].url : null;
    })
  );

  return uploadedFiles;
};

export const editProject = async (projects) => {
  const projectId = localStorage.getItem("project");
  console.log("Sending PATCH request to update project with ID:", projectId);

  // Send the PATCH request to update the project with all collected data
  const response = await fetch(
    `${API_DOMAIN}/admin/project/edit/${projectId}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ projects }),
    }
  );

  return response;
};
