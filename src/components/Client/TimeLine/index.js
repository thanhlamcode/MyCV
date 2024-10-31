import { Col, Row, Timeline } from "antd";
import WOW from "wowjs";
import { useEffect } from "react";
import "./style.scss";

function TimeLine({ resume }) {
  const { education = [], achievement = [], certificate = [] } = resume;

  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
    wow.sync();
  }, [resume]);

  return (
    <div className="timeline">
      {/* Education Section */}
      <div
        className="timeline-education wow animate__animated animate__fadeIn"
        data-wow-delay="0.3s"
      >
        <Row gutter={50}>
          <Col xxl={12} md={12} sm={24} xs={24}>
            <h1
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              Education
            </h1>
            <Timeline
              items={education.map((item, index) => ({
                children: (
                  <div
                    className="box wow animate__animated animate__zoomIn"
                    data-wow-delay={`${0.6 + index * 0.1}s`}
                  >
                    <div className="title">{item.title || "Education"}</div>
                    <div className="university">{item.university}</div>
                    <div className="gpa">{item.GPA}/4.0</div>
                    <p>{item.description}</p>
                  </div>
                ),
              }))}
            />
          </Col>

          {/* Achievements Section */}
          <Col xxl={12} md={12} sm={24} xs={24}>
            <h1
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay="0.5s"
            >
              Achievements
            </h1>
            <Timeline
              items={achievement.map((item, index) => ({
                children: (
                  <div
                    className="box wow animate__animated animate__zoomIn"
                    data-wow-delay={`${0.6 + index * 0.1}s`}
                  >
                    <div className="title">{item.achievement}</div>
                    <div className="gpa">100%</div>
                    <div className="university">{item.university}</div>
                    <p>{item.description}</p>
                  </div>
                ),
              }))}
            />
          </Col>
        </Row>
      </div>

      {/* Certificate Section */}
      <div className="timeline-certificate">
        <Row gutter={50}>
          <Col xxl={24} md={24} sm={24} xs={24}>
            <h1>Certificate</h1>
            <Timeline
              items={certificate.map((item, index) => ({
                children: (
                  <div
                    className="box wow animate__animated animate__zoomIn"
                    data-wow-delay={`${0.6 + index * 0.1}s`}
                  >
                    <div className="title">{item.certificate}</div>
                    <div className="gpa">100%</div>
                    <p>{item.description}</p>
                  </div>
                ),
              }))}
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default TimeLine;
