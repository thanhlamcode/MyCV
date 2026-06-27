/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaBars } from "react-icons/fa";
import "./style.scss";
import Sider from "../Sider";
import { useState, useEffect } from "react";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleToggle = () => setIsVisible(!isVisible);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isVisible]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <section className={`header${scrolled ? " header--scrolled" : ""}`}>
        <div className="header__left">
          <a href="#home" className="header__logo">
            <span className="logo-bracket">&lt;</span>
            DTL
            <span className="logo-bracket">/&gt;</span>
          </a>
        </div>
        <div className="header__right">
          <ul className="sider">
            <li><a href="#home">Home</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#features">Skills</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contacts">Contact</a></li>
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
