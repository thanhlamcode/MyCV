import { Col, Row } from "antd";
import "./style.scss";
import TimeLine from "../TimeLine";

function Resume() {
  const handleClick = (timeline) => {
    const education = document.querySelector(".timeline-education");
    const certificate = document.querySelector(".timeline-certificate");
    const btnEducation = document.querySelector("[data-education]");
    const btnCertificate = document.querySelector("[data-certificate]");
    if (timeline === "education") {
      btnEducation.classList.add("active");
      btnCertificate.classList.remove("active");
      education.style.display = "block";
      certificate.style.display = "none";
    } else if (timeline === "certificate") {
      btnCertificate.classList.add("active");
      btnEducation.classList.remove("active");
      certificate.style.display = "block";
      education.style.display = "none";
    }
  };

  return (
    <>
      <div className="resume">
        <h2 className="text-center">1+ Years of Experience</h2>
        <h1 className="text-center">My Resume</h1>
        <div className="bar">
          <Row gutter={20}>
            <Col xl={12} md={12} xs={24}>
              <div
                className="box"
                data-education
                onClick={() => handleClick("education")}
              >
                Education
              </div>
            </Col>
            <Col xl={12} md={12} xs={24}>
              <div
                className="box"
                data-certificate
                onClick={() => handleClick("certificate")}
              >
                Certificate
              </div>
            </Col>
          </Row>
        </div>
        <TimeLine></TimeLine>
      </div>
    </>
  );
}

export default Resume;
