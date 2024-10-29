/* eslint-disable jsx-a11y/img-redundant-alt */
import { Button, Card, Col, Form, Input, Row, Upload } from "antd";
import { DownloadOutlined, UploadOutlined } from "@ant-design/icons";

const FormProject = ({
  componentDisabled,
  handleFinish,
  form,
  fileList,
  handleFileChange,
}) => {
  return (
    <Form
      disabled={componentDisabled}
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
          {[...Array(6)].map((_, index) => (
            <Card
              style={{ width: "100%" }}
              size="small"
              title={`Skill ${index + 1}`}
              key={index}
            >
              {/* Project Name Field */}
              <Form.Item label="Tên" name={["items", index, "name"]}>
                <Input />
              </Form.Item>

              {/* Project Description Field */}
              <Form.Item
                label="Mô tả"
                name={["items", index, "description"]}
                style={{ width: "100%" }}
              >
                <Input placeholder="Nhập mô tả" style={{ width: "100%" }} />
              </Form.Item>

              {/* Project Link Field */}
              <Form.Item
                label="Link:"
                name={["items", index, "link"]}
                style={{ width: "100%" }}
              >
                <Input style={{ width: "100%" }} />
              </Form.Item>

              {/* File Upload Field */}
              <Form.Item label="Hình ảnh" style={{ width: "100%" }}>
                {/* Display uploaded image */}
                {fileList[index] && fileList[index][0]?.url && (
                  <img
                    src={fileList[index][0].url}
                    alt={`Project Image ${index + 1}`}
                    style={{
                      width: "100%",
                      height: "500px",
                      marginBottom: "10px",
                      borderRadius: "8px",
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                      objectFit: "cover",
                      border: "1px solid #ddd",
                    }}
                  />
                )}

                <Upload
                  name="image"
                  listType="picture"
                  maxCount={1}
                  beforeUpload={() => false}
                  onChange={(info) => handleFileChange(index, info)}
                >
                  <Button icon={<UploadOutlined />}>Chọn ảnh</Button>
                </Upload>
              </Form.Item>
            </Card>
          ))}
        </Col>

        {/* Save Button to Submit the Form */}
        <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
          <Button type="primary" icon={<DownloadOutlined />} htmlType="submit">
            Save
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default FormProject;
