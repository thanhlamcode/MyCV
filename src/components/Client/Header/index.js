/* eslint-disable jsx-a11y/anchor-is-valid */
import logotrans from "../../../image/logo2.png";
import { FaBars } from "react-icons/fa";
import "./style.scss";
import Sider from "../Sider";
import { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isVisible) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }

    // Cleanup function to ensure scrolling is enabled when the component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  return (
    <>
      <section className="header">
        <div className="header__left">
          <a href="#home">
            {/* <img src={logotrans} alt="logo" /> */}
          </a>
        </div>
        <div className="header__right">
          <ul className="sider">
            <li>
              <a href="#home">HOME</a>
            </li>
            <li>
              <a href="#features">FEATURES</a>
            </li>
            <li>
              <a href="#project">PROJECT</a>
            </li>
            <li>
              <a href="#resume">RESUME</a>
            </li>
            <li>
              <a href="#contacts">CONTACTS</a>
            </li>
          </ul>
          <ul className="bar" onClick={handleToggle}>
            <FaBars />
          </ul>
        </div>
      </section>
      {isVisible && <Sider setIsVisible={setIsVisible} />}
    </>
  );
}

export default Header;
