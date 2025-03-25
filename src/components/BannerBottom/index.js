import React from 'react'
import { Col, Row, } from "antd";

function BannerBottom() {
  return (
    <div className='bannerBottom'>
        <Row justify={'center'}>
            <Col xs={22}>
                <Row justify={'center'}>
                <Col>
                        <h4>
                            
                            15
                            <span>Referred friends</span>
                        </h4>
                    </Col>
                    <Col>
                        <h4>
                            <small>£</small>
                            12
                            <span>Your Savings</span>
                        </h4>
                    </Col>
                    <Col>
                        <h4>
                            20
                            <span>Available discount</span>
                        </h4>
                    </Col>
                </Row>
            </Col>
        </Row>
    </div>
  )
}

export default BannerBottom