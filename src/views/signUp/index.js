import React from "react";
import { Image, Col, Row, Button, Form, Input, Checkbox, Divider } from "antd";
import { useNavigate } from "react-router";
// import googleicon from "./google-icon.png";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";

function Signup() {
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
        <Col xl={6} lg={8} md={8} xs={23}>
          <div className="auth-box">
            <h2 className="auth-heading">Sign up to continue</h2>
            <p className="auth-p">Choose below options to sign up</p>

            <div className="social-imgs">
              <Link>
                <Image
                  preview={false}
                  src={ImageUrl("google-icon.png")}
                  alt="paymentcards"
                />
                <p>Google</p>
              </Link>
              <Link>
                <Image
                  preview={false}
                  src={ImageUrl("apple-icon.png")}
                  alt="paymentcards"
                />
                <p>Apple</p>
              </Link>
              <Link>
                <Image
                  preview={false}
                  src={ImageUrl("fb-icon.png")}
                  alt="paymentcards"
                />
                <p>Facebook</p>
              </Link>
            </div>
            <Divider>OR</Divider>
            <div style={{ textAlign: "center" }}>
              <Button
                type="button"
                htmlType="submit"
                className="web-btn"
                style={{
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signupEmail")}
              >
                CONTINUE WITH EMAIL
              </Button>
            </div>
            <div
              className="already-account-text"
              style={{ textAlign: "center" }}
            >
              Don’t Have An Account?
              <span onClick={() => navigate("/login")}> LOGIN</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Signup;
