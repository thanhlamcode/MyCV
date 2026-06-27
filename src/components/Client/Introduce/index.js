import React from "react";
import Typewriter from "typewriter-effect";
import { Col, Row } from "antd";
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { SiZalo, SiPhp, SiSymfony, SiPostgresql } from "react-icons/si";
import "./style.scss";

function openLink(url) {
  window.open(url, "_blank");
}

const TYPEWRITER_STRINGS = [
  "PHP / Symfony Backend Developer.",
  "API Platform 4 · Kafka · CDC.",
  "Building production-grade systems.",
];

function Introduce(props) {
  const { information } = props;

  return (
    <section className="intro" id="home">
      <Row>
        <Col xl={16} lg={16} md={24} xs={24}>
          <h3>BACKEND DEVELOPER · 1.5 YEARS EXPERIENCE</h3>
          <h1>
            Hi, I'm <span>{information.fullName}</span>
            <br />
            <Typewriter
              options={{
                strings: TYPEWRITER_STRINGS,
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p>PHP/Symfony Backend Developer with 1.5 years building a production multi-tenant POS platform. Specializing in event-driven architecture (Kafka, RabbitMQ), CDC pipelines, and REST API design with API Platform 4.</p>

          <Row className="wrap-icon">
            <Col lg={12} md={24} sm={24} xs={24}>
              <h3>find with me</h3>
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
            </Col>
            <Col lg={12} md={24} sm={24} xs={24}>
              <h3>best skill on</h3>
              <div className="icon">
                <SiPhp />
                <SiSymfony />
                <SiPostgresql />
              </div>
            </Col>
          </Row>
        </Col>
        <Col xl={8} lg={8} md={24} xs={24} className="avatar-col">
          <img
            src={information.avatar}
            alt="ảnh cá nhân"
            className="avatar"
          />
        </Col>
      </Row>
    </section>
  );
}

export default Introduce;
