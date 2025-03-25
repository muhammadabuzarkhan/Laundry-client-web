import React from "react";
import { Image, Col, Row, Button, Form, Input, Checkbox, Divider } from "antd";
import { useNavigate } from "react-router";
// import googleicon from "./google-icon.png";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../redux/thunk/authSlice'


function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = React.useState(false);

  const onFinish = (values) => {
  //setLoading(true);
    console.log("Success:", values);

    const data = {
      email : values.email
    }

    dispatch(forgetPassword(data))

    navigate("/verifycode" ,{ state : data.email})
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="auth-banner">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xl={6} lg={8} md={8} xs={23}>
          <div className="auth-box">
            <h2 className="auth-heading">Forget Password</h2>
            <p className="auth-p">
              Enter your credentials to Sign in to the platform
            </p>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Email Address"
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "Please input valid email!",
                  },
                  {
                    required: true,
                    message: "Please input your email!",
                  },
                ]}
              >
                <Input
                  size="large"
                  placeholder="Enter Email Address"
                  className="web-input"
                />
              </Form.Item>
              {/* <Row>
                <Col xs={24} md={12}>
                  <Form.Item
                    name="remember"
                    valuePropName="checked"
                    style={{ marginBottom: 0 }}
                  >
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Button
                    type="link"
                    className="forgot-text"
                    style={{
                      float: "right",
                    }}
                    onClick={() => navigate("/forget-password-1")}
                  >
                    Forgot Password?
                  </Button>
                </Col>
              </Row> */}
              <br />
              <Form.Item style={{ textAlign: "center", margin: "0" }}>
                <Button
                  type="button"
                  htmlType="submit"
                  className="web-btn"
                  style={{
                    cursor: "pointer",
                  }}
                 //  onClick={() => navigate("/verifycode")}
                >
                 Forget Password
                </Button>
              </Form.Item>
            </Form>
            {/* <Divider>OR</Divider> */}
            {/* <div className="social-imgs">
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
            </div> */}
            {/* <div
              className="already-account-text"
              style={{ textAlign: "center" }}
            >
              Don't have an account?
              <span onClick={() => navigate("/signUp")}> Sign Up</span>
            </div> */}
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default ForgetPassword;
