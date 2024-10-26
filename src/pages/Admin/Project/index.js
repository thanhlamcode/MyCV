import { useState } from "react";
import BoxTitle from "../../../components/Admin/BoxTitle";
import FormProject from "../../../components/Admin/Form/formProject";

function Project() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <BoxTitle
        componentDisabled={componentDisabled}
        title="Set up your project"
        setComponentDisabled={setComponentDisabled}
      />
      <FormProject componentDisabled={componentDisabled} />
    </>
  );
}

export default Project;
