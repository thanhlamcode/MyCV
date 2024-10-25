import React, { useState, useEffect } from "react";
import { PlusOutlined, DownloadOutlined } from "@ant-design/icons";
import { Upload, Image, Button, Col, Form, Input, message, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import BoxTitle from "../../../components/Admin/BoxTitle";
import { useLocation } from "react-router-dom";
import { editInformation, getInfomation } from "../../../service/profileAdmin";
import "./style.scss";

// Helper function to convert file to Base64
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

// UploadAdmin Component
const UploadAdmin = ({ onFileChange, avatar }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState(
    avatar ? [{ url: avatar, name: "Avatar", status: "done" }] : []
  );

  useEffect(() => {
    if (avatar) {
      setFileList([{ url: avatar, name: "Avatar", status: "done" }]);
    }
  }, [avatar]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    if (onFileChange) {
      onFileChange(newFileList); // Send fileList back to the parent component
    }
  };

  const beforeUpload = (file) => {
    return false; // Disable automatic upload
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
      }}
      type="button"
    >
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="upload">
      <Upload
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
        beforeUpload={beforeUpload}
      >
        {fileList.length >= 1 ? null : uploadButton}
      </Upload>
      {previewImage && (
        <Image
          wrapperStyle={{ display: "none" }}
          preview={{
            visible: previewOpen,
            onVisibleChange: (visible) => setPreviewOpen(visible),
            afterOpenChange: (visible) => !visible && setPreviewImage(""),
          }}
          src={previewImage}
        />
      )}
    </div>
  );
};

// Profile Component
function Profile() {
  const location = useLocation(); // Get state from navigate
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [fileList, setFileList] = useState([]); // Save file list
  const [avatar, setAvatar] = useState("");

  const notify = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  useEffect(() => {
    if (location.state?.message) {
      message.success(location.state.message); // Display success message
    }
  }, [location.state]);

  // Handle form submission
  const handleFinish = async (values) => {
    console.log("Submitted values:", values);

    const formValues = {
      ...values,
      avatar: fileList, // Add file list to form values
    };

    const response = await editInformation(formValues);
    console.log(response);
    setComponentDisabled(true);
    notify("success", "Cập nhật thành công");
  };

  // Fetch data from API and populate the form
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await getInfomation();
        console.log(response); // Check data

        // Populate form fields
        form.setFieldsValue({
          fullName: response.fullName,
          phoneNumber: response.phoneNumber,
          facebookAddress: response.facebookAddress,
          zaloAddress: response.zaloAddress,
          linkedinAddress: response.linkedinAddress,
          emailAddress: response.emailAddress,
          slug: response.slug || "", // Default value if empty
          expertise: response.expertise, // Convert array to string
          description: response.description,
        });

        // If avatar file exists, update fileList and avatar state
        if (response.avatar) {
          setFileList([
            { url: response.avatar, name: "Avatar", status: "done" },
          ]);
          setAvatar(response.avatar);
        }
      } catch (error) {
        console.error("Error fetching information:", error);
      }
    };

    fetchInformation();
  }, [form]);

  // Handle file change from UploadAdmin and update fileList
  const handleFileChange = (newFileList) => {
    setFileList(newFileList);
  };

  const getFile = (e) => {
    console.log("Upload event:", e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  return (
    <>
      {contextHolder}
      <div className="profile">
        <BoxTitle
          componentDisabled={componentDisabled}
          title="Set up your information"
          setComponentDisabled={setComponentDisabled}
        />
        <Form
          layout="vertical"
          form={form}
          onFinish={handleFinish}
          disabled={componentDisabled}
          initialValues={{
            layout: "vertical",
          }}
          style={{
            maxWidth: "100%",
          }}
        >
          <Row gutter={[30, 30]}>
            <Col span={12}>
              <Form.Item label="Họ và tên:" name="fullName">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số điện thoại:" name="phoneNumber">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ facebook:" name="facebookAddress">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ zalo:" name="zaloAddress">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ linkedin:" name="linkedinAddress">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ email:" name="emailAddress">
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Đường dẫn cho trang web của bạn:" name="slug">
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Chuyên môn của bạn (ngăn cách nhau bởi dấu `,`)"
                name="expertise"
              >
                <Input type="text" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Mô tả:" name="description">
                <TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Avatar:"
                getValueFromEvent={getFile}
                name="avatar"
              >
                <UploadAdmin onFileChange={handleFileChange} avatar={avatar} />
              </Form.Item>
            </Col>
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Item>
                <Button
                  type="primary"
                  icon={<DownloadOutlined />}
                  htmlType="submit"
                >
                  Save
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default Profile;
