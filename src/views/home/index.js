import React, { useEffect } from 'react'
import Banner from "../../components/banner";
import DiscountBlue from "../../components/blueDiscount";
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
    "Gentle care for your delicate and cherished items.",
    "Quickly and reliable service to meet your needs.",
    "Enviornmentally friendly cleaning solutions.",
    "Mending and repair services for garments.",
    "Precise measurement of detergent for optimal cleaning.",
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
      <Banner />
      <DiscountBlue />
      <div className="laundry-bg">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40} align={"middle"}>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("we-make-clothes.png")}
                  alt="we make clothes"
                  data-aos="fade-left" data-aos-duration="1200"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-right" data-aos-duration="1000">Exceeding Your Laundry Expectations</h5>
                <h4 data-aos="fade-right" data-aos-duration="1200">We make clothes look great for you!</h4>
                <p data-aos="fade-right" data-aos-duration="1500">
                Your Clothes Deserve the Best Care
                </p>
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
                <h4  data-aos="fade-right" data-aos-duration="1000">Reviving your clothes, one wash at a time</h4>
                <p  data-aos="fade-right" data-aos-duration="1000">
                  Experience the ultimate care for your garments. 
                  Our advanced techniques and eco-friendly solutions bring your 
                  clothes back to life, 
                  ensuring they look fresh and feel amazing after every wash.
                </p>
                <List
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
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <Image
                
                  preview={false}
                  src={ImageUrl("reviving-your-clothes.png")}
                  alt="reviving your clothes"
                  data-aos="fade-left" data-aos-duration="1000"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <SupportBar />
      <WeOffer/>
      <HappinessArea />
      <RedBgGirl />
      <Testimonials/>
      <ClientCollapse/>
      <SendGift />
     <NewsLetterArea/>
    </div>
  );
}

export default Home;
