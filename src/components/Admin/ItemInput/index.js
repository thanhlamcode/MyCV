import React from "react";
import { Button, Card, Col, Form, Input, Row } from "antd";
import "./style.scss";
import Features from "../../Client/Features";

const ItemInput = () => {
  const [form] = Form.useForm();
  const handleFinish = (e) => {
    console.log(e);
  };

  return (
    <div className="input-item">
      <Form
        onFinish={handleFinish}
        labelCol={{
          span: 2,
        }}
        wrapperCol={{
          span: 22,
        }}
        form={form}
        name="dynamic_form_complex"
        style={{
          maxWidth: "100%",
        }}
        autoComplete="off"
        initialValues={{
          items: [{}],
        }}
      >
        <Row gutter={[30, 30]}>
          <Col span={24}>
            {/* Tạo danh sách cố định với 6 trường */}
            {[...Array(6)].map((_, index) => (
              <Card
                style={{ width: "100%" }}
                size="small"
                title={`Skill ${index + 1}`}
                key={index}
              >
                {/* Trường "Name" cho mỗi mục */}
                <Form.Item label="Tên" name={["items", index, "name"]}>
                  <Input />
                </Form.Item>

                {/* Trường "Mô tả" cho mỗi mục */}
                <Form.Item label="Mô tả" style={{ width: "100%" }}>
                  <Form.Item
                    name={["items", index, "description"]}
                    style={{ width: "100%" }}
                  >
                    <Input
                      placeholder="Nhập mô tả"
                      style={{ width: "100%" }} // Đảm bảo Input chiếm toàn bộ chiều rộng
                    />
                  </Form.Item>
                </Form.Item>
              </Card>
            ))}
          </Col>

          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Form.Item>
              <Button htmlType="submit">Submit</Button>
            </Form.Item>
          </Col>

          <Col span={24}>
            <Features />
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default ItemInput;
