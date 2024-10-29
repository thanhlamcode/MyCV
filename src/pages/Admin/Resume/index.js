import { useState } from "react";
import Achievement from "../../../components/Admin/ResumeComponent/achievement";
import Certificate from "../../../components/Admin/ResumeComponent/certificate";
import Education from "../../../components/Admin/ResumeComponent/education";
import BoxTitle from "../../../components/Admin/BoxTitle";

function ResumeAdmin() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <BoxTitle
        componentDisabled={componentDisabled}
        title="Set up your resume"
        setComponentDisabled={setComponentDisabled}
      />
      <Education />
      <Achievement />
      <Certificate />
    </>
  );
}
export default ResumeAdmin;
