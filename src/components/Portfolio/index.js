import { Col, Row } from "antd";
import { CiHeart } from "react-icons/ci";
import { FaArrowUp } from "react-icons/fa";
import "./style.scss";

function Portfolio() {
  return (
    <>
      <div
        className="portfolio wow animate__animated animate__fadeIn"
        data-wow-delay="0.5s"
        id="project"
      >
        <h3
          className="wow animate__animated animate__fadeInDown"
          data-wow-delay="0.3s"
        >
          Visit my project and keep your feedback
        </h3>
        <h1
          className="wow animate__animated animate__fadeInUp"
          data-wow-delay="0.4s"
        >
          My Project
        </h1>
        <Row className="container" gutter={[30, 30]}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Col xl={8} md={12} sm={24} xs={24} key={index}>
              <div
                className="box wow animate__animated animate__zoomIn"
                data-wow-delay={`${0.6 + index * 0.2}s`}
              >
                <div className="wrap-image">
                  <img
                    src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/portfolio-large-01-340x250.jpg"
                    alt=""
                  />
                </div>
                <div className="wrap-content">
                  <div className="wrap-love">
                    <div
                      className="love wow animate__animated animate__heartBeat"
                      data-wow-delay={`${0.8 + index * 0.2}s`}
                    >
                      <div className="number-love">612</div>
                      <span>
                        <CiHeart />
                      </span>
                    </div>
                  </div>
                  <h2>
                    NFT Dashboard Application Development{" "}
                    <span>
                      <FaArrowUp />
                    </span>
                  </h2>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default Portfolio;
