import React from "react";
import { useNavigate } from "react-router-dom";
import { Col, Row, Button, Image } from "antd";
import { ImageUrl } from "../../config/helper";

function WeOffer() {
  const navigate=useNavigate();
  return (
    <div className="weOffer">
      <Row justify={"center"}>
        <Col xs={22}>
          <Row justify={"center"}>
            <Col xs={24}>
              <h3>Shine like crystal</h3>
              <h2>Services we offer</h2>
            </Col>

            <Col xs={24}>
              {/* <Row justify={'center'} gutter={20}>
                            <Col span={4}>
                                <ul>
                                    <li></li>
                                    <li>What we offer</li>
                                    <li>Typically included items</li>
                                    <li>Service Time</li>
                                    <li>Pricing</li>
                                    <li>Items returned</li>
                                </ul>
                            </Col>
                            <Col span={4}><ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul></Col>
                                <Col span={4}>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </Col>
                            <Col span={4}><ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul></Col>
                                <Col span={4}>
                                <ul>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </Col>
                        </Row>
                         */}
              <div className="container">
                <table className="products-4">
                  <thead>
                    <tr>
                      <th className="label blankth">&nbsp;</th>
                      <th className="firstth">
                        <Image
                          preview={false}
                          src={ImageUrl("service-icon-1.png")}
                          alt="paymentcards"
                        />
                        <h3>Dry cleaning</h3>
                      </th>
                      <th className="secondth">
                        <Image
                          preview={false}
                          src={ImageUrl("service-icon-2.png")}
                          alt="paymentcards"
                        />
                        <h3>Service Wash</h3>
                      </th>
                      <th className="thirdth">
                        <Image
                          preview={false}
                          src={ImageUrl("service-icon-3.png")}
                          alt="paymentcards"
                        />
                        <h3>Wash & Iron</h3>
                      </th>
                      <th className="forthth">
                        <Image
                          preview={false}
                          src={ImageUrl("service-icon-4.png")}
                          alt="paymentcards"
                        />
                        <h3>Duvets & Bulky Items</h3>
                      </th>
                      <th className="fiveth">
                        <Image
                          preview={false}
                          src={ImageUrl("service-icon-5.png")}
                          alt="paymentcards"
                        />
                        <h3>Alterations</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="label">What we offer</td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Dry Cleaning + Ironing
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Wash + Dry & Fold
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Wash + Dry & Ironing
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Custom Cleaning
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Custom Alterations
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="label">Typically included items</td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Suits, shirts, dresses, coats and bedding
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          T-shirts, trousers, bedsheets and undergarments
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          T-shirts, trousers, bedsheets and undergarments
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Duvets, pillows, throw and blankets
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          Trousers, jeans, shirts, blazers, dresses, jackets,
                          zips and curtains
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="label">Service Time</td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Image
                            className="time"
                            preview={false}
                            src={ImageUrl("watch-icon.png")}
                            alt="paymentcards"
                          />
                          2-4 days
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          <Image
                            className="time"
                            preview={false}
                            src={ImageUrl("watch-icon.png")}
                            alt="paymentcards"
                          />
                          24 hours
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          <Image
                            className="time"
                            preview={false}
                            src={ImageUrl("watch-icon.png")}
                            alt="paymentcards"
                          />
                          24 hours
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          <Image
                            className="time"
                            preview={false}
                            src={ImageUrl("watch-icon.png")}
                            alt="paymentcards"
                          />
                          1-2 days
                        </div>
                      </td>
                      <td>
                        <div className="spec" spec-title="Label">
                          <Image
                            className="time"
                            preview={false}
                            src={ImageUrl("watch-icon.png")}
                            alt="paymentcards"
                          />
                          3-7 days
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="label">Pricing</td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>Price per item </span>from
                          {" "}
                          <strong>£5</strong>
                          <Button>See Price List</Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>Price per weight </span>from
                          {" "}
                          <strong>£14 </strong> / 7kg
                          <Button>See Price List</Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>Price per weight </span>from
                          {" "}
                          <strong>£14 / 7kg </strong> + from {" "}
                          <strong>  £1.50 per ironing</strong>
                          <Button>See Price List</Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>Price per item </span>from
                          {" "}
                          <strong>£8</strong>
                          <Button>See Price List</Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>Price per item </span>from
                          {" "}
                          <strong>£9</strong>
                          <Button>See Price List</Button>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="label">Items returned</td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>
                            <Image
                              preview={false}
                              src={ImageUrl("hanger-icon.png")}
                            />
                          </span>{" "}
                          <strong>ON HANGERS</strong>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>
                            <Image
                              preview={false}
                              src={ImageUrl("bag-icon.png")}
                            />
                          </span>{" "}
                          <strong>In a bag</strong>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>
                            <Image
                              preview={false}
                              src={ImageUrl("hanger-icon.png")}
                            />
                          </span>{" "}
                          <strong>ON HANGERS</strong>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>
                            <Image
                              preview={false}
                              src={ImageUrl("bag-icon.png")}
                            />
                          </span>{" "}
                          <strong>In a bag</strong>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <span>
                            <Image
                              preview={false}
                              src={ImageUrl("bag-icon.png")}
                            />
                          </span>{" "}
                          <strong>In a bag or On Hanger</strong>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="label">&nbsp;</td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Button className="mainbtn" onClick={() => navigate("/steps")}>
                            BOOK NOW!
                          </Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Button className="mainbtn" onClick={() => navigate("/steps")}>
                            BOOK NOW!
                          </Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Button className="mainbtn" onClick={() => navigate("/steps")}>
                            BOOK NOW!
                          </Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Button className="mainbtn" onClick={() => navigate("/steps")}>
                            BOOK NOW!
                          </Button>
                        </div>
                      </td>
                      <td align="center">
                        <div className="spec" spec-title="Label">
                          <Button className="mainbtn" onClick={() => navigate("/steps")}>
                            BOOK NOW!
                          </Button>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
              </div>
            </Col>

            <Col xs={24}>
              <p>Our minimum order value is £20.</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default WeOffer;