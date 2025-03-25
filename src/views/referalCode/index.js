import { useEffect, useMemo, useState } from "react";
import { Col, Row, Card, Image, Table, List, Button ,Badge,Space, message  } from "antd";
import { FaSearch, FaFilter, FaCaretDown, FaEye } from "react-icons/fa";
import { LuCopy } from "react-icons/lu";
import { useNavigate, useParams } from "react-router";
import { ImageUrl } from "../../config/helper";
import { useDispatch , useSelector } from 'react-redux'
import { getAvaibleReferalCode } from '../../redux/thunk/referalCodeSlice'
const DropzoneFiltercards = () => {
  const [loading, setLoading] = useState(true);
  const [datasource, setOrderDetails] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch()
  const userToken = useSelector((state) => state.user?.data.token)
  const usersid = useSelector((state) => state.user?.data?.user?._id)
  const {  userOrder } = useSelector((state) => state.order)
  const ImageURL = 'https://react.customdev.solutions:3021/'

    

  const getUserOrders = async () => {
    const data = {
      token : userToken
    }
    let referals = await dispatch(getAvaibleReferalCode(data)).unwrap()

    if(referals?.status){
        setOrderDetails(referals.data)
    }
  }




  useEffect(() => {
    getUserOrders()
    // setOrderDetails(datasource)
  },[])


  const handleReferalCode = (item , value) => {
    let newLink = window.location.href.split('/')
    newLink.splice(-1)
    let  link = newLink.join('/')+"/"+"steps"+`?code=${value?.code}`
    navigator.clipboard.writeText(link)
    .then(() => {
        message.success('Link Copied');
      })
      .catch((err) => {
        console.error('Failed to copy link: ', err);
      });
  }


  const columns = [
    
    {
      title: "code",
      dataIndex: "code",
      key: "code",
    },
    // {
    //   title: "no of times used",
    //   dataIndex: "noOfTimes",
    //   key: "noOfTimes",
     
    // },
    {
      title: "discount",
      dataIndex: "discount",
      key: "discount",
    },
    {
        title: "ACTION",
        dataIndex: "_id",
        key: "_id",
        render: (item , value) => (
          <LuCopy
            style={{ fontSize: "16px", color: "#000",  cursor: "pointer" }}
               onClick={() => handleReferalCode(item , value)}
          />
        ),
      },
  ];
  return (
    <div className="shop-page">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xs={23} md={21}>
          <div className="shop-page-main">
            <Row gutter={[16, 16]}>
              <Col xs={24} md={24} lg={24} xl={24}>
                <div className="my-account-profile">
                  <section className="side-menu-parent">
                    <div className="about-us-section">
                      <div className="profile-information-wrapper">
                        <h3 className="main-heading">Referal Code</h3>
                      </div>
                      <div className="bg-paren">
                        <Row justify="center">
                          <Col xs={24} md={24} xl={24}>
                            <Card className="orderDetails">
                              <div className="boxDetails">
                                <Row
                                  gutter={[16, 16]}
                                  style={{ padding: 20, overflow: "auto" }}
                                  justify={"center"}
                                >
                                  <Col lg={18}>
                                    <Table
                                      className="styledTable2"
                                      dataSource={datasource}
                                      columns={columns}
                                      pagination={false}
                                    />
                                  </Col>
                                  {/* <Col lg={6}>
                                    <div className="summary">
                                      <h5>SUMMARY</h5>
                                      <div className="summaryinner">
                                        <List itemLayout="horizontal">
                                          <List.Item>
                                            <List.Item.Meta
                                              title={
                                                <div className="summaryList">
                                                  <span>Subtotal</span>
                                                  <span>100</span>
                                                </div>
                                              }
                                            />
                                          </List.Item>
                                          <List.Item>
                                            <List.Item.Meta
                                              title={
                                                <div className="summaryList">
                                                  <span>Tax 0%</span>
                                                  <span>5%</span>
                                                </div>
                                              }
                                            />
                                          </List.Item>
                                          <List.Item>
                                            <List.Item.Meta
                                              title={
                                                <div className="summaryList">
                                                  {" "}
                                                  <span>Grand Total</span>{" "}
                                                  <span>321</span>
                                                </div>
                                              }
                                            />
                                          </List.Item>
                                        </List>

                                        <Button
                                            className="mainbtn"
                                            onClick={() =>
                                              navigate("/steps")
                                            }
                                          >
                                            Proceed To Checkout
                                          </Button>
                                      </div>
                                    </div>
                                  </Col> */}
                                </Row>
                              </div>
                            </Card>
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
    </div>
  );
};

export default DropzoneFiltercards;
