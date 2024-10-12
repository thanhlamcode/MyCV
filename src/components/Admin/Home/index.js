import { Col, Form, Input, Row } from "antd";

function Home() {
  const [form] = Form.useForm();
  return (
    <>
      <h1>Thông tin giới thiệu</h1>
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
        <Row>
          <Col span={12}>
            <Form.Item label="Nhập họ và tên của bạn:">
              <Input placeholder="input placeholder" />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
}

export default Home;
