import React from 'react'
import { Col, Row, Image,} from "antd";
import { ImageUrl } from "../../config/helper";

function SupportBar() {
  return (
    <div className='supportbar'>
        <Row justify={'center'}>
            <Col xs={22}>
                <div className='supportBarInner'>
                    <ul>
                        <li  data-aos="fade-up" data-aos-duration="1000">
                        <Image  preview={false}  src={ImageUrl("best-price.png")} alt="banner" />
                        <h3>Best Price In Town</h3>
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1200">
                        <Image  preview={false}  src={ImageUrl("customer-protection.png")} alt="banner" />
                        <h3>Customer Protection</h3>
                        </li>
                        <li data-aos="fade-up" data-aos-duration="1400">
                        <Image  preview={false}  src={ImageUrl("free-delivery.png")} alt="banner" />
                        <h3>Free Delivery</h3>
                        </li>
                        {/* <li data-aos="fade-up" data-aos-duration="1600">
                        <Image  preview={false}  src={ImageUrl("live-support.png")} alt="banner" />
                        <h3>LIVE SUPPORT</h3>
                        </li> */}
                    </ul>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default SupportBar