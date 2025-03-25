import React from "react";
import { Image, Col, Row, Button, Form, Input, Checkbox, Divider } from "antd";
import { useNavigate } from "react-router";
// import googleicon from "./google-icon.png";
import { ImageUrl } from "../../config/helper";
import { BsFillChatDotsFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = React.useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
    setLoading(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="auth-banner">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xl={6} lg={9} md={9} xs={23}>
          <div className="auth-box">
            <div style={{ textAlign: "center" }}>
              <Image
                preview={false}
                src={ImageUrl("email-icon.png")}
                alt="paymentcards"
              />
            </div>
            <h2 className="auth-heading">Check your email</h2>
            <p className="auth-p">
              To confirm your email address, tap the link in the email sent to
              james@andrson.com
            </p>
            <div className="help">
              <div>
                <h6>NEED HELP?</h6>
                <Link>
                  <h5>CONTACT & SUPPORT</h5>
                </Link>
              </div>
              <span>
                <BsFillChatDotsFill />
              </span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
