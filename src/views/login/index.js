import React, { useEffect , useState , useMemo } from "react";
import { Image,message, Col, Row, Button, Form, Input, Checkbox, Divider } from "antd";
import { useNavigate } from "react-router";
// import googleicon from "./google-icon.png";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";
import { useDispatch , useSelector } from 'react-redux'
import { authLogin } from '../../redux/thunk/authSlice'
import { emptySomestates } from '../../redux/slice/authSlice'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  


  const onFinish = async  (values) => {
  //setLoading(true);
    console.log("Success:", values);

    const data = {
      email : values.email,
      password : values.password
    }

   const checkresult = await dispatch(authLogin(data)).unwrap();

   if(checkresult === "USER with this email not found"){
    message.error(checkresult);
   }else if( checkresult?.message === "User Logged In Successfully" &&  checkresult?.status){
    emptySomestates();
    navigate("/");
   }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  

  return (
    <div className="auth-banner">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xl={6} lg={8} md={8} xs={23}>
          <div className="auth-box">
            <h2 className="auth-heading">Log in to continue</h2>
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

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                  {
                    type: "string",
                    min: 8,
                    message: "password must be atleast 8 characters!",
                  },
                ]}
              >
                <Input.Password
                  size="large"
                  placeholder="Enter Password"
                  className="web-input"
                  style={{
                    // borderRadius: "5px",
                    fontSize: "14px",
                    paddingRight: "10px",
                  }}
                />
              </Form.Item>
              <Row>
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
              </Row>
              <br />
              <Form.Item style={{ textAlign: "center", margin: "0" }}>
                <Button
                  type="button"
                  htmlType="submit"
                  className="web-btn"
                  style={{
                    cursor: "pointer",
                  }}
                  // onClick={() => navigate("/")}
                >
                 Login
                </Button>
              </Form.Item>
            </Form>
            <Divider>OR</Divider>
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
            <div
              className="already-account-text"
              style={{ textAlign: "center" }}
            >
              Don't have an account?
              <span onClick={() => navigate("/signUp")}> Sign Up</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
