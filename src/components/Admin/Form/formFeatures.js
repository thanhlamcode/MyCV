import { Button, Card, Col, Form, Input, Row } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
import "./style.scss";
import { useEffect, useState } from "react";
import { getFeatures } from "../../../service/features.admin";

const FormFeatures = (props) => {
  const { componentDisabled, setComponentDisabled } = props;

  // eslint-disable-next-line no-unused-vars
  const [feature, setFeature] = useState([]);
  const [form] = Form.useForm();

  // Hàm xử lý khi bấm nút "Lưu"
  const handleFinish = (e) => {
    setComponentDisabled(true);
    console.log(e);
  };

  useEffect(() => {
    const fetchFeatures = async () => {
      const response = await getFeatures();
      setFeature(response);

      // Định dạng lại dữ liệu để khớp với các trường của biểu mẫu
      const formattedFeatures = response
        .map((item, index) => ({
          skillName: item.skillName || "", // Đảm bảo có trường skillName
          description: item.description || "", // Đảm bảo có trường description
        }))
        .slice(0, 6); // Chỉ lấy 6 mục đầu tiên

      // Thiết lập dữ liệu vào các trường của biểu mẫu
      form.setFieldsValue({
        items: formattedFeatures,
      });
    };

    fetchFeatures();
  }, [form]);

  return (
    <div className="input-item">
      <Form
        onFinish={handleFinish}
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 22 }}
        disabled={componentDisabled}
        form={form}
        name="dynamic_form_complex"
        style={{ maxWidth: "100%" }}
        autoComplete="off"
        initialValues={{ items: [{}] }}
      >
        <Row gutter={[30, 30]}>
          <Col span={24}>
            {/* Tạo danh sách cố định với 6 trường */}
            {[...Array(6)].map((_, index) => (
              <Card
                style={{ width: "100%" }}
                size="small"
                title={`Kỹ năng ${index + 1}`} // Tiêu đề của từng kỹ năng
                key={index}
              >
                {/* Trường "Tên" cho mỗi mục */}
                <Form.Item label="Tên" name={["items", index, "skillName"]}>
                  <Input />
                </Form.Item>

                {/* Trường "Mô tả" cho mỗi mục */}
                <Form.Item label="Mô tả" style={{ width: "100%" }}>
                  <Form.Item
                    name={["items", index, "description"]}
                    style={{ width: "100%" }}
                  >
                    <Input placeholder="Nhập mô tả" style={{ width: "100%" }} />
                  </Form.Item>
                </Form.Item>
              </Card>
            ))}
          </Col>

          {/* Nút "Lưu" */}
          <Col span={24} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              htmlType="submit"
            >
              Lưu
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default FormFeatures;
