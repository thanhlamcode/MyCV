import { FaNodeJs, FaReact } from "react-icons/fa";
import "./style.scss";
import { IoLogoJavascript } from "react-icons/io5";

function Sider(props) {
  const { setIsVisible } = props;

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="sider-bar">
      <div className="bar">
        <div className="close" onClick={handleClose}>
          x
        </div>
        <div className="side-header">
          <div className="wrap-image">
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/themes/inbio/assets/images/logo/logos-circle.png"
              alt="avatar"
            />
            <p>
              Inbio is a all in one personal portfolio WordPress theme. You can
              customize everything.
            </p>
          </div>
        </div>
        <hr />
        <div className="side-body">
          <ul>
            <li>
              <a href="#home" onClick={handleClose}>
                {" "}
                HOME
              </a>
            </li>
            <li>
              <a href="#features" onClick={handleClose}>
                {" "}
                FEATURES
              </a>
            </li>
            <li>
              <a href="#project" onClick={handleClose}>
                {" "}
                PROJECT
              </a>
            </li>
            <li>
              <a href="#resume" onClick={handleClose}>
                {" "}
                RESUME
              </a>
            </li>
            <li>
              <a href="#contacts" onClick={handleClose}>
                {" "}
                CONTACTS
              </a>
            </li>
          </ul>
        </div>

        <div className="side-footer">
          <hr />
          <h3>FIND WITH ME</h3>
          <div className="icon">
            <IoLogoJavascript />
            <FaNodeJs />
            <FaReact />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sider;
