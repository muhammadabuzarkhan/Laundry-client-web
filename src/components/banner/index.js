import React, { useEffect } from "react";
import { Col, Row, Button, Image, TimePicker } from "antd";
import { ImageUrl } from "../../config/helper";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useSelector } from 'react-redux'
// import WOW from "wowjs";

function Banner() {
  // const wow = new WOW.WOW();
  // wow.init();
  const navigate = useNavigate();
  const userToken =  useSelector((state) => state?.user?.data?.token)
  return (
    <div className="banner">
      <Row justify="center">
        <Col xs={22}>
          <Row justify="center" gutter={0}>
            <Col xs={22} md={18} xl={12}>
              <h4 data-aos="flip-up" data-aos-duration="1000">
                Want to get your clothes cleaned? QUICKLY
              </h4>
              <h1 data-aos="fade-left" data-aos-duration="1000">
                Professional Laundry and Dry Cleaning Services
              </h1>
              <Button className="mainbtn banner-btn" onClick={() => navigate("/steps")}>Schedule Your Pickup!</Button>
              {/* <div
                className="banner-form-area"
                data-aos="flip-down"
                data-aos-duration="1500"
              >
                <label>
                Schedule Pickup in <strong>Cardiff</strong>{" "}
                  <Button>Change</Button>
                </label>
                <Row gutter={20}>
                  <Col xs={24} sm={12} md={24} lg={12}>
                    <div className="fieldArea">
                      <label>
                        <AiFillThunderbolt /> EARLIEST
                      </label>
                      <h5>in the next 45min</h5>
                    </div>
                  </Col>
                  <Col xs={24} sm={12} md={24} lg={12}>
                    <div className="fieldArea">
                      <label>
                        <IoMoon /> LAST
                      </label>
                      <h5>20:00 - 23:00</h5>
                    </div>
                  </Col>
                </Row>

                <label>
                  <Button onClick={() => navigate("/steps")}>
                    See all slots



                  </Button>
                </label>
              </div> */}
            </Col>

            <Col
              xs={0}
              md={0}
              xl={12}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              style={{textAlign:"end"}}
            >
              <Image
                preview={false}
                src={ImageUrl("banner-girl.png")}
                alt="banner"
                className="machine"
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
