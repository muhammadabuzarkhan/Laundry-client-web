import React, { useEffect } from 'react'
import InnerBanner from '../../components/innerBanner';
import { Col, Row,  List, Button, Image} from "antd";
import { useNavigate } from "react-router";
import HappinessArea from "../../components/happiness";
import Testimonials from "../../components/testimonials";
import { ImageUrl } from "../../config/helper";
import AOS from 'aos';
import 'aos/dist/aos.css';
import AboutPageContent from '../../components/aboutPageContent';

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const data = [
    "Over 9 Years of Experience – A trusted name in the Cardiff area for nearly a  decade.",
    "Wide Coverage – Serving most of Cardiff, offering collection and delivery to make  your life easier.",
    "Diverse Clientele – Working with residents, students, local businesses, hotels, Airbnb hosts, and sports centres.",
    "Flexible Laundry Options – From coin-operated machines to subscription-based service washes.",
    "Convenient Hours – Open Monday to Saturday from 9am to 6pm to fit into your busy schedule.",
    "Quality Care – We take pride in providing top-notch laundry services, including  washing, drying, and folding."
  ];
  // const data2 = [
  //   "1. Where it says “What’s included” move it down a little bit so for all of them its in the same place",
  //   "2. For “Self Wash?” section change the button to “See Prices” and make the text “Come down and use our coin - operated machines at your convenice . No Booking required just walkin” make it smaller and move it down too",
  //   "3. Add a new section under them to say: Looking for a Subscription Laundry Service? Make laundry even easier with our flexible subscription plans! Whether you have a small load or multiple bags each month, we have a plan that fits your needs. Enjoy the convenience of regular, hassle-free service washes, including washing, drying, and folding.",
  // ];
  return (
    <div>
        <InnerBanner heading={"ABOUT US"} para={"All your domestic or commercial laundry needs in one place"} />
        <AboutPageContent />
      <div className='laundry-bg no-bg'>
      <Row justify={'center'}>
        <Col  xs={22} md={22} lg={20}>
          <Row  gutter={40} align={"middle"}>
          <Col xs={24} md={12} lg={12}>
                <h5 data-aos="fade-left" data-aos-duration="1000">
                  Why Choose Us?
                </h5>

                <List
                  size="large"
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                  data-aos="fade-right" data-aos-duration="1600"
                />
                
                <p data-aos="fade-left" data-aos-duration="1600">
                <strong>If you have any questions or need assistance, feel free to get in touch we’re happy to 
help with all your laundry needs!</strong>

                </p>
                <Button className="mainbtn mb-25" onClick={() => navigate("/contactus")}>Contact Us</Button>
                </Col>
                <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("we-make-clothes.png")}
                  alt="reviving your clothes"
                  data-aos="fade-left" data-aos-duration="1000"
                />
                </Col>
          </Row>
        </Col>
      

                
            </Row>
      </div>
        
            <Testimonials/>
            <Row justify={'center'}>
                <Col xs={22}> <hr/></Col>
            </Row>
           
    </div>
  )
}

export default About