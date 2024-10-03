import { Col, Row } from "antd";
import "./style.scss";
import TimeLine from "../TimeLine";

function Resume() {
  return (
    <>
      <div className="resume">
        <h2 className="text-center">1+ Years of Experience</h2>
        <h1 className="text-center">My Resume</h1>
        <div className="bar">
          <Row gutter={20}>
            <Col xl={12} md={12} xs={24}>
              <div className="box">Education</div>
            </Col>
            <Col xl={12} md={12} xs={24}>
              <div className="box">Professional Skills</div>
            </Col>
          </Row>
        </div>
        <TimeLine></TimeLine>
      </div>
    </>
  );
}

export default Resume;
