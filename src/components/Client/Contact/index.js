import { Col, Row } from "antd";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useState } from "react";
import { message } from "antd";
import { addNewContact } from "../../../service/maincv";
import "./style.scss";

function openLink(url) {
  window.open(url, "_blank"); // Mở URL trong tab mới
}

function Contact({ information, contactId }) {
  const [formData, setFormData] = useState({
    senderName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await addNewContact(contactId, formData);
      if (response) {
        message.success("Gửi thành công!");
        setFormData({ senderName: "", email: "", subject: "", message: "" }); // Xóa dữ liệu trong form
      } else {
        message.error("Gửi thất bại!");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

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
              <div className="fullName">{information.fullName}</div>
              <div className="university">University of Economy</div>
              <p>
                I am available for freelance work. Connect with me via and call
                in to my account.
              </p>
              <div className="phone">
                Phone: <span>{information.phoneNumber}</span>
              </div>
              <div className="email">
                Email: <span>{information.emailAddress}</span>
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
                <span onClick={() => openLink(information.facebookAddress)}>
                  <FaFacebookF />
                </span>
                <span onClick={() => openLink(information.zaloAddress)}>
                  <SiZalo />
                </span>
                <span onClick={() => openLink(information.linkedinAddress)}>
                  <CiLinkedin />
                </span>
              </div>
            </div>
          </Col>
          <Col xxl={14} lg={14} md={24} sm={24} xs={24}>
            <form
              className="wow animate__animated animate__slideInUp"
              data-wow-delay="0.8s"
              onSubmit={handleSubmit}
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
                  <label htmlFor="senderName">Your Name</label>
                  <input
                    id="senderName"
                    value={formData.senderName}
                    onChange={handleChange}
                  />
                </Col>
                <Col
                  xxl={12}
                  xl={12}
                  md={12}
                  sm={24}
                  xs={24}
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
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
                  <input
                    id="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
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
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
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
