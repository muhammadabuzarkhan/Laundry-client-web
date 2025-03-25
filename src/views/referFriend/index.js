import React from 'react'
import InnerBanner from "../../components/innerBanner";
import ClientCollapse from "../../components/clientCollapse";
import VoucherArea from '../../components/voucherArea';
import BannerBottom from '../../components/BannerBottom';
import { Col, Row, } from "antd";

function ReferFriend() {
  return (
    <div className='referbanner'>
        <InnerBanner 
        heading={"Refer Friends"}
        para={
          "And you both get £15 off!"
        }
      />
      <BannerBottom/>
      <VoucherArea/>
      <Row justify={"center"}>
        <Col xs={22}>
          
          <hr />
        </Col>
      </Row>
      <ClientCollapse/>
      
    </div>
  )
}

export default ReferFriend