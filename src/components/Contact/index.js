import { Col, Row } from "antd";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import "./style.scss";

function Contact() {
  return (
    <>
      <div className="contact">
        <h3>Contact</h3>
        <h1>Contact With Me</h1>
        <Row gutter={[30, 30]}>
          <Col xxl={10} lg={10} md={24} sm={24} xs={24}>
            <div className="wrap-left">
              <div className="wrap-image">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                  alt=""
                />
              </div>
              <div className="fullName">Đoàn Thanh Lâm</div>
              <div className="university">University of Economy</div>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div className="phone">
                Phone: <span>+012 345 678 90</span>
              </div>
              <div className="email">
                Email: <span>admin@example.com</span>
              </div>
              <div className="find">FIND WITH ME</div>
              <div className="icon">
                <CiLinkedin />
                <FaFacebookF />
                <SiZalo />
              </div>
            </div>
          </Col>
          <Col xxl={14} lg={14} md={24} sm={24} xs={24}>
            <form>
              <Row gutter={[20, 20]}>
                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label for="name">Your Name</label>
                  <input id="name"></input>
                </Col>
                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label for="phone">Phone Number</label>
                  <input id="phone"></input>
                </Col>
                <Col
                  xxl={24}
                  xl={24}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label for="email">Email</label>
                  <input type="email" id="email"></input>
                </Col>
                <Col
                  xxl={24}
                  xl={24}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label for="subject">Subject</label>
                  <input id="subject" type="text"></input>
                </Col>
                <Col
                  xxl={24}
                  xl={24}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label for="message">Your Message</label>
                  <textarea id="message"></textarea>
                </Col>
                <Col
                  xxl={24}
                  xl={24}
                  md={24}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <button>SEND MESSAGE</button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Contact;
