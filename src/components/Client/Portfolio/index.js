import { Col, Row } from "antd";
import { FaArrowUp } from "react-icons/fa";
import "./style.scss";

const PROJECT_OVERRIDES = {
  'snoopyshop':       { name: 'SnoopyShop — E-commerce Platform' },
  '1000':             { name: '1000H IT Jobs — Job Aggregator' },
  'speedy':           { name: 'SpeedyConvert — File Conversion Tool' },
  'finman':           { name: 'FinMan — Personal Finance Manager' },
  'build stunning':   { name: 'Responsive Web Templates — HTML/CSS' },
  'bootstrap':        { name: 'Bootstrap + WOW.js Animation Showcase' },
};

function resolveProject(item) {
  const lower = (item.projectName || '').toLowerCase();
  for (const [key, override] of Object.entries(PROJECT_OVERRIDES)) {
    if (lower.includes(key)) {
      if (override === null) return null;
      return { ...item, projectName: override.name };
    }
  }
  return item;
}

function Portfolio(props) {
  const { projects = [] } = props;
  const visible = projects.map(resolveProject).filter(Boolean);

  return (
    <section className="portfolio" id="project">
      <h3>Featured Work</h3>
      <h1>My Projects</h1>
      <Row className="container" gutter={[30, 30]}>
        {visible.map((item, index) => (
          <Col xl={8} md={12} sm={24} xs={24} key={index}>
            <div className="box">
              <div className="wrap-image">
                <img src={item.image} alt={item.projectName} />
              </div>
              <div className="wrap-content">
                <h2>
                  <a href={item.linkProject} target="_blank" rel="noopener noreferrer">
                    {item.projectName}
                  </a>
                  <span><FaArrowUp /></span>
                </h2>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Portfolio;
