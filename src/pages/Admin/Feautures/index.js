import BoxTitle from "../../../components/Admin/BoxTitle";
import { useState } from "react";
import "./style.scss";
import FormFeatures from "../../../components/Admin/Form/formFeatures";

function Features() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <div className="features-admin">
        <BoxTitle
          componentDisabled={componentDisabled}
          title="What I Do"
          setComponentDisabled={setComponentDisabled}
        />
        <FormFeatures
          componentDisabled={componentDisabled}
          setComponentDisabled={setComponentDisabled}
        />
      </div>
    </>
  );
}

export default Features;
