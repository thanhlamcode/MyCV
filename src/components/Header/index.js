/* eslint-disable jsx-a11y/anchor-is-valid */
import logotrans from "../../image/logo2.png";
import "./style.scss";

function Header() {
  return (
    <>
      <div className="header">
        <div className="header__left">
          <img src={logotrans} alt="logo"></img>
        </div>
        <div className="header__right">
          <ul>
            <li>
              <a href="" alt="">
                HOME
              </a>
            </li>
            <li>
              <a href="" alt="">
                FEATURES
              </a>
            </li>
            <li>
              <a href="" alt="">
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="" alt="">
                RESUME
              </a>
            </li>
            <li>
              <a href="" alt="">
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
