import React, { useEffect } from 'react'
import CommercialBanner from "../../components/commercialBanner";
import DiscountBlue2 from "../../components/blueDiscount2";
import SupportBar from "../../components/supportBar";
import WeOffer from "../../components/offer";
import HappinessArea from "../../components/happiness";
import RedBgGirl from "../../components/redBgGirl";
import Testimonials from "../../components/testimonials";
import ClientCollapse from "../../components/clientCollapse";
import SendGift from "../../components/sendGifts";
import NewsLetterArea from "../../components/newsletterarea";
import { Col, Row, Image, List, Avatar } from "antd";
import { ImageUrl } from "../../config/helper";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const data = [
    "We offer professional laundry services tailored to local businesses.",
    "Whether it's uniforms, linens, or other essential items, we ensure", 
    "everything is thoroughly cleaned and ready for use,",
    "helping your business maintain a polished, professional image."
  ];

  const data1 = [
    "We provide reliable laundry services for educational institutions," ,
    "ensuring all garments are thoroughly cleaned. ",
    "Our 60-degree wash option effectively removes dirt and ensures the highest level of hygiene for your uniforms and linens."
  ];
  const data2 = [
    {
      title: "Get your laundry back in 24h",
    },
    {
      title: "Schedule a collection today",
    },
  ];
  return (
    <div style={{overflow:"auto"}}>
      <CommercialBanner />
      <DiscountBlue2 />
      <SupportBar />
      <div className="laundry-bg commercial-main">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40} align={"middle"}>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("we-make-clothes2.png")}
                  alt="we make clothes"
                  data-aos="fade-left" data-aos-duration="1200"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Exceeding Your Laundry Expectations</h5>
                <h4 data-aos="fade-right" data-aos-duration="1200">Laundry solution for local businesses</h4>
                {/* <p data-aos="fade-right" data-aos-duration="1500">
                Your Clothes Deserve the Best Care
                </p> */}
                <List
                  size="large"
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                  data-aos="fade-right" data-aos-duration="1600"
                />
              </Col>
              <Col xs={24}>
                <hr />
              </Col>

              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Clean clothes at your doorstep!</h5>
                <h4  data-aos="fade-right" data-aos-duration="1000">Laundry for Hotels, AirBnB, Guest Homes and Care Homes</h4>
                <p  data-aos="fade-right" data-aos-duration="1000">
                Our on-demand laundry service ensures your hotels, AirBnBs, guest 
                homes and care homes have fresh, clean linens exactly when you need 
                them. We service wash your items, allowing you to focus on delivering the
                best experience to your guests.
                </p>
                {/* <List
                 data-aos="fade-right" data-aos-duration="1000"
                  itemLayout="horizontal"
                  dataSource={data2}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                          />
                        }
                        title={item.title}
                      />
                    </List.Item>
                  )}
                /> */}
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("airbnb2.png")}
                  alt="reviving your clothes"
                  data-aos="fade-left" data-aos-duration="1000"
                />
              </Col>

              <Col xs={24}>
                <hr />
              </Col>

              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("lab.png")}
                  alt="we make clothes"
                  data-aos="fade-left" data-aos-duration="1200"
                />
              </Col>
              
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Exceeding Your Laundry Expectations</h5>
                <h4 data-aos="fade-right" data-aos-duration="1200">Laundry for educational institutions</h4>
                {/* <p data-aos="fade-right" data-aos-duration="1500">
                Your Clothes Deserve the Best Care
                </p> */}
                <List
                  size="large"
                  dataSource={data1}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                  data-aos="fade-right" data-aos-duration="1600"
                />
              </Col>
              <Col xs={24}>
                <hr />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Clean clothes at your doorstep!</h5>
                <h4  data-aos="fade-right" data-aos-duration="1000">Laundry for your sports teams</h4>
                <p  data-aos="fade-right" data-aos-duration="1000">
                We provide dedicated laundry services for sports teams, ensuring 
                uniforms and gear are thoroughly cleaned and ready for the next game. 
                Our service keeps your team’s attire fresh, hygienic, and in top condition, 
                so you can focus on performance.
                </p>
                
                {/* <List
                 data-aos="fade-right" data-aos-duration="1000"
                  itemLayout="horizontal"
                  dataSource={data2}
                  renderItem={(item, index) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar
                            src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                          />
                        }
                        title={item.title}
                      />
                    </List.Item>
                  )}
                /> */}
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("football.jpg")}
                  alt="reviving your clothes"
                  data-aos="fade-left" data-aos-duration="1000"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      
      {/* <WeOffer/> */}
      {/* <HappinessArea /> */}
      <RedBgGirl />
      {/* <Testimonials/> */}
      {/* <ClientCollapse/> */}
      {/* <SendGift /> */}
     <NewsLetterArea/>
    </div>
  );
}

export default Home;
