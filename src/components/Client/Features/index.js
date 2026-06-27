import { Col, Row } from "antd";
import { FiArrowRight, FiCode } from "react-icons/fi";
import { SiPhp, SiSymfony, SiPostgresql, SiDocker, SiApachekafka, SiJavascript, SiReact, SiNodedotjs, SiMongodb, SiLaravel } from "react-icons/si";
import "./style.scss";

const SKILL_ICON_MAP = {
  'php': <SiPhp />,
  'symfony': <SiSymfony />,
  'postgresql': <SiPostgresql />,
  'postgres': <SiPostgresql />,
  'docker': <SiDocker />,
  'kafka': <SiApachekafka />,
  'javascript': <SiJavascript />,
  'js': <SiJavascript />,
  'react': <SiReact />,
  'node': <SiNodedotjs />,
  'nodejs': <SiNodedotjs />,
  'mongodb': <SiMongodb />,
  'laravel': <SiLaravel />,
};

function getSkillIcon(skillName) {
  const key = (skillName || '').toLowerCase().replace(/[^a-z]/g, '');
  for (const [k, icon] of Object.entries(SKILL_ICON_MAP)) {
    if (key.includes(k)) return icon;
  }
  return <FiCode />;
}

function Features(props) {
  const { features = [] } = props;

  return (
    <section className="features" id="features">
      <h3>Skills &amp; Technologies</h3>
      <h1>What I Do</h1>
      <Row gutter={[30, 30]}>
        {features.map((feature, index) => (
          <Col key={index} xl={8} md={12} sm={24} xs={24}>
            <div className="box">
              {getSkillIcon(feature.skillName)}
              <h2>{feature.skillName}</h2>
              <p>{feature.description}</p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default Features;
