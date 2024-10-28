/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { Form } from "antd";
import { useEffect, useState } from "react";
import { getProject } from "../../../service/project.admin";
import BoxTitle from "../../../components/Admin/BoxTitle";
import FormProject from "../../../components/Admin/Form/formProject";
import { editProject, upLoadFile } from "../../../helpers/project.helper";

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
    fetchProjectData();
  }, [form]);

  const fetchProjectData = async () => {
    try {
      const data = await getProject();
      form.setFieldsValue({
        items: data.projects.map((project) => ({
          name: project.projectName,
          description: project.description,
          link: project.linkProject,
        })),
      });

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
      console.error("Error fetching project data:", error);
    }
  };

  const handleFinish = async (values) => {
    try {
      const uploadedFiles = await upLoadFile(
        fileList,
        initialFileList,
        setFileList
      );
      const projects = values.items.map((item, index) => ({
        projectName: item.name,
        description: item.description,
        linkProject: item.link,
        image: uploadedFiles[index],
      }));

      const response = await editProject(projects);
      if (response.ok) {
        const data = await response.json();
        console.log("Project update response:", data);
      } else {
        console.error("Project update failed:", response.statusText);
      }
      setComponentDisabled(true);
    } catch (error) {
      console.error("Error in handleFinish:", error);
    }
  };

  const updateFileList = (index, info) => {
    const updatedFileList = [...fileList];
    updatedFileList[index] = info.fileList.map((file) => ({
      ...file,
      url: file.url || URL.createObjectURL(file.originFileObj),
    }));
    setFileList(updatedFileList);
  };

  const handleFileChange = (index, info) => {
    updateFileList(index, info);
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
