import React, { useState , useEffect } from "react";
import InnerBanner from "../../components/innerBanner";
import { useNavigate } from "react-router";
import ServicesCard from "../../components/servicesCard";
import {  getallServices } from '../../redux/thunk/serviceSlice'
import { useDispatch , useSelector } from 'react-redux'
import { Button, Col, Row } from "antd";


const Services = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const servicesCard = useSelector((state) => state?.cart?.serviceItems?.allcategory )

console.log("message435" , servicesCard)

  const FetchServices =  () => {
      dispatch(getallServices())
  }

  useEffect(() => {
    FetchServices()
  },[])

  // const [servicesCard, SetServicesCard] = useState([
  //   {
  //     key: 1,
  //     image: "inner-service-icon-1.png",
  //     title: "Self Service",
  //     des: "Self service is available to use with our easy to use coin operated machines.",
  //     para: "Price Per Weight / 8 KG In Laundry",
  //     price: "£ 20.98",
  //     link: "heap Bag",
  //     subHeading: "What's Included",
  //     list: ["Wash", "TUMBLE - DRY"],
  //   },
  //   {
  //     key: 2,
  //     image: "inner-service-icon-2.png",
  //     title: "Self Service",
  //     des: "Self service is available to use with our easy to use coin operated machines.",
  //     para: "Price Per Weight / 8 KG In Laundry",
  //     price: "£ 20.98",
  //     link: "See Price List",
  //     subHeading: "What's Included",
  //     list: ["Wash", "TUMBLE - DRY", "IRONING", "24 HR SERVICE TIMING"],
  //   },
  //   {
  //     key: 3,
  //     image: "inner-service-icon-3.png",
  //     title: "Self Service",
  //     des: "Self service is available to use with our easy to use coin operated machines.",
  //     para: "Price Per Weight / 8 KG In Laundry",
  //     price: "£ 20.98",
  //     link: "See Price List",
  //     subHeading: "What's Included",
  //     list: ["Wash", "TUMBLE - DRY", "IRONING", "24 HR SERVICE TIMING"],
  //   },
  //   {
  //     key: 4,
  //     image: "inner-service-icon-4.png",
  //     title: "Self Service",
  //     des: "Self service is available to use with our easy to use coin operated machines.",
  //     para: "Price Per Weight / 8 KG In Laundry",
  //     price: "£ 20.98",
  //     link: "See Price List",
  //     subHeading: "What's Included",
  //     list: ["Wash", "TUMBLE - DRY", "IRONING", "24 HR SERVICE TIMING"],
  //   },
  //   {
  //       key: 5,
  //       image: "inner-service-icon-5.png",
  //       title: "Self Service",
  //       des: "Self service is available to use with our easy to use coin operated machines.",
  //       para: "Price Per Weight / 8 KG In Laundry",
  //       price: "£ 20.98",
  //       link: "See Price List",
  //       subHeading: "What's Included",
  //       list: ["Wash", "TUMBLE - DRY", "IRONING", "24 HR SERVICE TIMING"],
  //     },
  //     {
  //       key: 6,
  //       image: "inner-service-icon-6.png",
  //       title: "Self Service",
  //       des: "Self service is available to use with our easy to use coin operated machines.",
  //       para: "Price Per Weight / 8 KG In Laundry",
  //       price: "£ 20.98",
  //       link: "See Price List",
  //       subHeading: "What's Included",
  //       list: ["Wash", "TUMBLE - DRY", "IRONING", "24 HR SERVICE TIMING"],
  //     },
  // ]);

  

  return (
    <div>
      <InnerBanner
        heading={"Services And Prices"}
        para={
          "The range of services we offer can be tailor-made to suit the requirements of our diverse range of customers."
        }
      />

      <Row justify={"center"}>
        <Col xs={22} md={22} lg={19}>
          <Row justify={"center"} gutter={40}>
            
                
              {servicesCard && servicesCard?.length > 0 ?
                servicesCard?.map((item, index) => {
                  return <Col key={index} xs={22} md={12} lg={8}><ServicesCard item={item} /> </Col>;
                })
                :
                (
                  <div>
                    No Service Found
                  </div>
                )
                }
            
          </Row>
        </Col>
      </Row>

      <div className='laundry-bg no-bg'>
      <Row justify={'center'}>
                 <Col xs={22}>
               
                
                <h5>
                Looking for a Subscription Laundry Service?

                </h5>
                <p>Make laundry even easier with our flexible subscription plans! Whether you have 
a small load or multiple bags each month, we have a plan that fits your needs. 
Enjoy the convenience of regular, hassle-free service washes, including washing, 
drying, and folding</p>
<p>Click the button below to learn more about our subscription options and sign up 
today!</p>
                <Button className="mainbtn" onClick={() => navigate("/subscriptionPlan")}>Explore Subscription Plans</Button>
                </Col>
            </Row>
      </div>

      <Row justify={"center"}>
        <Col xs={22}>
          {" "}
          <hr />
        </Col>
      </Row>
    </div>
  );
}

export default Services;
