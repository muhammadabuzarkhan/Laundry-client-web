import React, { useState , useEffect } from "react";
import { Col, Row, Tabs, Image, Button } from "antd";
// import { ImageUrl } from "../../config/helper";
import ServicesAdd from "../../components/servicesAdd";
import { useNavigate , useLocation } from "react-router";
import { useDispatch , useSelector } from 'react-redux'
import { getallsubServices , subServicesbyServiceId } from '../../redux/thunk/serviceSlice'
import { quantityAndPriceChanges , removeFromCart } from '../../redux/slice/serviceSlice'
import { ImCross } from "react-icons/im";

const onChange = (key) => {
  console.log(key);
};

const Cmp = () => {
  return {};
};
const tabList = {
  Washes: {
    tabs: [
      {
        name: "Small",
        content: [
          {
            heading: "Small Service Wash (Up To 7kg) ",
            subheading: "(Excl Blankets, Pillow & Duvets)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC. You can request 30 ºC for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry).",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry).",
            ],
            money: ["£14 Up to 7kg", "£28 Up to 14kg"],
          },
        ],
      },
      {
        name: "Medium",
        content: [
          {
            heading: "Medium Service Wash (Up To 12kg)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC . You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
            ],
            money: ["£20 Up to 13kg", "£40 Up to (26kg)"],
          },
        ],
      },
      {
        name: "Large",
        content: [
          {
            heading: "Large Service Wash (Up To 18kg)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC . You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
            ],
            money: ["£24 Up to 13kg", "£48 Up to 36kg"],
          },
        ],
      },
    ],
    heading: "Washes",
    paragraph: "Choose the size of your wash",
    img: "wash_image_url",
    color: "#FF5733",
  },

  "Wash & Iron": {
    tabs: [
      {
        name: "Small",
        content: [
          {
            heading: "Small Service Wash + Ironing (Up To 7kg)",
            subheading: "(Excl Blankets, Pillow & Duvets)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC . You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)(Please specify in the box how many pieces need ironing)",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
            ],
            money: [
              "£14 Up to 7kg + from £1.50 extra per piece for ironing",
              "£28 Up to 14kg + from £1.50 extra per piece for ironing",
            ],
          },
        ],
      },
      {
        name: "Medium",
        content: [
          {
            heading: "Medium Service Wash + Ironing (Up To 12kg)",
            subheading: "(Excl Blankets, Pillow & Duvets)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC . You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
            ],
            money: [
              "£20 Up to 13kg + from £1.50 extra per piece for ironing",
              "£40 Up to 26kg + from £1.50 extra per piece for ironing",
            ],
          },
        ],
      },
      {
        name: "Large",
        content: [
          {
            heading: "Large Service Wash + Ironing (Up To 18kg)",
            subheading: "(Excl Blankets, Pillow & Duvets)",
            paragraphs: [
              "Mixed Wash - Light and dark clothes washed together at around 40 ºC . You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
              "Separate Wash – We’ll separate the items for you and wash at 40 ºC. You can request 30 ºC  for cold wash or 60 ºC for hot wash (hot wash not recommended for normal laundry)",
            ],
            money: [
              "£24 Up to 18kg + from £1.50 extra per piece for ironing",
              "£48 Up to 36kg + from £1.50 extra per piece for ironing",
            ],
          },
        ],
      },
    ],
    heading: "Wash & Iron",
    paragraph: "For everyday laundry that requires ironing.",
    img: "wash_image_url",
    color: "#FF5733",
  },

  "Dry Cleaning": {
    tabs: [
      {
        name: "Suits, Shirts & Trousers",
        content: [
          {
            heading: "Suits, Shirts & Trousers",
            paragraphs: [
              "1 Piece Suit",
              "2 Piece Suit",
              "3 Piece Suit",
              "Tuxedo",
              "Asian Suit",
              "Waist Coat",
              "Track Suit",
              "Jump Suit",
              "Trousers",
              "Shirt",
              "Tie / Bow Tie",
              "Shorts",
              "Salopettes",
            ],
            money: [
              "£10",
              "£15",
              "£20",
              "£25",
              "£25",
              "£10",
              "£20",
              "£20",
              "£9",
              "£9",
              "£5",
              "£8",
              "£15",
            ],
          },
        ],
      },
      {
        name: "Dresses",
        content: [
          {
            heading: "Dresses",
            paragraphs: [
              "Standard Dress",
              "Cocktail Dress",
              "Evening Dress",
              "Skirts",
              "Pleated Skirts	",
              "Sari",
              "Wedding Dress",
              "Brides Maid",
              "Flower Girl",
            ],
            money: [
              "£15",
              "£22",
              "£27",
              "£10",
              "£15",
              "£22",
              "£95",
              "£26",
              "£18",
            ],
          },
        ],
      },
      {
        name: "Coats & Jackets",
        content: [
          {
            heading: "Coats & Jackets",
            paragraphs: [
              "Jackets",
              "Coats",
              "Long Coat",
              "¾ Coat",
              "Fur Coat",
              "Simulated Fur Coat",
              "Ski Jackets",
              "Canada Goose",
              "Moncler",
              "North Face",
              "Other Designer Coats / Jackets",
            ],
            money: [
              "£13",
              "£15",
              "£20",
              "£18",
              "£55",
              "£30",
              "£25",
              "£45",
              "£45",
              "£40",
              "£45",
            ],
          },
        ],
      },
      {
        name: "Curtains & Covers",
        content: [
          {
            heading: "Curtains & Covers",
            paragraphs: [
              "Single Sofa Cover",
              "Double Sofa Cover",
              "3 Seater Sofa Cover",
              "Small Cushion",
              "Large Cushion",
              "Tie Backs",
              "Curtains Pair W(117cm) X D(137cm)",
              "Curtains Pair W(117cm) X D(182cm)",
              "Curtains Pair W(117cm) X D(228cm)",
              "Curtains Pair W(167cm) X D(137cm)",
              "Curtains Pair W(167cm) X D(182cm)",
              "Curtains Pair W(167cm) X D(228cm)",
              "Curtains Pair W(228cm) X D(137cm)",
              "Curtains Pair W(228cm) X D(182cm)",
              "Curtains Pair W(228cm) X D(228cm)",
              "Curtains Pair (Custom Size)",
            ],
            money: [
              "£12",
              "£22",
              "£30",
              "£5",
              "£8",
              "£10",
              "£50",
              "£60",
              "£70",
              "£60",
              "£65",
              "£80",
              "£70",
              "£85",
              "£90",
              "Call for Pricing",
            ],
          },
        ],
      },
    ],
    heading: "Dry Cleaning",
    paragraph: "For delicate items and fabrics.",
    img: "wash_image_url",
    color: "#FF5733",
  },

  "Duvets": {
    tabs: [
      {
        name: "Duvets & Bulky",
        content: [
          {
            heading: "Duvets & Bulky Items Prices",
            paragraphs: [
              "Single Size Duvet (Polyester)",
              "Double Size Duvet (Polyester)",
              "Queen Size Duvet (Polyester)",
              "King Size Duvet (Polyester)",
              "Single Size Duvet (Feather)",
              "Double Size Duvet (Feather)",
              "Queen Size Duvet (Feather)",
              "King Size Duvet (Feather)",
              "Single Blanket",
              "Double Blanket",
              "King Blanket",
              "Asian Blanket",
              "Single Throw",
              "Double Throw",
              "King Throw",
              "Mattress Protector",
              "Mattress Topper (Padded)",
              "Single Sleeping Bag",
              "Double Sleeping Bag",
              "Wool Blanket",
              "Pillow (Polyester)",
              "Pillow (Feather)",
            ],
            money: [
              "£15",
              "£17",
              "£20",
              "£22",
              "£20",
              "£25",
              "£28",
              "£32",
              "£14",
              "£17",
              "£20",
              "£22",
              "£15",
              "£17",
              "£22",
              "£17",
              "£26",
              "£25",
              "£30",
              "£22",
              "£8",
              "£13",
            ],
          },
        ],
      },
    ],
    heading: "Duvets & Bulky Items",
    paragraph: "For larger items that require extra care.",
    img: "wash_image_url",
    color: "#FF5733",
  },

  "Alterations": {
    tabs: [
      {
        name: "Trousers & Jeans",
        content: [
          {
            heading: "Trousers & Jeans",
            paragraphs: [
              "Shorten Trousers / Jeans",
              "Hamming Only",
              "With Tape",
              "Turn Up",
              "With Lining",
              "Lengthen",
              "Waist Trousers",
              "Take In / Out",
              "With Lining In / Out",
              "Taper All Way Down",
              "Taper All Way Down With Lining",
              "Waist Jeans",
              "Zip Trousers / Jeans",
              "Pocket Half Each",
              "Pocket Full Each",
            ],
            money: [
              "£14",
              "£10",
              "£18",
              "£18",
              "£20",
              "£20",
              "£13",
              "£15",
              "£20",
              "£20",
              "£30",
              "£14",
              "£15",
              "£10",
              "£18",
            ],
          },
        ],
      },
      {
        name: "Shirts & T-Shirts",
        content: [
          {
            heading: "Shirts & T-Shirts",
            paragraphs: [
              "Shorten Length",
              "Take In Taper (Shirt)",
              "Take In Taper (T-Shirt)",
              "Shorten Sleeves Plain",
              "Shorten Sleeves With Cuffs",
              "Rover Collar",
            ],
            money: [
              "£15",
              "£20",
              "£18",
              "£15",
              "£25",
              "£15",
            ],
          },
        ],
      },
      {
        name: "Blazers, Jackets  Coats",
        content: [
          {
            heading: "Shorten / Lengthen",
            paragraphs: [
              "No Vent",
              "1 Vent",
              "2 Vent",
              "Sleeves No Vent (Shorten / Lengthen)",
              "Sleeves With Vent (Shorten / Lengthen)",
              "Sleeves Shorten From Shoulder",
              "Shorten Shoulder",
              "Taper In Taper ",
              "Relining",
              "Zip (Up To 10 Inches)",
              "Zip (Up To 25 Inches)",
            ],
            money: [
              "£28",
              "£30",
              "£35",
              "£25",
              "£30",
              "£60",
              "£60",
              "£50",
              "£90",
              "£26",
              "£36",
            ],
          },
        ],
      },
      {
        name: "Dresses, Skirt & Tops",
        content: [
          {
            heading: "Shorten",
            paragraphs: [
              "Plain",
              "Small With Lining",
              "Large",
              "Large With Lining",
            ],
            money: [
              "£20",
              "£25",
              "£30",
              "£39",
            ],
          },
          {
            heading: "Take In Taper",
            paragraphs: [
              "Plain",
              "With Zip",
              "With Lining",
              "With Lining And Zip",
              "Strap Shorten Plain",
              "Strap Shorten With Lining",
              "Zip",
            ],
            money: [
              "£18",
              "£25",
              "£28",
              "£30",
              "£12",
              "£18",
              "£18",
            ],
          },
        ],
      },
      {
        name: "Leather Jackets, Leather Trousers",
        content: [
          {
            heading: "Leather Jackets, Leather Trousers",
            paragraphs: [
              "Shorten Leather Trousers",
              "Waist In / Out Leather Trousers",
              "Shorten Length",
              "Sleeves",
              "Take In Taper",
              "Relining",
              "Zip",
            ],
            money: [
              "£30",
              "£30",
              "£40",
              "£32",
              "£39",
              "£100",
              "£40",
            ],
          },
        ],
      },
      {
        name: "Special Dresses",
        content: [
          {
            heading: "Special Dresses",
            paragraphs: [
              "Dresses ",
              "Wedding / Prom",
            ],
            money: [
              "Call for Pricing",
              "Call for Pricing",
            ],
          },
        ],
      },
      {
        name: "Curtain",
        content: [
          {
            heading: "Curtain",
            paragraphs: [
              "Plain (Per Meter) Please specify the number of meters required and add the appropriate quantity to the basket. £10 per meter",
              "With Lining (Per Meter) Please specify the number of meters required and add the appropriate quantity to the basket. £12 per meter.",
            ],
            money: [
              "£10",
              "£12",
            ],
          },
        ],
      },
    ],
    heading: "Alterations",
    paragraph: "To ensure accurate alterations, please specify the required modification (e.g., shorten by 3 inches) and mark the item where the change is needed. We recommend bringing alteration requirement to the shop and discussing your specific needs with our tailor.",
    img: "wash_image_url",
    color: "#FF5733",
  },

  
  "Self Wash": {
    tabs: [
      {
        name: "Self Wash ",
        content: [
          {
            heading: "Trousers & Jeans",
            paragraphs: [
              "Small Machine Wash (Small)",
              "Small Machine Wash (Medium)",
              "Small Machine Wash (Large)",
              "Drying (7mins)",
              "Detergent",
              "Service (Our Staff Fold Your Laundry)",
            ],
            money: [
              "£6 (Up to 7kg)",
              "£8 (Up to 13kg)",
              "£10 (Up to 18kg)",
              "£1",
              "£1",
              "From £2 ",
            ],
          },
        ],
      },
    ],
    heading: "Self Wash",
    paragraph: "Come down and use our coin-operated machines at your convenience.",
    img: "wash_image_url",
    color: "#FF5733",
  },
};

 

