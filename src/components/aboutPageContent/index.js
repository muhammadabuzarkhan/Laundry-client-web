import React from "react";
import { Col, Row, Image } from "antd";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";

function AboutPageContent() {
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
                
                <p data-aos="fade-left" data-aos-duration="1400">
                <strong>Cardiff Perfections Launderette</strong> has proudly served the Cardiff community for 
over 9 years, providing professional and reliable laundry services to residents, 
students, businesses, and more. Our commitment to quality and convenience 
has made us a trusted name in the area. Whether you’re looking for self-service 
options, convenient collection and delivery, or subscription-based service 
washes, we’ve got you covered.
                </p>
                <p data-aos="fade-left" data-aos-duration="1600">
                At Cardiff Perfections Launderette, we understand that life can be hectic, which 
is why we aim to offer a seamless and efficient laundry experience. From local 
businesses to students, and from Airbnb hosts to sports centres, we tailor our 
services to meet the unique needs of every customer. Your laundry is always in 
safe hands with us.

                </p>

               
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default AboutPageContent