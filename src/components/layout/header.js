// import React, { useState, useEffect } from "react";
// import { Col, Row, Menu, Image, Button, Popover, Drawer , Space  } from "antd";
// import { MenuOutlined } from "@ant-design/icons";
// import { useNavigate, Link } from "react-router-dom";
// import { ImageUrl } from "../../config/helper";
// import { useSelector , useDispatch } from 'react-redux'
// import {  logouts } from "../../redux/slice/authSlice"
// import {  clearUserOrders } from "../../redux/slice/orderSlice"
// const items = [
//   {
//     label: "Home",
//     key: "/",
//   },
//   {
//     label: "About Us",
//     key: "/about",
//   },
//   {
//     label: "Services & Prices ",
//     key: "/servicesnprices",
//   },
//   {
//     label: "Blog",
//     key: "/blog",
//   },
//   {
//     label: "Contact Us",
//     key: "/contactus",
//   },
// ];


// function Header({ header }) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [current, setCurrent] = useState("mail");
//   const [open, setOpen] = useState(false);
//   const endUser = useSelector((state) => state?.user?.data?.user)
//   const ImageUrls = "https://react.customdev.solutions:3021/"
//   const Dummy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s"

//   const ClearUser = () => {
//     dispatch(logouts(endUser))
//     dispatch(clearUserOrders())
//     navigate('/login')
//   }

//   const content = (
//     <div>
//       <Button className="profile_btn" onClick={() => navigate("/profile")}>
//         Profile
//       </Button>
//       <Button className="profile_btn" onClick={() => navigate("/myOrders")}>Orders</Button>
//       <Button className="profile_btn" onClick={() => ClearUser()} >logout</Button>
//     </div>
//   );
//   const showDrawer = () => {
//     setOpen(true);
//   };
//   const onClose = () => {
//     setOpen(false);
//   };

//   const onClick = (e) => {
//     console.log("click ", e);
//     navigate(e.key);
//     setCurrent(e.key);
//   };


//   const [isSticky, setSticky] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Change 100 to the appropriate scroll position where you want the header to become sticky
//       if (window.scrollY > 100) {
//         setSticky(true);
//       } else {
//         setSticky(false);
//       }
//     };

//     // Attach the scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     // Detach the scroll event listener on cleanup
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);
  
//   return (
//     <div className={`header-container ${isSticky ? 'sticky' : ''}`}>
//     <Row justify="center" className={header ? "navigation1" : "navigation"}>
//       <Col xs={24} lg={22}>
//         <Row style={{ alignItems: "center", padding: "10px 0" }}>
//           <Col xs={12} sm={12} lg={2} xl={2}>
//             <Image
//               className="logo"
//               preview={false}
//               src={ImageUrl("logo.png")}
//               alt="logo"
//             />
//           </Col>
//           <Col xs={0} sm={0} md={0} lg={17} xl={18} justify="center">
//             <Menu
//               className="mainMenu"
//               onClick={onClick}
//               selectedKeys={[current]}
//               mode="horizontal"
//               items={items}
//             />
//           </Col>
//           <Col xs={12} sm={12} lg={5} xl={4} justify="end" style={{ textAlign: "end" }}>
//             <Row style={{ width: "100%", padding: "0px 14px" }}>
//               <Col xs={24} sm={24} md={24} lg={0} style={{ textAlign: "right" }}>
//                 <MenuOutlined style={{ fontSize: "25px" }} onClick={() => showDrawer()} />
//               </Col>
//             </Row>

//             <Row justify="end" style={{ marginTop: "10px" }}>
//               <Col xs={0} sm={0} md={0} lg={24}>
//                 {!endUser ? (
//                   <Link to="/login">
//                     <Button className="mainbtn" onClick={() => navigate("/login")}>
//                       LOGIN
//                     </Button>
//                   </Link>
//                 ) : (
//                   <Space>
//                     <Popover content={content}>
//                       <Button className="profile">
//                         <Image
//                           className="logo"
//                           preview={false}
//                           src={!endUser?.image ? Dummy : ImageUrls + endUser?.image}
//                           alt="banner"
//                           style={{
//                             width: "50px",
//                             height: "50px",
//                             borderRadius: "50%",
//                           }}
//                         />
//                       </Button>
//                     </Popover>
//                     <strong>{!endUser ? "Not Available" : endUser.firstName + " " + endUser.lastName}</strong>
//                     <Button className="mainbtn" onClick={() => navigate("/steps")}>
//                       BOOK NOW!
//                     </Button>
//                   </Space>
//                 )}
//               </Col>
//             </Row>

//             <Drawer placement="right" onClose={onClose} open={open} key={"left"}>
//               <Menu
//                 className="mainMenu"
//                 onClick={onClick}
//                 selectedKeys={[current]}
//                 mode="vertical"
//                 items={items}
//               />
//               <div className="mobileprofile">
//                 <Popover content={content}>
//                   <Button className="profile">
//                     <Image
//                       className="logo"
//                       preview={false}
//                       src={ImageUrl("logo.png")}
//                       alt="banner"
//                     />
//                   </Button>
//                 </Popover>
//                 <Link to="">
//                   <Button className="mainbtn" onClick={() => navigate("/login")}>
//                     LOGIN
//                   </Button>
//                 </Link>
//                 <Button className="mainbtn new-buttons" onClick={() => navigate("/signup")}>
//                   BOOK NOW!
//                 </Button>
//               </div>
//             </Drawer>
//           </Col>
//         </Row>
//       </Col>
//     </Row>
//   </div>
//   )
// }

