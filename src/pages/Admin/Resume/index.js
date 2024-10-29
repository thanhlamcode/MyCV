import { useState } from "react";
import Achievement from "../../../components/Admin/Achievement";
import BoxTitle from "../../../components/Admin/BoxTitle";
import CertificateResume from "../../../components/Admin/Certificate";
import EducationResume from "../../../components/Admin/ResumeComponent/education";

function ResumeAdmin() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <BoxTitle
        componentDisabled={componentDisabled}
        title="Set up your resume"
        setComponentDisabled={setComponentDisabled}
      />
      <EducationResume />
      <Achievement />
      <CertificateResume />
    </>
  );
}
export default ResumeAdmin;
