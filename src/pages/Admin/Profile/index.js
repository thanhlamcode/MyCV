import React, { useState, useEffect } from "react";
import { DownloadOutlined } from "@ant-design/icons";
import { Button, Col, Form, Input, message, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import BoxTitle from "../../../components/Admin/BoxTitle";
import { useLocation } from "react-router-dom";
import { editInformation, getInfomation } from "../../../service/profileAdmin";
import UploadAdmin from "../../../components/Admin/Upload";
import "./style.scss";

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

    // Initialize formValues without avatar
    const formValues = { ...values };

    // Only add avatar to formValues if fileList has an image
    if (
      fileList &&
      fileList.length > 0 &&
      (fileList[0].url || fileList[0].originFileObj)
    ) {
      formValues.avatar = fileList;
    }

    try {
      const response = await editInformation(formValues);
      console.log(response);
      setComponentDisabled(true);
      notify("success", "Cập nhật thành công");
    } catch (error) {
      console.error("Error updating information:", error);
      notify("error", "Có lỗi xảy ra trong quá trình cập nhật");
    }
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
