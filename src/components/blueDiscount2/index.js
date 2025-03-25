import React from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router";

function DiscountBlue() {
    const navigate = useNavigate();
  return (
    <div className="blueDiscount">
      <Row justify={"center"}>
        <Col xs={22} md={18} lg={16}>
          <div
            className="blueaAreaBorder"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <Row>
              <Col xs={22} md={19} lg={20}>
                <div className="blueaAreaBorderHeading">
                  <h3>WHAT OUR CLIENT SHOULD KNOW</h3>
                  <h2>Book our laundry services & get 30% discount!</h2>
                </div>
              </Col>
              <Col xs={22} md={5} lg={4}>
                <Button className="mainbtn new-buttons" onClick={() => navigate("/steps")}>
                  BOOK NOW!
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default DiscountBlue;
