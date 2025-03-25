import React from 'react'
import { Col, Row, Image, Collapse , Button } from "antd";
import { ImageUrl } from "../../config/helper";
import { axios } from 'axios';
import { useNavigate } from "react-router";

function ClientCollapse() {
  const navigate = useNavigate();
    const text = (
        <p
          style={{
            paddingLeft: 24,
          }}
        >
          Pick-up and delivery of clothes are free of cost, but there is a 
          minimum delivery of $20 for each order.We offer our customers a
          range of services , like the same day service washes , dry cleaning , ironing,
          repairs and alterations . Our quality assurance team takes care of regular 
          visual inspections to maintain standard quality for each
          item of your clothing
        </p>
      );
      const text1 = (
        <p
          style={{
            paddingLeft: 24,
          }}
        >
          Yes we work closely with local businesses , hotel, AirBnb sports
          club , Cardiff University, Cardiff Council . No matter the size 
          we can do them all . Cardiff Perfections Launderette offers the best 
          commerical laundry service in Cardiff.
        </p>
      );
      const text2 = (
        <p
          style={{
            paddingLeft: 24,
          }}
        >
          Most people are looking to save time on their chores, 
          Your time is valuable why waste it doing laundry ?
          Leave it to the Professional at Cardiff Perfections
          Launderette
        </p>
      );
      const items = [
        {
          key: '1',
          label: 'Is there a pick-up and drop off facility?',
          children: text,
        },
        {
          key: '2',
          label: 'Do you offer a commerical laundry service?',
          children: text1,
        },
        {
          key: '3',
          label: 'Is it worth my time to pay less and do the laundry myself ?',
          children: text2,
        },
      ];
  return (
    
    <>
    <div className="laundry-bg no-bg pb-40">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40}>
              
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Luxurious Laundry Services Tailored to You!</h5>
                <h4 data-aos="fade-right" data-aos-duration="1200">What our clients should know</h4>

                <Collapse items={items} bordered={false} defaultActiveKey={['1']}data-aos="fade-up" data-aos-duration="1200" />
               
                
              </Col>

              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("our-client.png")}
                  alt="Luxurious Laundry Services Tailored to You!"
                  data-aos="fade-left" data-aos-duration="1200"
                />
                <div style={{ paddingTop : 15 , display: "flex"}}>
                  <p>Can't find your answer ?</p>
                  <div style={{ paddingLeft: "270px"}}>
                    <Button onClick={() =>navigate('/contactus')} shape={'round'}> Contact Us </Button>  
                  </div>
                </div>


              </Col>
              
            </Row>

            <hr/>
          </Col>
        </Row>
      </div>
   </>
  )
}

export default ClientCollapse