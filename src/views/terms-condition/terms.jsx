import React, { useEffect } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { useNavigate } from "react-router";
import InnerBanner from '../../components/innerBanner';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Title, Paragraph } = Typography;

function Terms() {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
                <InnerBanner heading={"Terms and Condition"} para={"You Agree with Our Terms and Condition"} />
    
    <div className="terms-section">
      <Row justify="center">
        <Col xs={22} md={20} lg={18}>
          <Title level={2} data-aos="fade-up" data-aos-duration="1000">Terms and Conditions</Title>

          <Paragraph data-aos="fade-up" data-aos-duration="1200">
            <strong>1. Introduction</strong><br />
            Welcome to Cardiff Perfections Launderette. By using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="1400">
            <strong>2. Services</strong><br />
            We offer laundry services, including self-service coin-operated machines, service washes (wash, dry, and fold), and collection & delivery services. Subscription plans are also available for regular customers.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="1600">
            <strong>3. Pricing & Payment</strong><br />
            • The minimum order for a service is £20. If your required service is less than £20, it will be charged at £20, plus additional service and delivery fees.<br />
            • Additional service and delivery fees will be clearly outlined during the order process.<br />
            • Subscription plans require a minimum commitment of two months.<br />
            • Payment must be made at the time of service or before delivery for collection orders.<br />
            • We accept cash, card payments, and online transactions.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="1800">
            <strong>4. Collection & Delivery</strong><br />
            • We provide collection and delivery services within most of Cardiff.<br />
            • Customers must be available at the scheduled time for collection and delivery. If unavailable, additional charges may apply.<br />
            • We are not responsible for delays due to unforeseen circumstances, such as traffic or extreme weather.<br />
            • Missed collections or deliveries may incur a rebooking fee.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="2000">
            <strong>5. Customer Responsibilities</strong><br />
            • Customers must ensure that no valuables, money, or non-washable items are left in pockets or bags.<br />
            • We do not accept responsibility for damage caused by items left in pockets, such as pens or tissues.<br />
            • Customers should notify us of any special washing instructions.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="2200">
            <strong>6. Garment Care & Liability</strong><br />
            • We handle garments with care but cannot be held liable for damage caused by:<br />
            &nbsp;&nbsp;&nbsp;o Defective materials or old/damaged fabrics.<br />
            &nbsp;&nbsp;&nbsp;o Shrinking or colour fading due to manufacturer defects.<br />
            &nbsp;&nbsp;&nbsp;o Items left in garments causing damage.<br />
            • All services are washed and dried separately per customer. We do not mix laundry, ensuring no items go missing.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="2400">
            <strong>7. Cancellations & Refunds</strong><br />
            • Cancellations must be made at least 3 hours before collection.<br />
            • Refunds are issued at our discretion in cases of service failure.<br />
            • If a refund is granted, it may be issued as store credit or returned via the original payment method.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="2600">
            <strong>8. Subscription Plans</strong><br />
            • Subscription plans require a minimum two-month commitment.<br />
            • If a subscription is cancelled early, no refunds will be issued for unused services.
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="2800">
            <strong>9. Health & Safety</strong><br />
            • We reserve the right to refuse to wash items that pose a health risk (e.g., heavily soiled or contaminated items).
          </Paragraph>

          <Paragraph data-aos="fade-up" data-aos-duration="3000">
            <strong>10. Changes to Terms</strong><br />
            • We may update these terms from time to time. The latest version will always be available on our website.
          </Paragraph>

          <Divider />

          <div className="contact-us">
            <Paragraph data-aos="fade-up" data-aos-duration="3200">
              <strong>If you have any questions, please contact us at help@cardifflaunderette.com. By using our services, you acknowledge that you have read and agreed to these terms.</strong>
            </Paragraph>
            <Button className="mainbtn" onClick={() => navigate("/contactus")}>Contact Us</Button>
          </div>
        </Col>
      </Row>
    </div>
    </>
  );
}

export default Terms;
