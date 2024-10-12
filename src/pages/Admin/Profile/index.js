import { Button, Col, Form, Input, Row } from "antd";
import UploadAdmin from "../../../components/Admin/Upload";
import { DownloadOutlined, EditOutlined } from "@ant-design/icons";
import "./style.scss";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";

function Profile() {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);

  return (
    <>
      <div className="inner-box">
        <h1>Thông tin cá nhân</h1>
        <Button
          icon={<EditOutlined />}
          onClick={() => setComponentDisabled(!componentDisabled)}
        />
      </div>
      <Form
        layout="vertical"
        form={form}
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
            <Form.Item label="Họ và tên:">
              <Input placeholder="Đoàn Thanh Lâm" />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="Số điện thoại:">
              <Input placeholder="0123456789" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Địa chỉ facebook:">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Địa chỉ zalo:">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Địa chỉ linkedin:">
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Địa chỉ email:">
              <Input type="email" />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Mô tả:">
              <TextArea />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="Avatar:">
              <UploadAdmin />
            </Form.Item>
          </Col>
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Form.Item>
              <Button type="primary" icon={<DownloadOutlined />}>
                Save
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Profile;
