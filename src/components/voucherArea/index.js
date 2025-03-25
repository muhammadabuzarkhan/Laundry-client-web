import React from "react";
import { Col, Row, Button, Input,  Space } from "antd";

function VoucherArea() {
  return (
    <div>
      <Row justify={"center"}>
        
        <Col xs={22} md={18} lg={16}>
        <div className="border radius-8 my-35">
        <div className="newsletterarea greybg noshadow">
            <h2>Use your name as a Voucher code</h2>
            <p>
              Tell your friends to enter your code when booking the service.
            </p>
            <div className="newsletterfield">
              <Space.Compact
                style={{
                  width: "100%",
                }}
              >
                <Input defaultValue="Enter voucher code" />
                <Button className="mainbtn">COPY CODE</Button>
              </Space.Compact>
            </div>
          </div>
            <div className="separator"></div>
          <div className="newsletterarea noshadow">
            <h2>Send them your Referral link</h2>
            <div className="newsletterfield">
              <Space.Compact
                style={{
                  width: "100%",
                }}
              >
                <Input defaultValue="https://cardiffperfection.com/booking?referral+null" />
                <Button className="mainbtn">COPY CODE</Button>
              </Space.Compact>
            </div>
          </div>
        </div>
        </Col>
      </Row>
    </div>
  );
}

export default VoucherArea;
