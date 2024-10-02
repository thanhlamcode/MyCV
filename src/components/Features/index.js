import { Col, Row } from "antd";
import { FaBookOpen } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import { FiFilm } from "react-icons/fi";

import "./style.scss";

function Features() {
  return (
    <>
      <div className="features" id="features">
        <h3>FEATURES</h3>
        <h1>What I Do</h1>
        <Row gutter={[30, 30]}>
          <Col xl={8} md={12} sm={24} xs={24}>
            <div className="box">
              <FaBookOpen />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
          <Col xs={24} xl={8} md={12} sm={24}>
            <div className="box">
              <FaBookmark />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
          <Col xs={24} xl={8} md={12} sm={24}>
            <div className="box">
              <IoPhonePortrait />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
          <Col xs={24} xl={8} md={12} sm={24}>
            <div className="box">
              <FaFacebookMessenger />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
          <Col xs={24} xl={8} md={12} sm={24}>
            <div className="box">
              <FiActivity />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
          <Col xs={24} xl={8} md={12} sm={24}>
            <div className="box">
              <FiFilm />
              <h2>Business Stratagy</h2>
              <p>
                I throw myself down among the tall grass by the stream as Ilie
                close to the earth.
              </p>
              <FiArrowRight className="arrow" />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Features;
