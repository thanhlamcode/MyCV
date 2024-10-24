import { Button, Col, Form, Input, message, Row } from "antd";
import UploadAdmin from "../../../components/Admin/Upload";
import { DownloadOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import BoxTitle from "../../../components/Admin/BoxTitle";
import { useLocation } from "react-router-dom";
import { editInformation, getInfomation } from "../../../service/profileAdmin";

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
  const handleFinish = async (e) => {
    console.log(e);

    const response = await editInformation(e);
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
          expertise: response.expertise?.join(", ") || "", // Chuyển array thành chuỗi
          description: response.description,
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