// export default Header;

import React, { useState, useEffect } from "react";
import { Col, Row, Menu, Image, Button, Popover, Drawer , Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useNavigate, Link } from "react-router-dom";
import { ImageUrl } from "../../config/helper";
import { useSelector , useDispatch } from 'react-redux';
import { logouts } from "../../redux/slice/authSlice";
import { clearUserOrders } from "../../redux/slice/orderSlice";

const items = [
  { label: "Home", key: "/" },
  { label: "About Us", key: "/about" },
  { label: "Services & Prices", key: "/servicesnprices" },
  { label: "Blog", key: "/blog" },
  { label: "Contact Us", key: "/contactus" },
];

function Header({ header }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [current, setCurrent] = useState("mail");
  const [open, setOpen] = useState(false);
  const endUser = useSelector((state) => state?.user?.data?.user);
  const ImageUrls = "https://react.customdev.solutions:3021/";
  const Dummy = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s";

  const ClearUser = () => {
    dispatch(logouts(endUser));
    dispatch(clearUserOrders());
    navigate('/login');
  };

  const content = (
    <div>
      <Button className="profile_btn" onClick={() => navigate("/profile")}>
        Profile
      </Button>
      <Button className="profile_btn" onClick={() => navigate("/myOrders")}>Orders</Button>
      <Button className="profile_btn" onClick={() => ClearUser()}>Logout</Button>
    </div>
  );

  const showDrawer = () => setOpen(true);
  const onClose = () => setOpen(false);

  const onClick = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Inline styles for hover effect
  const menuItemStyle = {
    transition: "color 0.3s ease",
  };

  const menuItemHoverStyle = {
    color: "black",
  };

  return (
    <div className={`header-container ${isSticky ? 'sticky' : ''}`}>
      <Row justify="center" className={header ? "navigation1" : "navigation"}>
        <Col xs={24} lg={22}>
          <Row style={{ alignItems: "center", padding: "10px 0" }}>
            <Col xs={12} sm={12} lg={2} xl={2}>
              <Image
                className="logo"
                preview={false}
                src={ImageUrl("logo.png")}
                alt="logo"
              />
            </Col>
            <Col xs={0} sm={0} md={0} lg={17} xl={18} justify="center">
              <Menu
                className="mainMenu"
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items.map((item) => ({
                  ...item,
                  label: (
                    <span
                      style={menuItemStyle}
                      onMouseEnter={(e) => (e.target.style.color = "black")}
                      onMouseLeave={(e) => (e.target.style.color = "")}
                    >
                      {item.label}
                    </span>
                  ),
                }))}
              />
            </Col>
            <Col xs={12} sm={12} lg={5} xl={4} justify="end" style={{ textAlign: "end" }}>
              <Row style={{ width: "100%", padding: "0px 14px" }}>
                <Col xs={24} sm={24} md={24} lg={0} style={{ textAlign: "right" }}>
                  <MenuOutlined style={{ fontSize: "25px" }} onClick={() => showDrawer()} />
                </Col>
              </Row>

              <Row justify="end" style={{ marginTop: "10px" }}>
                <Col xs={0} sm={0} md={0} lg={24}>
                  {!endUser ? (
                    <Link to="/login">
                      <Button className="mainbtn" onClick={() => navigate("/login")}>
                        LOGIN
                      </Button>
                    </Link>
                  ) : (
                    <Space>
                      <Popover content={content}>
                        <Button className="profile">
                          <Image
                            className="logo"
                            preview={false}
                            src={!endUser?.image ? Dummy : ImageUrls + endUser?.image}
                            alt="banner"
                            style={{
                              width: "50px",
                              height: "50px",
                              borderRadius: "50%",
                            }}
                          />
                        </Button>
                      </Popover>
                      <strong>{!endUser ? "Not Available" : endUser.firstName + " " + endUser.lastName}</strong>
                      <Button className="mainbtn" onClick={() => navigate("/steps")}>
                        BOOK NOW!
                      </Button>
                    </Space>
                  )}
                </Col>
              </Row>

              <Drawer placement="right" onClose={onClose} open={open} key={"left"}>
                <Menu
                  className="mainMenu"
                  onClick={onClick}
                  selectedKeys={[current]}
                  mode="vertical"
                  items={items.map((item) => ({
                    ...item,
                    label: (
                      <span
                        style={menuItemStyle}
                        onMouseEnter={(e) => (e.target.style.color = "black")}
                        onMouseLeave={(e) => (e.target.style.color = "")}
                      >
                        {item.label}
                      </span>
                    ),
                  }))}
                />
                <div className="mobileprofile">
                  <Popover content={content}>
                    <Button className="profile">
                      <Image
                        className="logo"
                        preview={false}
                        src={ImageUrl("logo.png")}
                        alt="banner"
                      />
                    </Button>
                  </Popover>
                  <Link to="">
                    <Button className="mainbtn" onClick={() => navigate("/login")}>
                      LOGIN
                    </Button>
                  </Link>
                  <Button className="mainbtn new-buttons" onClick={() => navigate("/signup")}>
                    BOOK NOW!
                  </Button>
                </div>
              </Drawer>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
