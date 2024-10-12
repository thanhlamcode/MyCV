import { Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
function BoxTitle(props) {
  const { title, componentDisabled, setComponentDisabled } = props;

  return (
    <div className="inner-box">
      <h1>{title}</h1>
      <Button
        icon={<EditOutlined />}
        onClick={() => setComponentDisabled(!componentDisabled)}
      />
    </div>
  );
}

export default BoxTitle;
