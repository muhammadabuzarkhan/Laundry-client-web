import React from "react";
import InnerBanner from "../../components/innerBanner";
import { Col, Row, Form, Input, Button, Modal } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaMapLocation } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import { createQuery } from "../../redux/thunk/querySlice";
import { useDispatch } from "react-redux";

const { TextArea } = Input;

function ContactUs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const onFinish = (values) => {
    console.log("Received values:", values);
    const data = {
      firstName: values.FullName.split(" ")[0],
      lastName: values.FullName.split(" ")[1] || "",
      email: values.Email,
      subject: values.Subject,
      message: values.Message,
    };
    dispatch(createQuery(data));

    // Show success modal before navigation
    Modal.success({
      title: "Message Sent Successfully!",
      content: "Thank you for contacting us. We will get back to you soon.",
      onOk: () => navigate("/"),
    });
  };

  return (
    <div>
      <InnerBanner heading={"Contact Us"} para={"Please let us know how we can improve your experience"} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col lg={24}>
          <Row justify="center">
            <Col xl={18} lg={20} xs={23}>
              <div className="details-card my-4 contact-page">
                <Row gutter={[16, 16]}>
                  <Col xl={15} lg={14} md={14} xs={24}>
                    <Form layout="vertical" onFinish={onFinish} autoComplete="off">
                      <Form.Item label="Full Name" name="FullName" rules={[{ required: true, message: "Please enter your Full Name!" }]}> 
                        <Input size="large" placeholder="Enter Full Name" className="web-input" />
                      </Form.Item>
                      <Form.Item label="Email Address" name="Email" rules={[{ required: true, message: "Please enter your Email!" }]}> 
                        <Input size="large" placeholder="Enter Email address" className="web-input" />
                      </Form.Item>
                      <Form.Item label="Subject" name="Subject" rules={[{ required: true, message: "Please enter your Subject!" }]}> 
                        <Input size="large" placeholder="Enter Subject" className="web-input" />
                      </Form.Item>
                      <Form.Item label="Message" name="Message" rules={[{ required: true, message: "Please enter your Message!" }]}> 
                        <TextArea rows={4} placeholder="Write your message.." maxLength={100} className="web-textarea" />
                      </Form.Item>
                      <div style={{ textAlign: "center" }}>
                        <Button htmlType="submit" className="btn web-btn px-5">SEND NOW!</Button>
                      </div>
                    </Form>
                  </Col>
                  <Col xl={9} lg={10} md={10} xs={24}>
                    <div className="help-frame">
                      <h6>Contact Information</h6>
                      <Link className="contact-links"><FaMapLocation /> ABC road, 123 street New York</Link>
                      <Link className="contact-links"><TiContacts /> +64 958 248 966</Link>
                      <Link className="contact-links"><IoMdMailOpen /> example@email.com</Link>
                      <div className="social-icons-box">
                        <h5>Social Media</h5>
                        <Link><FiFacebook /></Link>
                        <Link><FaInstagram /></Link>
                        <Link><FaTwitter /></Link>
                        <Link><FiYoutube /></Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row justify={"center"}><Col xs={22}><hr /></Col></Row>
    </div>
  );
}

export default ContactUs;
