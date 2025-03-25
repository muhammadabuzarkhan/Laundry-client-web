import React from 'react'
import { Col, Row, Button, Image } from "antd";
import { FaFacebookF, FaXTwitter, FaYoutube  } from "react-icons/fa6";
import { FaInstagram,  FaWhatsapp } from "react-icons/fa";
import { ImageUrl } from "../../config/helper";
import { useNavigate } from "react-router";
import { Link } from 'react-router-dom';
function Footer() {
  const navigate = useNavigate();
  return (
    <div className='footer'>
        <Row justify='center'>
            <Col xs={22} md={20} lg={18}>
                <Row>
                  <Col xs={24} md={12} lg={9}>
                  <Image className="logo" preview={false}  src={ImageUrl("logo.png")} alt="logo" />
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam </p>
                  <Link to={"https://www.facebook.com/CardiffPerfectionsLaunderette"} target='_blanl'>
                  <FaFacebookF />
                  </Link>

                  <Link to={"https://x.com/laundrycardiff"}>
                  <FaXTwitter />

                  </Link>

                  <Link to={"https://www.instagram.com/cardifflaunderettes/#"}>
                  <FaInstagram />

                  </Link>


                    <Link to={"https://api.whatsapp.com/send/?phone=%2B442921690360&text&type=phone_number&app_absent=0"} target="_blank"
        rel="noopener noreferrer" ><FaWhatsapp /></Link>
                  </Col>
                  <Col xs={24} md={12} lg={5}>
                    <h3>Useful links</h3>
                    <ul>
                        <li onClick={() => navigate("/about")}>About</li>
                        <li onClick={() => navigate("/servicesnprices")}>Services</li>
                        <li onClick={() => navigate("/blog")}>Blog</li>
                        <li onClick={() => navigate("/faqs")} >FAQ</li>
                    </ul>
                  </Col>
                  <Col xs={24} md={12} lg={5}>
                  <h3>Main Menu</h3>
                    <ul>
                        <li onClick={() => navigate("/")}>Home</li>
                        <li onClick={() => navigate("/subscriptionPlan")}>Prices & Subscriptions</li>
                        <li onClick={() => navigate("/contactus")}>Contact Us</li>
                        <li onClick={() => navigate("/commercial")}>Commercial Static</li>
                        <li onClick={() =>navigate ("/terms")} >Terms and conditions</li>
                        
                    </ul>
                  </Col>
                  <Col xs={24} md={12} lg={5}>
                  <h3>Contact Us</h3>
                    <ul>
                        <li>example@email.com</li>
                        <li>+64 958 248 966</li>
                    </ul>
                  </Col>
                  <div className='bottom'>
                    <Row align={"middle"}>
                    <Col xs={24} md={12} lg={12}>
                        <p>&copy; Copyrights.All Rights Reserved.</p>
                      </Col>
                      <Col xs={24} md={12} lg={12} style={{textAlign:"right"}} className='foter-atm-cards'>
                      <Image  preview={false}  src={ImageUrl("paymentcards.png")} alt="paymentcards" />
                      </Col>
                    </Row>
                  </div>
                  
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default Footer