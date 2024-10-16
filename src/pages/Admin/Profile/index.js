import { Button, Col, Form, Input, Row } from "antd";
import UploadAdmin from "../../../components/Admin/Upload";
import { DownloadOutlined } from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import BoxTitle from "../../../components/Admin/BoxTitle";

function Profile() {
  const [form] = Form.useForm();
  const [componentDisabled, setComponentDisabled] = useState(true);

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
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Số điện thoại:">
                <Input />
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
            <Col
              span={24}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Form.Item>
                <Button type="primary" icon={<DownloadOutlined />}>
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
