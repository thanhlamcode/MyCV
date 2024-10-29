/* eslint-disable jsx-a11y/anchor-is-valid */
import { Button, Modal, Radio, Space, Table } from "antd";
import { useEffect, useState } from "react";
import BoxTitle from "../../../components/Admin/BoxTitle";
import { EyeOutlined } from "@ant-design/icons";
import { getContact } from "../../../service/contact";

const Contacts = () => {
  const [componentDisabled, setComponentDisabled] = useState(true);
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const fetchData = async () => {
    try {
      const response = await getContact();
      if (Array.isArray(response.contacts)) {
        setData(response.contacts);
      } else {
        console.error("Response is not an array:", response);
      }
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (record) => {
    setSelectedRecord(record); // Lưu bản ghi đã chọn
    setIsModalVisible(true); // Hiển thị modal
  };

  const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedRecord(null); // Xóa bản ghi đã chọn khi đóng modal
  };

  const columns = [
    {
      title: "From",
      dataIndex: "senderName",
      key: "senderName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
    },
    {
      title: "Message",
      key: "message",
      dataIndex: "message",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space direction="vertical">
          <Button
            type="link"
            onClick={() => handleEdit(record)}
            icon={<EyeOutlined />}
          ></Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <BoxTitle
        componentDisabled={componentDisabled}
        title="Contacts"
        setComponentDisabled={setComponentDisabled}
      />
      <Radio.Group
        style={{
          marginBottom: 10,
        }}
      />
      <Table
        columns={columns}
        pagination={{
          position: ["bottomCenter"],
        }}
        dataSource={data}
        rowKey={(record) => record.key || record.id || record.email}
      />

      {/* Modal hiển thị chi tiết */}
      <Modal
        title="Contact Details"
        visible={isModalVisible}
        onCancel={handleCloseModal}
        footer={[
          <Button key="close" onClick={handleCloseModal}>
            Close
          </Button>,
        ]}
      >
        {selectedRecord && (
          <div>
            <p>
              <strong>From:</strong> {selectedRecord.senderName}
            </p>
            <p>
              <strong>Email:</strong> {selectedRecord.email}
            </p>
            <p>
              <strong>Subject:</strong> {selectedRecord.subject}
            </p>
            <p>
              <strong>Message:</strong> {selectedRecord.message}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Contacts;
