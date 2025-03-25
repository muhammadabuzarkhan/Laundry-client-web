import {
  Col,
  Row,
  Typography,
  Button,
  Spin,
  Input,
  Checkbox,
  Image,
  Space,
  Card,
  List,
  Collapse,
} from "antd";
import { useNavigate, useParams  } from "react-router";
import { FaCheck, FaCheckCircle, FaShoppingBag } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Get } from "../../config/api/get";
//   import { COUPON, SUBSCRIPTION } from "../../config/constants/api";
import { Post } from "../../config/api/post";
// import swal from "sweetalert";
import Modals from "../../components/Modals";
import { useSelector } from "react-redux";
import { ImageUrl } from "../../config/helper";
import InnerBanner from "../../components/innerBanner";

import Testimonials from "../../components/testimonials";

const SubscriptionPlan = () => {
  const navigate = useNavigate();
  const [standardCouponCode, setStandardCouponCode] = useState("");
  const [premiumCouponCode, setPremiumCouponCode] = useState("");
  const user = useSelector((state) => state.user.userData);
  //   const [subscriptions, setSubscriptions] = useState(null);
  const [loading, setLoading] = useState(false);
  const [premiumDiscount, setPremiumDiscount] = useState(0);
  const [standardDiscount, setStandardDiscount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modalText, setModalText] = useState("");
  const [planType, setPlanType] = useState("");
  const { id } = useParams();

  const data = [
    "Laundry that is not suitable for machine washing and/or tumble drying ",
    "Dry-clean only items ",
    "Bath mats",
    "Duvets and bulky items",
    "Any type of shoes",
    "Pet beds/items ",
  ];

  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  const handleOk = () => {
    setIsOpen(false);
  };

  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      The laundry subscription service typically has a standard turnaround time
      of 24 to 48 hours. Please note that if your items are picked up on
      Saturday, you will receive them back on the following Monday.
    </p>
  );
  const text1 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      In the subscription laundry service, you are allowed to include up to a
      maximum of 10kg of everyday laundry that is suitable for machine washing
      and tumble drying per bag. Some of the most popular items that we usually
      see include items such as bedsheets, trousers, t-shirts, and
      undergarments.
    </p>
  );
  const text2 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      • Laundry that is not suitable for machine washing and/or tumble drying •
      Dry-clean only items • Bath mats • Duvets and bulky items • Any type of
      shoes • Pet beds/items
    </p>
  );
  const text3 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      You are allowed to include up to 10kg of laundry in each bag
    </p>
  );
  const text4 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      We would highly recommend using our standard laundry service if you are
      staying in a hotel as these are usually one off orders. Our subscription
      service has a minimum term of 2 months.
    </p>
  );
  const text5 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      The minimum term for our subscription service is 2 months.
    </p>
  );
  const text6 = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      To edit or cancel your subscription, simply get in touch with our team by
      either emailing us at enquiry@cardifflaunderette.com or call us on 02921
      690 360 or simply send us a message on WhatsApp on 02921 690 360.
    </p>
  );
  const items = [
    {
      key: "1",
      label: "What is the turnaround time?",
      children: text,
    },
    {
      key: "2",
      label: "What can I include in the bag?",
      children: text1,
    },
    {
      key: "3",
      label: "What can I not include in the bag?",
      children: text2,
    },
    {
      key: "4",
      label: "What is the maximum amount of laundry I can put in each bag?",
      children: text3,
    },
    {
      key: "5",
      label:
        "I am here to visit, does the subscription service apply to hotel guests? ",
      children: text4,
    },
    {
      key: "6",
      label: "What is the minimum term for the subscription?",
      children: text5,
    },
    {
      key: "7",
      label: "How do I edit or cancel my subscription?",
      children: text6,
    },
  ];

  return (
    <div style={{ overflow: "hidden" }}>
      <InnerBanner
        heading={"Laundry Subscription Services"}
        para={
          "Choose your subscription plan according to your needs, we’ll pick up, clean and delivery within 48 hours."
        }
      />

      <div>
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={19}>
            <Row justify={"center"} gutter={40}>
              <Col xs={22} md={12} lg={6}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                      <Image
                        preview={false}
                        src={ImageUrl("ic1.png")}
                        className="abca"
                      />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>Save with subscription</h3>
                  <p>
                    Great value per kilogram, each bag up to 10kg of everyday
                    laundry.
                  </p>
                </Card>
              </Col>
              <Col xs={22} md={12} lg={6}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                      <Image
                        preview={false}
                        src={ImageUrl("ic2.png")}
                        className="abca"
                      />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>Convenient</h3>
                  <p>We pick up and drop off Monday to Saturday every week.</p>
                </Card>
              </Col>
              <Col xs={22} md={12} lg={6}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                      <Image
                        preview={false}
                        src={ImageUrl("ic3.png")}
                        className="abca"
                      />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>Free Delivery</h3>
                  <p>Our laundry subscribers get exclusive FREE delivery.</p>
                </Card>
              </Col>
              <Col xs={22} md={12} lg={6}>
                <Card
                  className="servicescard2"
                  onClick={() => navigate("/pricelist")}
                  style={{ cursor: "pointer" }}
                  title={
                    <>
                      <Image
                        preview={false}
                        src={ImageUrl("ic4.png")}
                        className="abca"
                      />
                    </>
                  }
                  // bordered={false}
                >
                  <h3>Autopilot</h3>
                  <p>
                    Streamline your laundry with our hassle-free subscription
                    plans.
                  </p>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="laundry-bg no-bg">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40} align={"middle"}>
              <Col xs={24} md={12} lg={12}>
                <Image
                  preview={false}
                  src={ImageUrl("you-happiness.png")}
                  alt="A Little Introduction"
                  data-aos-duration="1200"
                />
              </Col>
              <Col xs={24} md={12} lg={12}>
                <h4 data-aos-duration="1200">How many bags do you need?</h4>
                <p data-aos-duration="1600">
                  The average person washes 6 loads of laundry per month (4 bags
                  of our subscription size)
                </p>
                <h4 data-aos-duration="1200">
                  When can I include for the service wash?
                </h4>
                <p data-aos-duration="1600">
                  Everyday laundry that can be machine washed and tumble dried.
                  Some popular items typically included are t-shirts, trousers,
                  bedsheets and undergarments.
                </p>
                <List
                  size="large"
                  dataSource={data}
                  renderItem={(item) => <List.Item>{item}</List.Item>}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <Row
        justify={"center"}
        gutter={[16, 16]}
        style={{ paddingBottom: "80px" }}
      >
        <Col lg={19} md={23} xs={23}>
          <Row style={{ textAlign: "center", padding: "30px" }}>
            <Col lg={24}>
              <h1>The Best Service Wash Subscription Prices</h1>
              <p>
                The more bags you subscribe to, the more savings you make!
                Subscribing to 4 bags is the same as paying just £1.25 per kg!
              </p>
            </Col>
          </Row>

          <Row gutter={[16, 16]} justify={"center"}>
            <Col lg={6} md={6} sm={12} xs={23}>
              <div className="packge-box">
                <div className="bag-box">
                  <h4>1 Bag</h4>
                  <div>
                    <FaShoppingBag />
                  </div>
                </div>
                <div className="year-box">
                  <h3>£15</h3>
                  <h6>monthly</h6>
                </div>
                <div className="plan-ul-box">
                  <ul className="plan-ul">
                    <li>
                      <span className="f-17">Up to 10kg</span>
                    </li>
                    <li>
                      <span className="f-17">£15 per bag</span>
                    </li>
                    <li>
                      <span className="f-17">10% discount</span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn-box">
                  <Button
                    type="link"
                    className="mainbtn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                    onClick={() =>  window.open("https://buy.stripe.com/28o7tOcQFeJOanS8ww", "_blank")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={23}>
              <div className="packge-box">
                <div className="bag-box">
                  <h4>2 Bag</h4>
                  <div>
                    <FaShoppingBag />
                    <FaShoppingBag />
                  </div>
                </div>
                <div className="year-box">
                  <h3>£28.50 </h3>
                  <h6>monthly</h6>
                </div>
                <div className="plan-ul-box">
                  <ul className="plan-ul">
                    <li>
                      <span className="f-17">Up to 20kg</span>
                    </li>
                    <li>
                      <span className="f-17">£14.25 per bag</span>
                    </li>
                    <li>
                      <span className="f-17">15% discount</span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn-box">
                  <Button
                    type="link"
                    className="mainbtn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                    onClick={() =>  window.open("https://buy.stripe.com/eVa3dy6sh59eeE8145", "_blank")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={23}>
              <div className="packge-box">
                <div className="bag-box">
                  <h4>3 Bag</h4>
                  <div>
                    <FaShoppingBag />
                    <FaShoppingBag />
                    <FaShoppingBag />
                  </div>
                </div>
                <div className="year-box">
                  <h3>£40 </h3>
                  <h6>monthly</h6>
                </div>
                <div className="plan-ul-box">
                  <ul className="plan-ul">
                    <li>
                      <span className="f-17">Up to 30kg</span>
                    </li>
                    <li>
                      <span className="f-17">£13.33 per bag</span>
                    </li>
                    <li>
                      <span className="f-17">20% discount</span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn-box">
                  <Button
                    type="link"
                    className="mainbtn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                    onClick={() =>  window.open("https://buy.stripe.com/5kAg0k2c1dFKdA428a", "_blank")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} xs={23}>
              <div className="packge-box">
                <div className="bag-box">
                  <h4>4 Bag</h4>
                  <div>
                    <FaShoppingBag />
                    <FaShoppingBag />
                    <FaShoppingBag />
                    <FaShoppingBag />
                  </div>
                </div>
                <div className="year-box">
                  <h3>£50 </h3>
                  <h6>monthly</h6>
                </div>
                <div className="plan-ul-box">
                  <ul className="plan-ul">
                    <li>
                      <span className="f-17">Up to 40kg</span>
                    </li>
                    <li>
                      <span className="f-17">£12.50 per bag</span>
                    </li>
                    <li>
                      <span className="f-17">25% discount</span>
                    </li>
                  </ul>
                </div>
                <div className="plan-btn-box">
                  <Button
                    type="link"
                    className="mainbtn"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      margin: "0 auto",
                    }}
                   
                    onClick={() =>  window.open("https://buy.stripe.com/fZeaG07wl3167bGeUX", "_blank")}
                  >
                    Select Plan
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>

      <Testimonials />

      <div className="laundry-bg no-bg pb-40">
        <Row justify={"center"}>
          <Col xs={22} md={22} lg={20}>
            <Row gutter={40}>
              <Col xs={24} md={16} lg={16}>
                <h4 data-aos-duration="1200">FAQ</h4>
                <Collapse
                  items={items}
                  bordered={false}
                  defaultActiveKey={["1"]}
                  data-aos-duration="1200"
                />
              </Col>
            </Row>

            <hr />
          </Col>
        </Row>
      </div>

      {/* <Row
        justify={"center"}
        gutter={[16, 16]}
        style={{ paddingBottom: "40px" }}
      >
        <Col lg={16} md={23} xs={23}>
          <Row gutter={[16, 16]} justify={"center"}>
            <Col lg={8} md={8} sm={12} xs={23}>
              <div className="standard-box box for-scal basic">
                <h5 className="f-36 text-center" style={{ color: "#fff" }}>
                  STANDARD PLAN
                </h5>
                <h2 className="text-center f-85">
                  <sup className="f-30">$</sup>
                  50
                </h2>
                <h6 className="f-18 text-center">1 month access</h6>
                <ul className="plan-ul">
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                </ul>

                <Button
                  type="link"
                  className="mainbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
                >
                  Select Plan
                </Button>
              </div>
            </Col>
            <Col lg={8} md={8} sm={12} xs={23}>
              <div className="standard-box box for-scal premium">
                <h5 className="f-36 text-center" style={{ color: "#fff" }}>
                  PREMIUM PLAN
                </h5>
                <h2 className="text-center f-85">
                  <sup className="f-30">$</sup>
                  250
                </h2>
                <h6 className="f-18 text-center">for lifetime access</h6>
                <ul className="plan-ul">
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited searches</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">unlimited recipe</span>
                  </li>
                  <li>
                    <FaCheck />
                    <span className="f-17">access to premium content</span>
                  </li>
                </ul>
                <Button
                  type="link"
                  className="mainbtn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    margin: "0 auto",
                  }}
               
                >
                  Select Plan
                </Button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row> */}
    </div>
  );
};

export default SubscriptionPlan;
