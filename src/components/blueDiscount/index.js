import React from "react";
import { Col, Row, Button, Image ,Card,} from "antd";
import { ImageUrl } from "../../config/helper";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
function DiscountBlue() {
  const navigate = useNavigate();

  const userToken = useSelector((state) => state?.user?.data?.token);
  return (
    <div className="blueDiscount">
      
      <Row justify="center">
        <Col xs={22} md={18} lg={16}>
        <Row justify={"center"} gutter={40}>
              <Col xs={22} md={12} lg={8}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                     <Image
                    preview={false}
                    src={ImageUrl("Group 1000002531.png")}
                    alt="banner"
                    className="machine"
                  />
                    </>
                  }
                  // bordered={false}
                >
                  <h3> Choose where and when you'd like us to collect and deliver
                  your laundry or items .</h3>
                  {/* <p>
                  Choose where and when you'd like us to collect and deliver
                  your laundry or items .
                  </p> */}
                </Card>
              </Col>
              <Col xs={22} md={12} lg={8}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                     <Image
                    preview={false}
                    src={ImageUrl("Group 1000002532.png")}
                    alt="banner"
                    className="machine"
                  />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>Our drivers will call prior to arrival to ensure you are
                  ready to hand over the laundry for collection.</h3>
                  {/* <p>We pick up and drop off Monday to Saturday every week.</p> */}
                </Card>
              </Col>
              <Col xs={22} md={12} lg={8}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                      <Image
                    preview={false}
                    src={ImageUrl("Group 1000002533.png")}
                    alt="banner"
                    className="machine"
                  />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>We deliver your items cleaned by the specfied date and time
                  or according to the agreed-upon service schedule.</h3>
                  {/* <p>Our laundry subscribers get exclusive FREE delivery.</p> */}
                </Card>
              </Col>
            </Row>



          {/* <div
            className="blueaAreaBorder"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Row justify="center">
              <Col xs={24} md={16} lg={16}>
                <div
                  className="content-center"
                  style={{
                    textAlign: "center",
                    color: "#fff",
                    fontSize: "20px",
                    padding: "20px 0",
                  }}
                >
                  <h3>HOW IT WORKS</h3>
                </div>
              </Col>
            </Row>

            <Row
              justify="space-between"
              align="middle"
              gutter={[32, 32]}
              style={{
                textAlign: "center",
                color: "#fff",
                alignItems: "baseline",
              }}
            >
              <Col xs={24} md={8} lg={8}>
                <div className="content-left">
                  <Image
                    preview={false}
                    src={ImageUrl("Group 1000002531.png")}
                    alt="banner"
                    className="machine"
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      padding: "20px 0",
                    }}
                  >
                    Choose where and when you'd like us to collect and deliver
                    your laundry or items .
                  </p>
                </div>
              </Col>

              <Col xs={24} md={8} lg={8}>
                <div className="content-center">
                  <Image
                    preview={false}
                    src={ImageUrl("Group 1000002532.png")}
                    alt="banner"
                    className="machine"
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      padding: "20px 0",
                    }}
                  >
                    Our drivers will call prior to arrival to ensure you are
                    ready to hand over the laundry for collection.
                  </p>
                </div>
              </Col>

              <Col xs={24} md={8} lg={8}>
                <div className="content-right">
                  <Image
                    preview={false}
                    src={ImageUrl("Group 1000002533.png")}
                    alt="banner"
                    className="machine"
                  />
                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: "24px",
                      padding: "20px 0",
                    }}
                  >
                    We deliver your items cleaned by the specfied date and time
                    or according to the agreed-upon service schedule.
                  </p>
                </div>
              </Col>
            </Row>
          </div> */}
        </Col>
      </Row>
    </div>
  );
}

export default DiscountBlue;
