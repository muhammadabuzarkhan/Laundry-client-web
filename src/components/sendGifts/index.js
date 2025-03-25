import React from 'react'
import { Col, Row,  Button, } from "antd";
import { MdArrowOutward } from "react-icons/md";
import { useNavigate, Link } from "react-router-dom";

function SendGift() {
    const navigate = useNavigate();
  return (
    <Row justify={'center'} style={{paddingBottom:"85px"}}>
        <Col xs={22}>
            <Row gutter={40}>
                <Col xs={24} md={12} lg={12}>
                    <div className='refer' data-aos="fade-right" data-aos-duration="1000">
                        <Button className='mainbtn' onClick={() => navigate("/referfriend")}><MdArrowOutward /> Refer a friend and earn</Button>
                    </div>
                    <p>Want to get a discount code? Refer friends and earn.</p>
                </Col>
                <Col xs={24} md={12} lg={12}>
                <div className='refer sendgift' data-aos="fade-left" data-aos-duration="1000">
                        <Button className='mainbtn'><MdArrowOutward /> SEND a GIFT CARD</Button>
                    </div>
                    <p>Satisfied with our service? Send a gift card to someone you love.</p>
                </Col>
            </Row>
        </Col>
    </Row>
  )
}

export default SendGift