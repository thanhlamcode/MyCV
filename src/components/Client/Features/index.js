import { Col, Row } from "antd";
import { FaBookOpen } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";
import WOW from "wowjs";
import { useEffect } from "react";
import "./style.scss";

function Features(props) {
  const { features = [] } = props;

  // Khởi động WOW.js lại khi features thay đổi để đảm bảo hiệu ứng hoạt động
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false,
    });
    wow.init();
    wow.sync();
  }, [features]);

  // Cập nhật các features và thêm delay cùng icon tùy theo chỉ mục
  const updatedFeatures = features.map((feature, index) => ({
    ...feature,
    delay: `${0.6 + index * 0.2}s`, // Tăng dần delay cho từng feature
    icon:
      index === 0 ? (
        <FaBookOpen />
      ) : index === 1 ? (
        <FaBookmark />
      ) : index === 2 ? (
        <IoPhonePortrait />
      ) : index === 3 ? (
        <FaFacebookMessenger />
      ) : index === 4 ? (
        <FiActivity />
      ) : (
        <FiFilm />
      ),
  }));

  return (
    <section
      className="features wow animate__animated animate__fadeIn"
      id="features"
      data-wow-delay="0.5s"
    >
      <h3
        className="wow animate__animated animate__fadeInDown"
        data-wow-delay="0.3s"
      >
        FEATURES
      </h3>
      <h1
        className="wow animate__animated animate__fadeInUp"
        data-wow-delay="0.4s"
      >
        What I Do
      </h1>
      <Row gutter={[30, 30]}>
        {updatedFeatures.map((feature, index) => (
          <Col key={index} xl={8} md={12} sm={24} xs={24}>
            <div
              className="box wow animate__animated animate__zoomIn"
              data-wow-delay={feature.delay}
              style={{ aspectRatio: "4/3" }}
            >
              {feature.icon}
              <h2
                className="wow animate__animated animate__fadeIn"
                data-wow-delay={`${0.8 + index * 0.2}s`}
              >
                {feature.skillName}
              </h2>
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
