// Front-end Component (FE)
import { Button, Card, Col, Form, Input, Row, Upload } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { getProject } from "../../../service/project.admin";

function Project(props) {
  const { componentDisabled } = props;
  const [form] = Form.useForm();
  const [fileList, setFileList] = useState([[], [], [], [], [], []]);

  const handleFinish = async (values) => {
    try {
      console.log("Form values:", values);

      // Upload all files to Cloudinary or another service before submitting the form
      const uploadedFiles = await Promise.all(
        fileList.map(async (files, index) => {
          if (files.length > 0) {
            const formData = new FormData();
            formData.append("file", files[0].originFileObj); // Append the file to the formData object
            formData.append("upload_preset", "your_upload_preset"); // Cloudinary-specific field for upload preset

            // Send the file to Cloudinary using fetch
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
            return data.secure_url; // Return the URL of the uploaded file
          }
          return null; // Return null if no file was provided for this index
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
        console.log("Response data:", data); // Log the response data if the request was successful
      } else {
        const errorText = await response.text();
        console.error("Upload failed:", response.statusText, errorText); // Log any error messages from the server
      }
    } catch (error) {
      console.error("Error in handleFinish:", error); // Log any errors that occur during the process
    }
  };

  const handleFileChange = (index, info) => {
    console.log(`Handling file change for index ${index}:`, info); // Log file change event details
    const updatedFileList = [...fileList];
    updatedFileList[index] = info.fileList; // Update the file list state for the specified index
    setFileList(updatedFileList); // Update the state with the new file list
    console.log("Updated fileList:", updatedFileList); // Log the updated file list
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getProject(); // Fetch data using the getProject function
        console.log("Fetched data:", data);

        // Populate form fields with the fetched data
        form.setFieldsValue({
          items: data.projects.map((project) => ({
            name: project.projectName,
            description: project.description,
            link: project.linkProject,
          })),
        });

        // If images are already uploaded, set them in the fileList state
        const initialFileList = data.projects.map((project, index) => {
          return project.image
            ? [
                {
                  uid: index, // Unique ID for the file
                  name: `Project Image ${index + 1}`,
                  status: "done",
                  url: project.image, // The URL of the uploaded image
                },
              ]
            : [];
        });
        setFileList(initialFileList); // Update the fileList with existing images
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call fetchData when the component mounts
  }, []);

  return (
    <div className="input-item">
      <Form
        disabled={componentDisabled}
        onFinish={handleFinish} // Handle form submission
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
          items: [{}], // Initial form values with an empty item
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
                  <Upload
                    name="image"
                    listType="picture"
                    maxCount={1}
                    beforeUpload={() => false} // Prevent automatic upload so that upload happens on form submit
                    onChange={(info) => handleFileChange(index, info)} // Handle file selection
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
