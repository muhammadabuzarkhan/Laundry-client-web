import React, { useEffect } from "react";
import { Col, Row, Button, Image, TimePicker } from "antd";
import { ImageUrl } from "../../config/helper";
import { AiFillThunderbolt } from "react-icons/ai";
import { IoMoon } from "react-icons/io5";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
// import WOW from "wowjs";

function Banner() {
  // const wow = new WOW.WOW();
  // wow.init();
  const navigate = useNavigate();
  const userToken = useSelector((state) => state?.user?.data?.token);
  return (
    <div className="banner" style={{background:"none", paddingTop:"20px"}}>
      <Row justify="center">
        <Col xs={22}>
          <Row justify="center" align={"middle"} gutter={0}>
            <Col xs={22} md={18} xl={12}>
              <h1 data-aos="fade-left" data-aos-duration="1000" style={{color:"#000"}}>
              Laundry service for your <br />
              Business
              </h1>
             <p className="my-p">We provide a responsive , discrete and reliable service tailored to your company's specfic needs</p>
             <Button className="mainbtn" onClick={() => navigate("/contactus")}>Get In Touch</Button>
            </Col>

            <Col
              xs={0}
              md={0}
              xl={12}
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              style={{ textAlign: "end" }}
            >
              <Image
                preview={false}
                src={ImageUrl("girl2.png")}
                alt="banner"
                className=""
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Banner;
