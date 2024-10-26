import { Button, Col, Form, Input, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import UploadAdmin from "../Upload";

const FormProfile = ({
  form,
  handleFinish,
  componentDisabled,
  getFile,
  handleFileChange,
  avatar,
}) => {
  return (
    <>
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
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
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
    </>
  );
};

export default FormProfile;
