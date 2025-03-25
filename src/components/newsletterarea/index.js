import React, { useState } from "react";
import { Col, Row, Button, Input, Space, message } from "antd";

function NewsLetterArea() {
  const [subscribeEmail, SetsubscribeEmail] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const ShowMessage = () => {
    if (!subscribeEmail) {
      // Show error message if email is empty
      message.error("Please enter a valid email address.");
    } else if (!validateEmail(subscribeEmail)) {
      // Show error message if email is invalid
      message.error("Please enter a valid email address.");
    } else {
      // Show success message if email is valid
      message.success("Newsletter Subscribed Successfully");
      SetsubscribeEmail(""); // Clear the email input
    }
  };

  return (
    <Row justify={"center"}>
      <Col xs={22} md={18} lg={16}>
        <div className="newsletterarea" data-aos="flip-up" data-aos-duration="1000">
          <h2>Subscribe For Newsletter</h2>
          <div className="newsletterfield">
            <Space.Compact
              style={{
                width: "100%",
              }}
            >
              <Input
                placeholder="Enter your email address..."
                value={subscribeEmail}
                onChange={(e) => SetsubscribeEmail(e.target.value)}
              />
              <Button className="mainbtn" onClick={ShowMessage}>Subscribe NOW!</Button>
            </Space.Compact>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default NewsLetterArea;
