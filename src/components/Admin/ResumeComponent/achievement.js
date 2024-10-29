import React from "react";
import TableFormModal from "./tableForm";
import {
  getAchievement,
  addAchievement,
  editAchievement,
  deleteAchievement,
} from "../../../service/resume.admin";

const Achievement = () => {
  const title = "Achievement";

  const columnsConfig = [
    { title: "University", dataIndex: "university", key: "university" },
    { title: "Achievement", dataIndex: "achievement", key: "achievement" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const formFields = [
    {
      name: "university",
      label: "University",
      rules: [{ required: true, message: "Please enter university" }],
    },
    {
      name: "achievement",
      label: "Achievement",
      rules: [{ required: true, message: "Please enter achievement" }],
    },
    {
      name: "description",
      label: "Description",
      rules: [{ required: true, message: "Please enter description" }],
    },
  ];

  return (
    <TableFormModal
      title={title}
      columnsConfig={columnsConfig}
      fetchData={getAchievement}
      addData={addAchievement}
      editData={editAchievement}
      deleteData={deleteAchievement}
      formFields={formFields}
    />
  );
};

export default Achievement;
