import React from "react";
import { Col, Row, Image, Button } from "antd";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function HappinessArea() {
  const navigate = useNavigate();
  return (
    <>
      <div className="laundry-bg no-bg">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40} align={"middle"}>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("you-happiness.png")}
                  alt="A Little Introduction"
                  data-aos="fade-right"
                  data-aos-duration="1200"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-left" data-aos-duration="1000">
                  A Little Introduction
                </h5>
                <h4 data-aos="fade-left" data-aos-duration="1200">
                  Your Happiness Is Our Priority
                </h4>
                <p data-aos="fade-left" data-aos-duration="1600">
                 Located in Cardiff , 
                 we offer exceptional laundry , 
                 dry cleaning and alteration services for both domestic and commerical client, 
                 Our dedicated team ensure each garment receives
                 the utmost care and attention , Enjoy the convenices
                 of our reliable pickup and delivery service , or come and use 
                 state of the art machine

                </p>
               
                

                <Button className="more-us" onClick={() => navigate("/about")}>MORE ABOUT US</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default HappinessArea;
