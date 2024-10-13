import BoxTitle from "../../../components/Admin/BoxTitle";
import { useState } from "react";
import ItemInput from "../../../components/Admin/ItemInput";

function Features() {
  const [componentDisabled, setComponentDisabled] = useState(true);
  return (
    <>
      <BoxTitle
        componentDisabled={componentDisabled}
        title="What I Do"
        setComponentDisabled={setComponentDisabled}
      />

      <ItemInput />
    </>
  );
}

export default Features;