function Pricelist() {
  const ImageUrl = "https://react.customdev.solutions:3021"
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch()
  const cate = useSelector((state) => state?.cart?.serviceItems?.allcategory)
  const subCat = useSelector((state) => state?.cart?.subserviceItems?.allSubCat)
  const [activeKey, setActiveKey] = useState("");
  const addTocarts = useSelector((state) => state?.cart?.cartItems)
  const userEmpty = useSelector((state) => state?.user?.data)
  const { state  , pathname} = location
   console.log("subCat===123====>" , state);

  const increaseCount = (data) => {
    const item = {
      count : count,
      details : data
    }
    dispatch(quantityAndPriceChanges(item))
    
    
  };

  const decreaseCount = (data) => {
      const item = {
        decount : count,
        details : data
      }
      setCount(count)
      dispatch(quantityAndPriceChanges(item))
    
  };

  const RemoveItemFromCart = (data) => {
    dispatch(removeFromCart(data))
    
  }

  const onChange = (key) => {
   
    return(
      <>
        <ServicesAdd id={key} />
      </>
    )
  };

  console.log("=======>",activeKey);

  const filterSubcategoryByCatid = (category) => {
    const data = { id : category._id }
    dispatch(subServicesbyServiceId(data))
  }

  // useEffect(() => {
  //   dispatch(getallsubServices())
  // },[])

  // const items = [
  //   {
  //     key: "1",
  //     label: (
  //       <>
  //         <span className="tab-label">
  //           <Image
  //             preview={false}
  //             //src={ImageUrl("wash_small.png")}
  //             alt="wash image"
  //             className="wash_small"
  //           />
  //           Washes
  //         </span>
  //       </>
  //     ),
  //     children: (
  //       <>
  //         <div className="wash-banner">
  //           <div>
  //             <h4>Washrrrrrrrr</h4>
  //             <p>For everyday laundry, bedsheets and towels</p>
  //           </div>
  //           <Image
  //             preview={false}
  //            // src={ImageUrl("wash-img.png")}
  //             alt="paymentcards"
  //             className="wash-img"
  //           />
  //         </div>
  //         <ServicesAdd keys="wash" />
  //       </>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: (
  //       <>
  //         <span className="tab-label">
  //           <Image
  //             preview={false}
  //            // src={ImageUrl("wash_and_iron_small.png")}
  //             alt="wash image"
  //             className="wash_small"
  //           />
  //           Wash & Iron
  //         </span>
  //       </>
  //     ),
  //     children: (
  //       <>
  //         <div className="wash-banner banr-pink">
  //           <div>
  //             <h4>Wash & Iron</h4>
  //             <p>For everyday laundry that requires ironing.</p>
  //           </div>
  //           <Image
  //             preview={false}
  //            // src={ImageUrl("wash_and_iron_small.png")}
  //             alt="paymentcards"
  //             className="wash-img"
  //           />
  //         </div>
  //         <ServicesAdd keys="washiron" />
  //       </>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: (
  //       <>
  //         <span className="tab-label">
  //           <Image
  //             preview={false}
  //             //src={ImageUrl("dry_cleaning_small.png")}
  //             alt="wash image"
  //             className="wash_small"
  //           />
  //           Dry Cleaning
  //         </span>
  //       </>
  //     ),
  //     children: (
  //       <>
  //         <div className="wash-banner banr-green">
  //           <div>
  //             <h4>Dry Cleaning</h4>
  //             <p>For delicate items and fabrics.</p>
  //           </div>
  //           <Image
  //             preview={false}
  //            // src={ImageUrl("dry_cleaning_small.png")}
  //             alt="paymentcards"
  //             className="wash-img"
  //           />
  //         </div>
  //         <ServicesAdd keys="dry" />
  //       </>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     label: (
  //       <>
  //         <span className="tab-label">
  //           <Image
  //             preview={false}
  //             //src={ImageUrl("ironing_small.png")}
  //             alt="wash image"
  //             className="wash_small"
  //           />
  //           Ironing
  //         </span>
  //       </>
  //     ),
  //     children: (
  //       <>
  //         <div className="wash-banner banr-yellow">
  //           <div>
  //             <h4>Ironing</h4>
  //             <p>For items that are already clean.</p>
  //           </div>
  //           <Image
  //             preview={false}
  //             //src={ImageUrl("ironing_small.png")}
  //             alt="paymentcards"
  //             className="wash-img"
  //           />
  //         </div>
  //         <ServicesAdd keys="ironing" />
  //       </>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     label: (
  //       <>
  //         <span className="tab-label">
  //           <Image
  //             preview={false}
  //             //src={ImageUrl("duvets_bulky_items_small.png")}
  //             alt="wash image"
  //             className="wash_small"
  //           />
  //           Duvets & Bulky Items
  //         </span>
  //       </>
  //     ),
  //     children: (
  //       <>
  //         <div className="wash-banner">
  //           <div>
  //             <h4>Duvets & Bulky Items</h4>
  //             <p>For larger items that require extra care.</p>
  //           </div>
  //           <Image
  //             preview={false}
  //            // src={ImageUrl("duvets_bulky_items_small.png")}
  //             alt="paymentcards"
  //             className="wash-img"
  //           />
  //         </div>
  //         <ServicesAdd keys="duvets" />
  //       </>
  //     ),
  //   },
  // ];
  

  useEffect(() => {
    setActiveKey(cate[0]?._id)

  },[])


  const items = cate?.map((category , index , arr) => {
    return {
      key: index + category._id, // Assuming `category.id` is unique
      label: (
        <>
          <span className="tab-label" onClick={() => setActiveKey(category._id) } >
            <Image
              preview={false}
              src={ImageUrl+"/"+category.catImage} // Assuming `category.imageUrl` is the image source
              alt={`${category.name} image`} // Assuming `category.name` is the name
              className="wash_small"
            />
            {category.title}
          </span>
        </>
      ),
      children: (
        <>
          <div key={category._id} className={`wash-banner`}> 
            <div>
              <h4>{category.title}</h4> 
              <p>{category.description}</p> 
            </div>
            <Image
              preview={false}
              src={ImageUrl+"/"+category.catImage} 
              alt="paymentcards"
              className="wash-img"
            />
          </div>
          <ServicesAdd keys={category._id} activeKey={activeKey} /> 
        </>
      ),
    };
  });
  
  return (
    <div className="auth-banner">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xl={21} lg={21} md={23} sm={23} xs={23}>
          <Row
            gutter={[16, 16]}
            style={{ width: "100%", justifyContent: "space-between" }}
            className="for-gutter-0"
          >
            <Col lg={17}>
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                className="pricing-tabs"
              />
            </Col>
            <Col lg={7}>
              <div className="procelist-right-box">
                <h5 className="services-add-text">{addTocarts.length > 0 ? addTocarts.length :  "No" } services selected </h5>
                <div className="do-i-need">
                  <p>Do I need to list every item?</p>
                  <span>Learn more</span>
                </div>
                <div>
                {
                  addTocarts &&
                  addTocarts.length > 0 ?
                  addTocarts.map((data) => (
                  <div className="right-box-content">
                    <p>{ data.title }</p>
                    <div className="plus-box">
                      <div>
                        <div className="counter">
                          <span className="down" onClick={() => 
                            data.quantity > 0 ?  decreaseCount(data) : null
                            }>
                            -
                          </span>
                          <input type="text" value={data.quantity} readOnly />
                          <span className="up" onClick={() => increaseCount(data)}>
                            +
                          </span>
                        </div>
                      </div>
                      <p>£{data.subprice || data.price}</p>
                    </div>
                    <ImCross onClick={() => RemoveItemFromCart(data)} />
                  </div>
                  ))
                  :
                  null
                }
                  
                  <div className="yellow-box">
                    <p>Add items to start estimation</p>
                  </div>
                  <div>
                  {
                    addTocarts.length ?
                    (
                      <>
                      <Button
                      className="blue-card-btn"
                      onClick={() => 
                        !userEmpty ?  
                        navigate("/login") : 
                        userEmpty.token ? navigate("/steps") :
                        navigate("/login")
                        }
                    >
                      Schedule an order
                    </Button>
                      </>
                    )
                    :
                    null
                  }
                   
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Pricelist;
