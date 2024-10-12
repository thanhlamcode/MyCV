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

function Introduce() {
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
              Hi, I'm <span>Thanh Lam</span>
              <br />
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
            <p
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.6s"
            >
              I use animation as a third dimension by which to simplify
              experiences and guiding through each interaction.
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
                  <FaFacebook />
                  <SiZalo />
                  <CiLinkedin />
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
              src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/banner-01.png"
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
