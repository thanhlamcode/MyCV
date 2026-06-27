/* eslint-disable jsx-a11y/anchor-is-valid */
import { FaBars, FaMoon, FaSun, FaDesktop } from "react-icons/fa";
import "./style.scss";
import Sider from "../Sider";
import { useState, useEffect } from "react";
import { useTheme } from "../../../context/ThemeContext";

function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

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
          <div className="theme-toggle">
            <button
              className={theme === "dark" ? "active" : ""}
              onClick={() => setTheme("dark")}
              title="Dark"
            >
              <FaMoon />
            </button>
            <button
              className={theme === "light" ? "active" : ""}
              onClick={() => setTheme("light")}
              title="Light"
            >
              <FaSun />
            </button>
            <button
              className={theme === "system" ? "active" : ""}
              onClick={() => setTheme("system")}
              title="System"
            >
              <FaDesktop />
            </button>
          </div>
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
