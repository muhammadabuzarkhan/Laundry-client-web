import React, { useState } from "react";
import { Col, Row, Button, Input, Space, message } from "antd";
import axios from "axios";
import { BASE_URL } from '../../config/constants/index'

function NewsLetterArea() {
  const [subscribeEmail, SetsubscribeEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const subscribeToNewsletter = async () => {
    if (!subscribeEmail || !validateEmail(subscribeEmail)) {
      return message.error("Please enter a valid email address.");
    }

    try {
      setLoading(true);
      const endpoint = `${BASE_URL}user/subscribe`;  // Use BASE_URL here

      const response = await axios.post(endpoint, {
        email: subscribeEmail,
      });

      if (response.status === 200) {
        message.success("Newsletter Subscribed Successfully");
        SetsubscribeEmail("");
      } else {
        message.error("Subscription failed. Try again later.");
      }
    } catch (error) {
      message.error(
        error.response?.data?.message || "Something went wrong. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Row justify={"center"}>
      <Col xs={22} md={18} lg={16}>
        <div className="newsletterarea" data-aos="flip-up" data-aos-duration="1000">
          <h2>Subscribe For Newsletter</h2>
          <div className="newsletterfield">
            <Space.Compact style={{ width: "100%" }}>
              <Input
                placeholder="Enter your email address..."
                value={subscribeEmail}
                onChange={(e) => SetsubscribeEmail(e.target.value)}
              />
              <Button
                className="mainbtn"
                onClick={subscribeToNewsletter}
                loading={loading}
              >
                Subscribe NOW!
              </Button>
            </Space.Compact>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default NewsLetterArea;
