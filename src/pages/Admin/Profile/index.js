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
const UploadAdmin = ({ onFileChange }) => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [fileList, setFileList] = useState([]);

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
      onFileChange(newFileList); // Truyền fileList ngược về component cha
    }
  };

  const beforeUpload = (file) => {
    return false; // Tắt upload tự động
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
  const location = useLocation(); // Lấy state từ navigate
  const [messageApi, contextHolder] = message.useMessage();
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [fileList, setFileList] = useState([]); // Lưu danh sách file

  const notify = (type, content) => {
    messageApi.open({
      type: type,
      content: content,
    });
  };

  useEffect(() => {
    if (location.state?.message) {
      message.success(location.state.message); // Hiển thị thông báo thành công
    }
  }, [location.state]);

  // Hàm xử lý khi form được submit
  const handleFinish = async (values) => {
    console.log("Submitted values:", values);

    const formValues = {
      ...values,
      avatar: fileList, // Add the file list to form values
    };

    const response = await editInformation(formValues);
    console.log(response);
    setComponentDisabled(true);
    notify("success", "Cập nhật thành công");
  };

  // Fetch data từ API và điền dữ liệu vào form
  useEffect(() => {
    const fetchInformation = async () => {
      try {
        const response = await getInfomation();
        console.log(response); // Kiểm tra dữ liệu

        // Điền dữ liệu vào form
        form.setFieldsValue({
          fullName: response.fullName,
          phoneNumber: response.phoneNumber,
          facebookAddress: response.facebookAddress,
          zaloAddress: response.zaloAddress,
          linkedinAddress: response.linkedinAddress,
          emailAddress: response.emailAddress,
          slug: response.slug || "", // Nếu không có thì đặt giá trị mặc định
          expertise: response.expertise, // Chuyển array thành chuỗi
          description: response.description,
          avatar: response.avatar,
        });

        // Nếu có file avatar, cập nhật vào fileList
        if (response.avatar) {
          setFileList([{ url: response.avatar }]);
        }
      } catch (error) {
        console.error("Error fetching information:", error);
      }
    };

    fetchInformation();
  }, [form]); // Thêm form vào dependency array

  // Nhận file từ UploadAdmin và cập nhật danh sách file
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
                <UploadAdmin onFileChange={handleFileChange} />
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
