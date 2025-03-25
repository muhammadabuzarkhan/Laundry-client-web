import React, { useState, useRef, useEffect } from "react";
import { Col, Row, Button, Tabs } from "antd";
import { useNavigate } from "react-router";
import ScrollSpy from "react-scrollspy-navigation";
import { CiSquarePlus } from "react-icons/ci";
import { useSelector , useDispatch } from "react-redux";
import {  subServicesbyServiceId , productsBysubCatId } from '../../redux/thunk/serviceSlice'
import Loader from '../Loader/index'
import { addToCart } from '../../redux/slice/serviceSlice'
function ServicesAdd({keys , activeKey , modalKey}) {


  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [scrollPosition, setScrollPosition] = useState(0);
  const serviceGroupRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [spinloader ,setSpinloader] = useState(false)
  const cart = useSelector((state)=>state.cart)
  const sub_Cate = useSelector((state) => state?.cart?.subserviceItems?.selectedSubCategory )


  const { products , subserviceItems , isLoading } = useSelector((state) => state?.cart)
  console.log("products",products)

  const filterSubcategoryByCatid = () => {
    if(modalKey){
      const data = { id : modalKey }
      dispatch(subServicesbyServiceId(data))
    }

    if(activeKey){
      const data = { id : activeKey }
      dispatch(subServicesbyServiceId(data))
    }
  }

  const filterProductsBysubCat = () => {
    if(modalKey){
      const item = {id : modalKey  }
    dispatch(productsBysubCatId(item))
    }

    if(activeKey){
      const item = {id : activeKey  }
      dispatch(productsBysubCatId(item))
    }
  }

  useSelector((state) => console.log("dsa",state) )


  useEffect(() => {
    filterSubcategoryByCatid()
    filterProductsBysubCat()
  },[activeKey , modalKey])

  useEffect(() => {
    if (serviceGroupRef.current) {
      const containerWidth = serviceGroupRef.current.clientWidth;
      const contentWidth = serviceGroupRef.current.scrollWidth;
      const maxScrollValue = contentWidth - containerWidth;
      setMaxScroll(maxScrollValue);
    }
  }, []);
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 250);
    });
  },[]);

  const handleScroll = (scrollOffset) => {
    const newPosition = scrollPosition + scrollOffset;
    if (newPosition >= 0 && newPosition <= maxScroll) {
      setScrollPosition(newPosition);
    } else if (newPosition < 0) {
      setScrollPosition(0);
    } else if (newPosition > maxScroll) {
      setScrollPosition(maxScroll);
    }
  };

 const AddToCartProducts = (data) => {
  const { title , price , _id , catId , category } = data
  const payload = { 
    title : title , 
    price : price , 
    id : _id , 
    category : catId ,
    categoryData : category,
    quantity : 1 
  }
  dispatch(addToCart(payload))
 }

  if(isLoading){
    return(
     <Loader />
    )
  }


  const onChange = (key) => {
    console.log(key);
  };

  const itemsnew = [
    {
      key: '1',
      label: 'Prices',
      children: <>
     <div
        className="service-group-container"
        style={{ position: "relative", overflow: "hidden" }}
      >
        <Row>
          <Col xs={22} md={24} lg={24}>
            {/* <div>
              <h6 className="price-heading-text">Prices</h6>
            </div> */}
            <div className={`category-details ${scroll ? "sticky" : ""}`}>
              <div className="service-group-btn" ref={serviceGroupRef}>
                <div
                  className="service-group-buttons"
                  style={{
                    paddingLeft : 40,
                    transform: `translateX(-${scrollPosition}px)`,
                    display: "inline-flex",
                    gap: "7px",
                    paddingRight : 60,
                  }}
                >
                  {
                    subserviceItems?.selectedSubCategory &&
                    subserviceItems?.selectedSubCategory.length > 0 ?
                    subserviceItems?.selectedSubCategory.map((data , index) => {
                      return(
                            <ScrollSpy key={index + data._id} activeClass="nav-active">
                              <a href={`#target-${data.title}-1`} className="service-group-button">
                               { data.title}
                              </a>
                             
                            </ScrollSpy>
                      )
                    }) 
                    : 
                    (
                      <>
                      <ScrollSpy activeClass="nav-active">
                              <a href={`#target-${keys}-1`} className="service-group-button">
                                No Data Found
                              </a>
                            </ScrollSpy>
                      </>
                    )
                  }
                </div>
              </div>
              <div className="arrow-box">
                <Button
                  disabled={scrollPosition === 0}
                  onClick={() => handleScroll(-100)}
                  className="arrrow-left"
                  // style={{ borderRadius:'100%', width:'35px', height:'35px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer'  }}
                >
                  &lt;
                </Button>
                <Button
                  disabled={scrollPosition === maxScroll}
                  onClick={() => handleScroll(100)}
                  className="arrrow-right"
                  // style={{borderRadius:'100%', width:'35px', height:'35px', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer' }}
                >
                  &gt;
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <div>
      
      {
        products &&
        products?.selectedProducts?.length > 0 ?
        products?.selectedProducts?.map((data) => {
          return(
            <>
            <section className="category-product-details" id={`target-${data.subCatName}-1`}>
              {
                window.location.href.split('/').pop() === "steps" ? 
                (
                  <>
                  <div style={{ display : "flex" , justifyContent:"space-between"}}>
                          {/* <Loader /> */}
                        <div className="item-and-plus1" style={{width:"100%"}}>
                        <p style={{ textAlign: window.location.href.split('/').pop() === "steps" ? "left" : "initial" }}> {data.title} </p>
                        <div className="plus-box1">
                            <p>£{data.price} Up to {data.weight}</p>
                              {
                                data.catId  === "6659994b3c1edcdfb89618b0" ?
                                null  :
                                (
                                  <>
                                    <CiSquarePlus className="plus-btnn" onClick={() => AddToCartProducts(data)} />
                                  </>
                                )
                              }
                          </div>
                          {/* <p>{ data.description }</p> */}
                          
                         
                        </div>

                  </div>
                  </>
                 )
                 :
                 (
                  <>
                  <h2 style={{ textAlign: window.location.href.split('/').pop() === "step" ? "left" : "initial" }}> {data.title} </h2>
                  {/* <Loader /> */}
                  <div className="item-and-plus">
                    {/* <p>{ data.description }</p> */}
                    <p>{  }</p>
                    <div className="plus-box">
                      <p>£{data.price} Up to {data.weight}</p>
                        {
                          data.catId  === "6659994b3c1edcdfb89618b0" ?
                          null  :
                          (
                            <>
                              <CiSquarePlus className="plus-btnn" onClick={() => AddToCartProducts(data)} />
                            </>
                          )
                        }
                    </div>
                  </div>
                  </>
                 )
              }
                   

                  
              </section>
            </>
          )
        })
        : 
        (
          <div className="no-founds">
          <ScrollSpy activeClass="nav-active">
                  <a href={`#target-${keys}-1`} className="service-group-button">
                    No Data Found
                  </a>
                </ScrollSpy>
          </div>
        )
      }
      </div>
      </>,
    },
    {
      key: '2',
      label: 'About Service',
      children: 'Content of Tab Pane 2',
    },
  ];

  return (
    <div>
      <Tabs  className="custom-tabs abb" defaultActiveKey="1" items={itemsnew} onChange={onChange} />
    </div>
  );
}

export default ServicesAdd;
