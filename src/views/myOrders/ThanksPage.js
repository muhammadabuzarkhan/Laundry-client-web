import React from 'react'
import { Col, Row , Image, Button} from 'antd';
import { useLocation , useNavigate } from "react-router";
import { ImageUrl } from "../../config/helper";
import { useSelector } from 'react-redux'

const ThanksPage = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { token } =  useSelector((state) => state?.user?.data)
    const { state } = location;
    console.log("ggg" , state);
    
  return (
    <div>
        <Row justify={"center"}>
            <Col lg={18}>
            <div className='thanku-box'>
            <Image
              className="logo"
              preview={false}
              src={ImageUrl("logo.png")}
              alt="logo"
            />
            <h4>Thank you for your purchase</h4>
            <h6>order number  {"#" + " " + state?.OrderDetails?.orderNumber}</h6>
            {
                token && (
                    <>
                        <Button 
                        className="mainbtn" 
                        onClick={() => navigate('/myOrders/' + state?.OrderDetails?._id)}
                        >
                        track your order here
                        </Button>
                    </>
                )
            }
            <Button className="mainbtn"  onClick={() => navigate('/')}>home</Button>
            </div>
            </Col>
        </Row>
    </div>
  )
}

export default ThanksPage
