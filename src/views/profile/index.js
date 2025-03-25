import { useEffect } from "react";
import { Col, Row, Button } from "antd";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
// import { UPLOADS_URL } from "../../../config/constants/api";
// import DashbordSidebar from "../../../components/DashboardSidebar";
// import { myprofiledata } from "../../../components/Data/data";
// import { extractDate } from "../../../config/constants";

const DropzoneFiltercards = () => {
  const profileDetails = useSelector((state) => state.user.data.user);
  
  const navigate = useNavigate();
    const ImageURL = 'https://react.customdev.solutions:3021/'
    const notavaible = "Not Availble"
    const img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUfiySJr8Org5W-oE2v3_i7VqufglYtSdqw&s'
  // useEffect(() => {
  //   if (!profileDetails) {
  //     navigate("/createProfile");
  //   }
  // }, []);

  return (
    <div className="shop-page">
      {profileDetails && (
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col xs={23} md={21}>
            <div className="shop-page-main">
              <Row gutter={[16, 16]}>
                <Col xs={24} md={24} lg={24} xl={24}>
                  <div className="my-account-profile">
                    <section className="side-menu-parent">
                     
                      <div className="about-us-section">
                        <div className="profile-information-wrapper">
                          <h3 className="main-heading">Profile Information</h3>
                        </div>
                        <div className="bg-parent">
                          <Row
                            gutter={[16, 16]}
                            align={"middle"}
                            justify={"space-between"}
                          >
                            <Col md={10} lg={10} xl={8}>
                              <div className="wrapper-group-1000001858">
                                <img
                                  src={
                                    profileDetails?.image ? 
                                    ImageURL + profileDetails?.image : 
                                    img
                                    }
                                  alt=""
                                  className="img-fluid"
                                  style={{maxHeight:'350px', objectFit:'cover', objectPosition:'center'}}
                                />
                              </div>
                            </Col>
                            <Col md={14} lg={14} xl={14}>
                              <div className="">
                                <div className="logo-rectangle">
                                  <div className="profile-info">
                                    <div className="full-name">
                                      <div className="jake-dawson">
                                        <div className="phone-number">
                                        <Row justify="center" className="customRow">
                                          <Col md={12} xs={24}>
                                          <div className="full-name1">
                                            <p className="full-name2">
                                              Full Name
                                            </p>
                                          </div>
                                          </Col>
                                          <Col md={12} xs={24}>
                                          <div className="jake-dawson1">
                                            {
                                              profileDetails?.firstName && profileDetails?.lastName ?
                                              profileDetails?.firstName + " " + profileDetails?.lastName : 
                                              notavaible
                                              }
                                          </div>
                                          </Col>
                                        </Row>
                                          {/* <div className="full-name1">
                                            <p className="full-name2">
                                              Full Name
                                            </p>
                                          </div>
                                          <div className="jake-dawson1">
                                            {profileDetails?.firstName + " " + profileDetails?.lastName}
                                          </div> */}
                                        </div>
                                        <div className="gender">
                                        <Row justify="center"  className="customRow">
                                          <Col md={12} xs={24}>
                                          <div className="phone-number1">
                                            Phone Number
                                          </div>
                                          </Col>
                                          <Col md={12} xs={24}>
                                          <div className="frame-parent">
                                            <div className="a-b-c">
                                              {
                                                profileDetails?.phoneNumber ? 
                                                profileDetails?.phoneNumber :
                                                notavaible
                                                }
                                            </div>
                                          </div>
                                          </Col>
                                        </Row>
                                          {/* <div className="phone-number1">
                                            Phone Number
                                          </div>
                                          <div className="frame-parent">
                                            <div className="a-b-c">
                                              {profileDetails?.phoneNumber}
                                            </div>
                                          </div> */}
                                        </div>
                                        
                                      </div>
                                      <div className="changepassword">
                                      <Row justify="center"  className="customRow">
                                          <Col md={12} xs={24}>
                                          <div className="email">Email</div>
                                          </Col>
                                          <Col md={12} xs={24}>
                                          <div className="jakesamplecom">
                                            {profileDetails?.email}
                                          </div>
                                          </Col>
                                        </Row>
                                    
                                        {/* <div className="b-g">
                                          <div className="email">Email</div>
                                          <div className="jakesamplecom">
                                            {profileDetails?.email}
                                          </div>
                                        </div> */}
                                        
                                      </div>
                                    </div>
                                    
                                  </div>
                                  <div className="f-a-qs">
                                    <div className="career">
                                      {/* <div className="date-of-birth">
                                        Date Of Birth
                                      </div> */}
                                      {/* <div className="sign-waiver">
                                        Sign Waiver
                                      </div> */}
                                    </div>
                                    <div className="termsconditions">
                                      <div className="jan-28-1998">
                                        {/* {extractDate(
                                          profileDetails?.dateOfBirth
                                        )} */}
                                      </div>
                                      {/* <div className="abc-waiverpdf-parent">
                                        <div className="abc-waiverpdf">
                                          {myprofiledata.signWaiver}
                                        </div>
                                        <div className="ellipse-parent">
                                          <div className="frame-item" />
                                          <img
                                            className="frame-inner"
                                            loading="eager"
                                            alt=""
                                            src="/group-1000002368.svg"
                                          />
                                        </div>
                                      </div> */}
                                    </div>
                                  </div>
                                  <div className="frame-group">
                                    <div className="customButton">
                                      <Button
                                        type=""
                                        block
                                        size={"medium"}
                                        style={{ marginBottom: "10px" }}
                                        className="web-btn"
                                        onClick={() => navigate("/editProfile" , { state : profileDetails} )}
                                      >
                                        Edit Profile
                                      </Button>
                                    </div>

                                    <div className="customButton">
                                      <Button
                                        type=""
                                        block
                                        size={"medium"}
                                        style={{ marginBottom: "10px" }}
                                        className="web-btn"
                                        onClick={() => navigate("/referalCode" , { state : profileDetails} )}
                                      >
                                        Referal Code
                                      </Button>
                                    </div>
                                    {/* <div className="">
                                      <Button
                                        type=""
                                        block
                                        size={"large"}
                                        style={{ marginBottom: "10px" }}
                                        className="web-btn"
                                        onClick={() =>
                                          navigate("/changePassword")
                                        }
                                      >
                                        Change password
                                      </Button>
                                    </div> */}
                                  </div>
                                </div>
                              </div>
                            </Col>
                          </Row>
                        </div>
                      </div>
                    </section>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default DropzoneFiltercards;
