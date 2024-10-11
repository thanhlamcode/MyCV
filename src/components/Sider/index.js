import "./style.scss";
import { IoCloseCircleSharp } from "react-icons/io5";

function Sider(props) {
  const { setIsVisible } = props;

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="sider-bar">
      <div className="bar">
        <IoCloseCircleSharp className="close" onClick={handleClose} />
      </div>
    </div>
  );
}

export default Sider;
