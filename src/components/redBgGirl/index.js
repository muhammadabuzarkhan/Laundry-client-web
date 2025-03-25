import React from "react";
import { Col, Row, Image, Button } from "antd";
import { ImageUrl } from "../../config/helper";
import { useNavigate } from "react-router";

function RedBgGirl() {
  const navigate = useNavigate();
  return (
    <>
      <div className="redbggirl">
        <Row justify={"center"}>
          <Col xs={22}>
            <Row gutter={20} style={{ alignItems: "center" }}>
              <Col xs={24} md={14} lg={16}>
                <h5>Giving Your Cloth More Longer Life</h5>
                <h3>Schedule your pick-up or delivery</h3>
                <h5>Reinventing the future of laundry and dry cleaning!</h5>
                <Button className="mainbtn" onClick={() => navigate("/steps")}>BOOK NOW!</Button>
              </Col>
              <Col xs={0} md={10} lg={8}>
                <Image preview={false} src={ImageUrl("red-girl.png")} alt="" />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default RedBgGirl;
