import React, { useEffect } from 'react';
import { Row, Col, List, Button, Typography, Collapse } from 'antd';
import { useNavigate } from "react-router";
import InnerBanner from '../../components/innerBanner';

import AOS from 'aos';
import 'aos/dist/aos.css';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

function FAQ() {
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const faqData = [
    {
      question: 'What services do you offer at Cardiff Perfections Launderette?',
      answer: 'We offer a range of services including self-service coin-operated machines, service washes (washing, drying, and folding), dry cleaning, alterations, and a subscription plan for regular laundry collection and delivery.'
    },
    {
      question: 'Do you offer collection and delivery services?',
      answer: 'Yes, we offer collection and delivery services across most of Cardiff. Simply place an order on our website, and we\'ll take care of the rest.'
    },
    {
      question: 'How does the subscription plan work?',
      answer: 'Our subscription plan allows you to have your laundry picked up and delivered on a regular basis. You can choose from four plans based on the number of bags you need, with a minimum commitment of two months.'
    },
    {
      question: 'What are the operating hours of Cardiff Perfections Launderette?',
      answer: 'We are open Monday to Saturday, from 9:00 AM to 6:00 PM. We are closed on Sundays.'
    },
    {
      question: 'Can I pay using a card at the launderette?',
      answer: 'Yes, we accept both card payments and cash for our services.'
    },
    {
      question: 'Do I need to bring my own detergent and fabric softener?',
      answer: 'You can provide your own detergent and fabric softener, or we can provide them at the shop.'
    },
    {
      question: 'What happens if my clothes get damaged during the wash?',
      answer: 'Please ensure your clothes are machine washable. If damage occurs because you did not inform us about any special care instructions, we are not liable for any damage.'
    },
    {
      question: 'Do you provide washing for delicate or specialty items?',
      answer: 'Yes, we can accommodate delicate and specialty items, but please inform us beforehand so we can handle them with extra care.'
    },
    {
      question: 'Is there a weight limit for the service wash?',
      answer: 'Prices for service washes are based on the type of service wash.'
    },
    {
      question: 'Can I drop off my laundry without an appointment?',
      answer: 'Yes, you are welcome to drop off your laundry at the launderette without an appointment during our opening hours. For collection and delivery services, booking through our website is recommended.'
    },
    {
      question: 'Do you offer a commercial laundry service?',
      answer: 'Yes, we work closely with local businesses, hotels, Airbnb, sports clubs, Cardiff University, and Cardiff Council. No matter the size, we can handle it all.'
    },
    {
      question: 'Is it worth my time to pay less and do the laundry myself?',
      answer: 'Most people are looking to save time on their chores. Your time is valuable – why waste it doing laundry? Leave it to the professionals at Cardiff Perfections Launderette.'
    }
  ];

  return (
    <>
            <InnerBanner heading={"Frequently Ask Questions"} para={"We are Available 24/7 to clear your Queries"} />
    
   
    <div className="faq-section">
      <Row justify="center">
        <Col xs={22} md={20} lg={18}>
          <Title level={2} data-aos="fade-up" data-aos-duration="1000">Frequently Asked Questions</Title>
          
          <Collapse defaultActiveKey={['1']} accordion data-aos="fade-up" data-aos-duration="1200">
            {faqData.map((item, index) => (
              <Panel header={item.question} key={index + 1}>
                <Paragraph>{item.answer}</Paragraph>
              </Panel>
            ))}
          </Collapse>
          
          <div className="contact-us">
            <Paragraph data-aos="fade-up" data-aos-duration="1600">
              <strong>If you have any other questions or need further assistance, feel free to reach out to us!</strong>
            </Paragraph>
            <Button className="mainbtn" onClick={() => navigate("/contactus")}>Contact Us</Button>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default FAQ;
