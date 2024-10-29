import React, { useEffect, useRef, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  Popconfirm,
  Space,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const { Item } = Form;

const TableFormModal = ({
  columnsConfig,
  fetchData,
  addData,
  editData,
  deleteData,
  formFields,
  title,
}) => {
  const formRef = useRef(null);
  const [dataSource, setDataSource] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // Fetch dữ liệu từ API
  const loadData = async () => {
    const response = await fetchData();
    if (response) {
      setDataSource(response);
    }
  };

  useEffect(() => {
    loadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hàm mở modal thêm dữ liệu mới
  const handleAdd = () => {
    setEditingRecord(null);
    setIsEditing(true);
    if (formRef.current) {
      formRef.current.resetFields();
    }
  };

  // Hàm lưu dữ liệu sau khi thêm/sửa
  const handleSave = async (values) => {
    if (editingRecord) {
      await editData(values, editingRecord._id);
      message.success("Chỉnh sửa thành công!");
    } else {
      await addData(values);
      message.success("Thêm mới thành công!");
    }
    if (formRef.current) {
      formRef.current.resetFields();
    }
    loadData();
    setIsEditing(false);
  };

  // Hàm xóa dữ liệu
  const handleDelete = async (id) => {
    const response = await deleteData(id);
    if (response) {
      message.success("Xóa bản ghi thành công!");
      loadData();
    } else {
      message.error("Xóa bản ghi thất bại!");
    }
  };

  // Hàm mở modal chỉnh sửa
  const handleEdit = (record) => {
    setEditingRecord(record);
    setIsEditing(true);
    if (formRef.current) {
      formRef.current.setFieldsValue(record);
    }
  };

  const columns = [
    ...columnsConfig,
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <Space direction="vertical">
          <Button
            type="link"
            onClick={() => handleEdit(record)}
            icon={<EditOutlined />}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this record?"
            onConfirm={() => handleDelete(record._id)}
          >
            <Button type="link" danger icon={<DeleteOutlined />}>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={handleAdd}>
        Add New {title}
      </Button>

      <Table dataSource={dataSource} columns={columns} pagination={false} />

      <Modal
        title={editingRecord ? "Edit Record" : "Add New Record"}
        visible={isEditing}
        onCancel={() => setIsEditing(false)}
        footer={null}
      >
        <Form ref={formRef} onFinish={handleSave} layout="vertical">
          {formFields.map((field) => (
            <Item
              key={field.name}
              name={field.name}
              label={field.label}
              rules={field.rules}
            >
              {field.component || <Input />}
            </Item>
          ))}
          <Item>
            <Button type="primary" htmlType="submit">
              {editingRecord ? "Save Changes" : "Add Record"}
            </Button>
          </Item>
        </Form>
      </Modal>
    </div>
  );
};

export default TableFormModal;
