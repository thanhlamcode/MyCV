import BoxTitle from "../../../components/Admin/BoxTitle";
import { useState } from "react";
import ItemInput from "../../../components/Admin/ItemInput";
import "./style.scss";

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
        <ItemInput />
      </div>
    </>
  );
}

export default Features;
