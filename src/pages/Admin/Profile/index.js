import { Col, Form, Input, Row } from "antd";

function Profile() {
  const [form] = Form.useForm();
  return (
    <>
      <h1>Thông tin cá nhân</h1>
      <Form
        layout="vertical"
        form={form}
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
            <Form.Item label="Địa chỉ linkdn:">
              <Input />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Profile;
