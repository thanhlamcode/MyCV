import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import { Button, Card, Col, Form, Input, Row, Space } from "antd";
const ItemInput = () => {
  const [form] = Form.useForm();
  const handleFinish = (e) => {
    console.log(e);
  };

  return (
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
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{
                  display: "flex",
                  rowGap: 16,
                  flexDirection: "column",
                  width: "100%",
                }}
              >
                {fields.map((field) => (
                  <Card
                    style={{ width: "100%" }}
                    size="small"
                    title={`Item ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <CloseOutlined
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item label="Name" name={[field.name, "name"]}>
                      <Input />
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="List">
                      <Form.List
                        name={[field.name, "list"]}
                        style={{ width: "100%" }}
                      >
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                <Form.Item
                                  noStyle
                                  name={[subField.name, "first"]}
                                  style={{ width: "100%" }}
                                >
                                  <Input
                                    placeholder="first"
                                    style={{ width: "100%" }}
                                  />
                                </Form.Item>
                                <CloseOutlined
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                              </Space>
                            ))}
                            <Button
                              type="dashed"
                              onClick={() => subOpt.add()}
                              block
                            >
                              + Add Sub Item
                            </Button>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            )}
          </Form.List>
        </Col>
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Form.Item>
            <Button htmlType="submit">Submit</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};
export default ItemInput;
