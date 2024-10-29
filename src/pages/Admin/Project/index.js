import { Form, message } from "antd";
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
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(false); // State để quản lý loading

  useEffect(() => {
    fetchProjectData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      setLoading(true); // Bắt đầu loading
      message.loading({
        content: "Đang tiến hành upload ảnh...",
        key: "upload",
      }); // Hiển thị thông báo loading

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
        message.success({
          content: "Cập nhật thành công!",
          key: "upload",
          duration: 2,
        });
      } else {
        console.error("Project update failed:", response.statusText);
        message.error({
          content: "Tải lên thất bại.",
          key: "upload",
          duration: 2,
        });
      }
    } catch (error) {
      console.error("Error in handleFinish:", error);
      message.error({
        content: "Đã xảy ra lỗi trong quá trình tải lên.",
        key: "upload",
        duration: 2,
      });
    } finally {
      setLoading(false); // Kết thúc loading
      setComponentDisabled(true);
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
