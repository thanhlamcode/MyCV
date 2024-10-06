import { Col, Row, Timeline } from "antd";
import "./style.scss";

function TimeLine() {
  return (
    <>
      <div className="timeline">
        <div className="timeline-education">
          <Row gutter={50}>
            <Col xxl={12} md={12} sm={24} xs={24}>
              <div className="year">1998 - 2010</div>
              <h1>Education Quality</h1>
              <Timeline
                items={[
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </Col>
            <Col xxl={12} md={12} sm={24} xs={24}>
              <div className="year">1998 - 2010</div>
              <h1>Education Quality</h1>
              <Timeline
                items={[
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
        <div className="timeline-certificate">
          <Row gutter={50}>
            <Col xxl={24} md={24} sm={24} xs={24}>
              <div className="year">1998 - 2010</div>
              <h1>Certificate</h1>
              <Timeline
                items={[
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                  {
                    children: (
                      <div className="box">
                        <div className="title">
                          First-Year Academic Results.
                        </div>
                        <div className="university">
                          University Of Economy (2022-2023)
                        </div>
                        <div className="gpa">3.5/4.0</div>

                        <p>
                          The training provided by universities in order to
                          prepare people to work in various sectors of the
                          economy or areas of culture.
                        </p>
                      </div>
                    ),
                  },
                ]}
              />
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}

export default TimeLine;
