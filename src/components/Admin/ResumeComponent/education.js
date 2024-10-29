import React from "react";
import TableFormModal from "./tableForm";
import {
  getEducation,
  addNewEducation,
  editEducation,
  deleteEducation,
} from "../../../service/resume.admin";
import { Input, InputNumber } from "antd";

const Education = () => {
  const columnsConfig = [
    { title: "Title", dataIndex: "title", key: "title" },
    { title: "University", dataIndex: "university", key: "university" },
    { title: "GPA", dataIndex: "GPA", key: "GPA" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const title = "Education";

  const formFields = [
    {
      name: "title",
      label: "Title",
      rules: [{ required: true, message: "Please enter title" }],
    },
    {
      name: "university",
      label: "University",
      rules: [{ required: true, message: "Please enter university" }],
    },
    {
      name: "GPA",
      label: "GPA",
      rules: [{ required: true, message: "Please enter GPA" }],
      component: <InputNumber min={0} max={4} step={0.1} />, // Sử dụng InputNumber cho GPA
    },
    {
      name: "description",
      label: "Description",
      rules: [{ required: true, message: "Please enter description" }],
      component: <Input.TextArea />, // Sử dụng TextArea cho phần mô tả
    },
  ];

  return (
    <TableFormModal
      title={title}
      columnsConfig={columnsConfig}
      fetchData={getEducation}
      addData={addNewEducation}
      editData={editEducation}
      deleteData={deleteEducation}
      formFields={formFields}
    />
  );
};

export default Education;
