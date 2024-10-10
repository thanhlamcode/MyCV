import Typewriter from "typewriter-effect";
import { Col, Row } from "antd";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "./style.scss";

function Introduce() {
  return (
    <>
      <div
        className="intro wow animate__animated animate__bounceInLeft"
        id="home"
      >
        <Row>
          <Col xl={16} lg={16} md={24} xs={24}>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Thanh Lam</span>
              <br></br>
              <Typewriter
                options={{
                  strings: [
                    "a Developer.",
                    "a Professional Coder.",
                    "a UI/UX Designer.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p>
              I use animation as a third dimension by which to simplify
              experiences and kuiding thro each and every interaction. I’m not
              adding motion just to spruce things up, but doing it in ways that.
            </p>

            <Row className="wrap-icon">
              <Col lg={12} md={24} sm={24} xs={24}>
                <h3>find with me</h3>
                <div className="icon">
                  <FaFacebook />
                  <SiZalo />
                  <CiLinkedin />
                </div>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <h3>best skill on</h3>
                <div className="icon">
                  <IoLogoJavascript />
                  <FaNodeJs />
                  <FaReact />
                </div>
              </Col>
            </Row>
          </Col>
          <Col xl={8} lg={8} md={24} xs={24}>
            <img
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
              alt="ảnh cá nhân"
            ></img>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Introduce;
