import React, { useEffect, useState } from "react";
import {
  Table,
  Button,
  Modal,
  Form,
  Input,
  InputNumber,
  Popconfirm,
  Space,
  message,
} from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {
  addNewEducation,
  deleteEducation,
  editEducation,
  getEducation,
} from "../../../service/resume.admin";
import { useDispatch, useSelector } from "react-redux";
import { loadPage } from "../../../actions/reloadAction";

const { Item } = Form;

const EducationResume = () => {
  const isLoading = useSelector((state) => state.reloadReducer);
  const dispatch = useDispatch();

  const [dataSource, setDataSource] = useState([]);
  // Các trạng thái để kiểm soát modal thêm/sửa
  const [isEditing, setIsEditing] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);

  // Fetch dữ liệu
  const fetchEducation = async () => {
    const response = await getEducation();
    if (response) {
      setDataSource(response);
    }
  };

  useEffect(() => {
    fetchEducation();
  }, [isLoading]);

  // Hàm thêm dữ liệu mới
  const handleAdd = () => {
    setEditingRecord(null);
    setIsEditing(true);
  };

  // Hàm lưu dữ liệu sau khi thêm/sửa
  const handleSave = async (values) => {
    if (editingRecord) {
      // Chế độ chỉnh sửa
      await editEducation(values, editingRecord._id);
      message.success("Chỉnh sửa thành công!");
    } else {
      // Thêm mới
      await addNewEducation(values);
      message.success("Thêm mới thành công!");
    }
    dispatch(loadPage());
    setIsEditing(false);
  };

  // Hàm xóa dữ liệu
  const handleDelete = async (id) => {
    const response = await deleteEducation(id);
    if (response) {
      message.success("Xóa bản ghi thành công!");
      dispatch(loadPage());
    } else {
      message.error("Xóa bản ghi thất bại!");
    }
  };

  // Hàm chỉnh sửa
  const handleEdit = async (record) => {
    setEditingRecord(record);
    setIsEditing(true);
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "University",
      dataIndex: "university",
      key: "university",
    },
    {
      title: "GPA",
      dataIndex: "GPA",
      key: "GPA",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <>
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
        </>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" style={{ marginBottom: 16 }} onClick={handleAdd}>
        Add New Education
      </Button>

      <Table dataSource={dataSource} columns={columns} pagination={false} />

      {/* Modal thêm/sửa dữ liệu */}
      <Modal
        title={editingRecord ? "Edit Record" : "Add New Record"}
        visible={isEditing}
        onCancel={() => setIsEditing(false)}
        footer={null}
      >
        <Form
          initialValues={editingRecord || { gpa: 4.0 }}
          onFinish={handleSave}
          layout="vertical"
        >
          <Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title!" }]}
          >
            <Input />
          </Item>
          <Item
            name="university"
            label="University"
            rules={[
              { required: true, message: "Please enter the university!" },
            ]}
          >
            <Input min={0} max={4} step={0.1} />
          </Item>
          <Item
            name="GPA"
            label="GPA"
            rules={[{ required: true, message: "Please enter the GPA!" }]}
          >
            <InputNumber rows={4} />
          </Item>
          <Item
            name="description"
            label="Description"
            rules={[
              { required: true, message: "Please enter the description!" },
            ]}
          >
            <Input.TextArea />
          </Item>
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

export default EducationResume;
