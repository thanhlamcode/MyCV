import { Button, Col, Form, Input, Row } from "antd";
import UploadAdmin from "../../../components/Admin/Upload";
import { DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import BoxTitle from "../../../components/Admin/BoxTitle";

function Profile() {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [fileList, setFileList] = useState([]); // Lưu danh sách file

  // Hàm xử lý khi form được submit
  const handleFinish = async (values) => {
    console.log("Form values:", values);

    // Tạo FormData để gửi dữ liệu form và ảnh
    const formData = new FormData();

    // Thêm dữ liệu form vào FormData
    formData.append("name", values.name);
    formData.append("phone", values.phone);
    formData.append("facebook", values.facebook);
    formData.append("zalo", values.zalo);
    formData.append("linkedin", values.linkedin);
    formData.append("email", values.email);
    formData.append("description", values.description);

    // Thêm ảnh vào FormData nếu có
    if (fileList.length > 0 && fileList[0].originFileObj) {
      formData.append("avatar", fileList[0].originFileObj);
    }

    // Gửi dữ liệu lên server
    try {
      const response = await fetch(
        "http://localhost:4000/admin/information/edit/67131a1a7b04925eee28c1b6",
        {
          method: "PATCH",
          body: formData, // Gửi FormData chứa dữ liệu form và file
        }
      );

      const result = await response.json();
      console.log("Response from server:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  // Nhận file từ UploadAdmin và cập nhật danh sách file
  const handleFileChange = (newFileList) => {
    setFileList(newFileList);
  };

  return (
    <>
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
              <Form.Item label="Họ và tên:" name="name">
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số điện thoại:" name="phone">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ facebook:" name="facebook">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ zalo:" name="zalo">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ linkedin:" name="linkedin">
                <Input />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Địa chỉ email:" name="email">
                <Input type="email" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Mô tả:" name="description">
                <TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Avatar:">
                <UploadAdmin onFileChange={handleFileChange} />{" "}
                {/* Truyền handleFileChange */}
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
