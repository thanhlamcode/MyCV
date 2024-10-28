/* eslint-disable jsx-a11y/img-redundant-alt */
import { Form } from "antd";
import { useEffect, useState } from "react";
import { getProject } from "../../../service/project.admin";
import BoxTitle from "../../../components/Admin/BoxTitle";
import FormProject from "../../../components/Admin/Form/formProject";
import { upLoadFile } from "../../../helpers/uploadFile";

function Project() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([[], [], [], [], [], []]);
  const [initialFileList, setInitialFileList] = useState([
    [],
    [],
    [],
    [],
    [],
    [],
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProject();
        console.log("Fetched data:", data);

        // Populate form fields with fetched data
        form.setFieldsValue({
          items: data.projects.map((project) => ({
            name: project.projectName,
            description: project.description,
            link: project.linkProject,
          })),
        });

        // Update fileList and initialFileList with URL images from the fetched data
        const fetchedFileList = data.projects.map((project, index) =>
          project.image
            ? [
                {
                  uid: `project-image-${index}`,
                  name: `Project Image ${index + 1}`,
                  status: "done",
                  url: project.image,
                },
              ]
            : []
        );

        setFileList(fetchedFileList);
        setInitialFileList(fetchedFileList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [form]);

  const handleFinish = async (values) => {
    try {
      console.log("Form values:", values);

      // Upload only the files that have changed or are new

      const uploadedFiles = await upLoadFile(
        fileList,
        initialFileList,
        setFileList
      );

      // Construct the projects array with all required information, including uploaded image URLs
      const projects = values.items.map((item, index) => ({
        projectName: item.name,
        description: item.description,
        linkProject: item.link,
        image: uploadedFiles[index], // Use the uploaded image URL
      }));

      const projectId = "671728fe982e1b8fd2babb74"; // Static project ID for demonstration
      console.log(
        "Sending PATCH request to update project with ID:",
        projectId
      );

      // Send the PATCH request to update the project with all collected data
      const response = await fetch(
        `http://localhost:4000/admin/project/edit/${projectId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ projects }),
        }
      );

      console.log("Received response from server:", response);

      if (response.ok) {
        const data = await response.json();
        console.log("Response data:", data);
      } else {
        const errorText = await response.text();
        console.error("Upload failed:", response.statusText, errorText);
      }
      setComponentDisabled(true);
    } catch (error) {
      console.error("Error in handleFinish:", error);
    }
  };

  const handleFileChange = (index, info) => {
    console.log(`Handling file change for index ${index}:`, info);

    const updatedFileList = [...fileList];
    updatedFileList[index] = info.fileList.map((file) => ({
      ...file,
      url: file.url || URL.createObjectURL(file.originFileObj), // Update the URL to reflect the newly selected file
    }));

    setFileList(updatedFileList);
    console.log("Updated fileList:", updatedFileList);
  };

  return (
    <div className="input-item">
      <BoxTitle
        componentDisabled={componentDisabled}
        title="Set up your project"
        setComponentDisabled={setComponentDisabled}
      />
      <FormProject
        componentDisabled={componentDisabled}
        handleFinish={handleFinish}
        form={form}
        fileList={fileList}
        handleFileChange={handleFileChange}
      />
    </div>
  );
}

export default Project;
