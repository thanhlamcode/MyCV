import { Col, Row } from "antd";
import { FaBookOpen } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import "./style.scss";

function Features(props) {
  const { features } = props;
  console.log(features);
  return (
    <>
      <section
        className="features wow animate__animated animate__fadeIn"
        id="features"
        data-wow-delay="0.3s"
      >
        <h3
          className="wow animate__animated animate__fadeInDown"
          data-wow-delay="0.5s"
        >
          FEATURES
        </h3>
        <h1
          className="wow animate__animated animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          What I Do
        </h1>
        <Row gutter={[30, 30]}>
          {[
            { icon: <FaBookOpen />, title: "Business Strategy", delay: "0.7s" },
            { icon: <FaBookmark />, title: "Branding", delay: "0.8s" },
            {
              icon: <IoPhonePortrait />,
              title: "Mobile App Design",
              delay: "0.9s",
            },
            {
              icon: <FaFacebookMessenger />,
              title: "Social Media Marketing",
              delay: "1.0s",
            },
            { icon: <FiActivity />, title: "Market Analysis", delay: "1.1s" },
            { icon: <FiFilm />, title: "Video Production", delay: "1.2s" },
          ].map((feature, index) => (
            <Col key={index} xl={8} md={12} sm={24} xs={24}>
              <div
                className="box wow animate__animated animate__zoomIn"
                data-wow-delay={feature.delay}
                style={{ aspectRatio: "4/3" }}
              >
                {feature.icon}
                <h2>{feature.title}</h2>
                <p>
                  I throw myself down among the tall grass by the stream as I
                  lie close to the earth.
                </p>
                <FiArrowRight className="arrow" />
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
}

export default Features;
