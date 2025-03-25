import React, { useState } from "react";
import { Image, Col, Row, Button, Form, Input,message , Checkbox, Divider } from "antd";
import { useNavigate } from "react-router";
// import googleicon from "./google-icon.png";
import { ImageUrl } from "../../config/helper";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { authSignup } from '../../redux/thunk/authSlice'

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [loading, setLoading] = React.useState(false);
  const [email , Setemail] = useState("")
  const [password , Setpassword] = useState("")

  const onFinish = async (values) => {
    // setLoading(true);
    const {email , password} = values

    const data = {
      email : email ,
      password : password
    }

    const newUser = await dispatch(authSignup(data)).unwrap()

    if(!newUser.status) {
      message.error(newUser.message)
    }else{
      navigate("/login")
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
            <h2 className="auth-heading">Sign up to continue</h2>
            <p className="auth-p">To sign up, please enter your email</p>
            <Form
              layout="vertical"
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={ onFinish}
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
                  placeholder="James.Anderson@gmail.com"
                  className="web-input"
                  onChange={(e) => Setemail(e.target.value)}
                  value={email}
                />
              </Form.Item>
              <br />
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  {
                    type: "password",
                    message: "Please input valid password!",
                  },
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                {/* <Input
                  size="large"
                  placeholder="**********"
                  className="web-input"
                  type="password"
                  onChange={(e) => Setpassword(e.target.value)}
                  value={password}
                /> */}

                <Input.Password
                  size="large"
                  placeholder="Enter Password"
                  className="web-input"
                  style={{
                    // borderRadius: "5px",
                    fontSize: "14px",
                    paddingRight: "10px",
                  }}
                  onChange={(e) => Setpassword(e.target.value)}
                  value={password}
                />
              </Form.Item>
              <br />
              <Form.Item style={{ textAlign: "center", margin: "0" }}>
                <Button
                  type="button"
                  htmlType="submit"
                  className="web-btn"
                  style={{
                    cursor: "pointer",
                  }}
                  // onClick={() => navigate("/login")}
                >
                  SIGN UP
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
              Don’t Have An Account?
              <span> LOGIN</span>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
