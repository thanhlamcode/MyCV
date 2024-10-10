/* eslint-disable jsx-a11y/anchor-is-valid */
import logotrans from "../../image/logo2.png";
import "./style.scss";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <a href="#home">
            <img src={logotrans} alt="logo"></img>
          </a>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <a href="#home" alt="">
                HOME
              </a>
            </li>
            <li>
              <a href="#features" alt="">
                FEATURES
              </a>
            </li>
            <li>
              <a href="#project" alt="">
                PROJECT
              </a>
            </li>
            <li>
              <a href="#resume" alt="">
                RESUME
              </a>
            </li>
            <li>
              <a href="#contacts" alt="">
                CONTACTS
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
