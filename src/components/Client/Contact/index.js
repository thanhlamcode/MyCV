import { Col, Row } from "antd";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import "./style.scss";

function Contact() {
  return (
    <>
      <section
        className="contact wow animate__animated animate__fadeIn"
        id="contacts"
        data-wow-delay="0.3s"
      >
        <h3
          className="wow animate__animated animate__fadeInDown"
          data-wow-delay="0.5s"
        >
          Contact
        </h3>
        <h1
          className="wow animate__animated animate__fadeInUp"
          data-wow-delay="0.6s"
        >
          Contact With Me
        </h1>
        <Row gutter={[30, 30]}>
          <Col xxl={10} lg={10} md={24} sm={24} xs={24}>
            <div
              className="wrap-left wow animate__animated animate__zoomIn"
              data-wow-delay="0.7s"
            >
              <div className="wrap-image">
                <img
                  src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
                  alt=""
                  className="wow animate__animated animate__pulse"
                  data-wow-delay="0.9s"
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
              <div
                className="find wow animate__animated animate__fadeInUp"
                data-wow-delay="1.1s"
              >
                FIND WITH ME
              </div>
              <div
                className="icon wow animate__animated animate__bounceIn"
                data-wow-delay="1.2s"
              >
                <CiLinkedin />
                <FaFacebookF />
                <SiZalo />
              </div>
            </div>
          </Col>
          <Col xxl={14} lg={14} md={24} sm={24} xs={24}>
            <form
              className="wow animate__animated animate__slideInUp"
              data-wow-delay="0.8s"
            >
              <Row gutter={[20, 20]}>
                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="name">Your Name</label>
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
                  <label htmlFor="phone">Phone Number</label>
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
                  <label htmlFor="email">Email</label>
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
                  <label htmlFor="subject">Subject</label>
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
                  <label htmlFor="message">Your Message</label>
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
                  <button
                    className="wow animate__animated animate__zoomIn"
                    data-wow-delay="1.3s"
                  >
                    SEND MESSAGE
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </section>
    </>
  );
}

export default Contact;
