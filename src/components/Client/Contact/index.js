import { Col, Row } from "antd";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { useState } from "react";
import { message } from "antd";
import { addNewContact } from "../../../service/maincv";
import "./style.scss";

function openLink(url) {
  window.open(url, "_blank");
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
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const response = await addNewContact(contactId, formData);
      if (response) {
        message.success("Sent successfully!");
        setFormData({ senderName: "", email: "", subject: "", message: "" });
      } else {
        message.error("Send failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
    }
  };

  return (
    <section className="contact" id="contacts">
      <h3>Get In Touch</h3>
      <h1>Contact With Me</h1>
      <Row gutter={[30, 30]}>
        <Col xxl={10} lg={10} md={24} sm={24} xs={24}>
          <div className="wrap-left">
            <div className="fullName">{information.fullName}</div>
            <div className="job-title">PHP / Symfony Backend Developer</div>
            <p>Open to new opportunities. Connect with me or drop a message below.</p>
            <div className="contact-row">
              <span className="label">Phone</span>
              <span className="value">{information.phoneNumber}</span>
            </div>
            <div className="contact-row">
              <span className="label">Email</span>
              <span className="value">{information.emailAddress}</span>
            </div>
            <div className="find-label">FIND WITH ME</div>
            <div className="icon">
              <span onClick={() => openLink(information.facebookAddress)}><FaFacebookF /></span>
              <span onClick={() => openLink(information.zaloAddress)}><SiZalo /></span>
              <span onClick={() => openLink(information.linkedinAddress)}><CiLinkedin /></span>
            </div>
          </div>
        </Col>
        <Col xxl={14} lg={14} md={24} sm={24} xs={24}>
          <form onSubmit={handleSubmit}>
            <Row gutter={[20, 20]}>
              <Col xxl={12} xl={12} md={12} sm={24} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="senderName">Your Name</label>
                <input id="senderName" value={formData.senderName} onChange={handleChange} />
              </Col>
              <Col xxl={12} xl={12} md={12} sm={24} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={formData.email} onChange={handleChange} />
              </Col>
              <Col xxl={24} xl={24} md={24} sm={24} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="subject">Subject</label>
                <input id="subject" type="text" value={formData.subject} onChange={handleChange} />
              </Col>
              <Col xxl={24} xl={24} md={24} sm={24} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <label htmlFor="message">Your Message</label>
                <textarea id="message" value={formData.message} onChange={handleChange} />
              </Col>
              <Col xxl={24} xl={24} md={24} sm={24} xs={24} style={{ display: "flex", flexDirection: "column" }}>
                <button type="submit">SEND MESSAGE</button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
