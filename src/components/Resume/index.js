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
      education.classList.add(
        "wow",
        "animate__animated",
        "animate__fadeInLeft"
      );
      certificate.style.display = "none";
    } else if (timeline === "certificate") {
      btnCertificate.classList.add("active");
      btnEducation.classList.remove("active");
      certificate.style.display = "block";
      certificate.classList.add(
        "wow",
        "animate__animated",
        "animate__fadeInRight"
      );
      education.style.display = "none";
    }
  };

  return (
    <>
      <section
        className="resume wow animate__animated animate__fadeIn"
        id="resume"
        data-wow-delay="0.3s"
      >
        <h2
          className="text-center wow animate__animated animate__fadeInDown"
          data-wow-delay="0.5s"
        >
          1+ Years of Experience
        </h2>
        <h1
          className="text-center wow animate__animated animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          My Resume
        </h1>
        <div className="bar">
          <Row gutter={20}>
            <Col xl={12} md={12} xs={24}>
              <div
                className="box wow animate__animated animate__bounceIn"
                data-wow-delay="0.7s"
                data-education
                onClick={() => handleClick("education")}
              >
                Education
              </div>
            </Col>
            <Col xl={12} md={12} xs={24}>
              <div
                className="box wow animate__animated animate__bounceIn"
                data-wow-delay="0.8s"
                data-certificate
                onClick={() => handleClick("certificate")}
              >
                Certificate
              </div>
            </Col>
          </Row>
        </div>
        <TimeLine
          className="wow animate__animated animate__fadeIn"
          data-wow-delay="0.9s"
        />
      </section>
    </>
  );
}

export default Resume;
