import React from "react";
import TableFormModal from "./tableForm";
import {
  getCertificate,
  addCertificate,
  editCertificate,
  deleteCertificate,
} from "../../../service/resume.admin";

const Certificate = () => {
  const columnsConfig = [
    { title: "Certificate", dataIndex: "certificate", key: "certificate" },
    { title: "Description", dataIndex: "description", key: "description" },
  ];

  const title = "Certificate";

  const formFields = [
    {
      name: "certificate",
      label: "Certificate",
      rules: [{ required: true, message: "Please enter certificate" }],
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
      fetchData={getCertificate}
      addData={addCertificate}
      editData={editCertificate}
      deleteData={deleteCertificate}
      formFields={formFields}
    />
  );
};

export default Certificate;
