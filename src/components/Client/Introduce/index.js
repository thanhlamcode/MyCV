import React from "react";
import Typewriter from "typewriter-effect";
import { Col, Row } from "antd";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiZalo } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import "animate.css";
import "./style.scss";

function convertToArray(expertiseString) {
  if (!expertiseString) return []; // Trả về mảng rỗng nếu expertiseString là undefined hoặc null
  return expertiseString.split(",").map((item) => item.trim() + ".");
}

function openLink(url) {
  window.open(url, "_blank"); // Mở URL trong tab mới
}

function Introduce(props) {
  const { information } = props;

  const expertiseArray = convertToArray(information.expertise || "");

  return (
    <>
      <section
        className="intro wow animate__animated animate__fadeIn"
        id="home"
      >
        <Row>
          <Col xl={16} lg={16} md={24} xs={24}>
            <h3
              className="wow animate__animated animate__fadeInLeft"
              data-wow-delay="0.2s"
            >
              WELCOME TO MY WORLD
            </h3>
            <h1
              className="wow animate__animated animate__fadeInRight"
              data-wow-delay="0.4s"
            >
              Hi, I'm <span>{information.fullName}</span>
              <br />
              <Typewriter
                options={{
                  strings: expertiseArray,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              {information.description}
            </p>

            <Row className="wrap-icon">
              <Col lg={12} md={24} sm={24} xs={24}>
                <h3
                  className="wow animate__animated animate__zoomIn"
                  data-wow-delay="0.8s"
                >
                  find with me
                </h3>
                <div className="icon">
                  <div className="icon">
                    <span onClick={() => openLink(information.facebookAddress)}>
                      <FaFacebook />
                    </span>
                    <span onClick={() => openLink(information.zaloAddress)}>
                      <SiZalo />
                    </span>
                    <span onClick={() => openLink(information.linkedinAddress)}>
                      <CiLinkedin />
                    </span>
                  </div>
                </div>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <h3
                  className="wow animate__animated animate__zoomIn"
                  data-wow-delay="1s"
                >
                  best skill on
                </h3>
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
              src={information.avatar}
              alt="ảnh cá nhân"
              className="wow animate__animated animate__pulse"
              data-wow-delay="1.2s"
            />
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Introduce;
