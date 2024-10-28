import { Button, Card, Col, Form, Input, Row, Upload } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getProject } from "../../../service/project.admin";

function Project(props) {
  const { componentDisabled } = props;
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
            const response = await fetch(
              "http://localhost:4000/admin/project/upload",
              {
                method: "POST",
                body: formData,
              }
            );

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

      // Construct the projects array with all required information, including uploaded image URLs
      const projects = values.items.map((item, index) => ({
        projectName: item.name,
        description: item.description,
        linkProject: item.link,
        image: uploadedFiles[index], // Use the uploaded image URL
      }));

      console.log("Constructed projects array:", projects);

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
      <Form
        disabled={componentDisabled}
        onFinish={handleFinish}
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 22,
        }}
        form={form}
        name="dynamic_form_complex"
        style={{
          maxWidth: "100%",
        }}
        autoComplete="off"
        initialValues={{
          items: [{}],
        }}
      >
        <Row gutter={[30, 30]}>
          <Col span={24}>
            {[...Array(6)].map((_, index) => (
              <Card
                style={{ width: "100%" }}
                size="small"
                title={`Skill ${index + 1}`}
                key={index}
              >
                {/* Project Name Field */}
                <Form.Item label="Tên" name={["items", index, "name"]}>
                  <Input />
                </Form.Item>

                {/* Project Description Field */}
                <Form.Item
                  label="Mô tả"
                  name={["items", index, "description"]}
                  style={{ width: "100%" }}
                >
                  <Input placeholder="Nhập mô tả" style={{ width: "100%" }} />
                </Form.Item>

                {/* Project Link Field */}
                <Form.Item
                  label="Link:"
                  name={["items", index, "link"]}
                  style={{ width: "100%" }}
                >
                  <Input style={{ width: "100%" }} />
                </Form.Item>

                {/* File Upload Field */}
                <Form.Item label="Hình ảnh" style={{ width: "100%" }}>
                  {/* Display uploaded image */}
                  {fileList[index] && fileList[index][0]?.url && (
                    <img
                      src={fileList[index][0].url}
                      alt={`Project Image ${index + 1}`}
                      style={{
                        width: "100%",
                        maxHeight: "200px",
                        marginBottom: "10px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        objectFit: "cover",
                        border: "1px solid #ddd",
                      }}
                    />
                  )}

                  <Upload
                    name="image"
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false}
                    onChange={(info) => handleFileChange(index, info)}
                  >
                    <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                  </Upload>
                </Form.Item>
              </Card>
            ))}
          </Col>

          {/* Save Button to Submit the Form */}
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              htmlType="submit"
            >
              Save
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Project;
