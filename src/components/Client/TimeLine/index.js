import { Col, Row } from "antd";
import "./style.scss";

function TimeLine({ resume }) {
  const { education = [], achievement = [], certificate = [] } = resume;

  return (
    <div className="timeline">
      <div className="timeline-education">
        <Row gutter={[40, 0]}>
          <Col xxl={12} md={12} sm={24} xs={24}>
            <h2 className="tl-heading">Education</h2>
            <div className="tl-list">
              {education.map((item, index) => (
                <div className="tl-card" key={index}>
                  <div className="tl-title">{item.title || "Education"}</div>
                  <div className="tl-sub">{item.university}</div>
                  {item.GPA && <span className="tl-gpa">{item.GPA} / 4.0</span>}
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
          <Col xxl={12} md={12} sm={24} xs={24}>
            <h2 className="tl-heading">Achievements</h2>
            <div className="tl-list">
              {achievement.map((item, index) => (
                <div className="tl-card" key={index}>
                  <div className="tl-title">{item.achievement}</div>
                  <div className="tl-sub">{item.university}</div>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </div>

      <div className="timeline-certificate" style={{ display: "none" }}>
        <h2 className="tl-heading">Certificate</h2>
        <div className="tl-list">
          {certificate.map((item, index) => (
            <div className="tl-card" key={index}>
              <div className="tl-title">{item.certificate}</div>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TimeLine;
