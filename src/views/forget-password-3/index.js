import React, { useState } from "react";
import { Layout, Col, Row, Button, Form, Input } from "antd";
import { useNavigate , useLocation } from "react-router";
import { useDispatch } from 'react-redux'
import Modals from "../../../src/components/Modals";
import { resetPassword } from '../../redux/thunk/authSlice'
// import swal from "sweetalert";

function ForgetPassword() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email , code } = location.state
  const dispatch = useDispatch()
  const [error, setError] = useState("");

  const [pass , Setpass] = useState({
    password : "",
    confirmPassword : ""
  })

  const checkPassword = (name , value) => {
    Setpass((prev) => ({
      ...prev,
      [name] : value
    }))
  }

console.log("pass",pass.password , "678",pass.confirmPassword);

  const onFinish = (values) => {
    console.log("Success:", values);

    if(values.password !== values.conpassword){
      setError("Password Not Matched")
    }
    else{
      setError("")
      const data = {
        email,
        code,
        password : values.password ,
        confirmPassword : values.conpassword
      }
      dispatch(resetPassword(data))
      navigate("/login");

    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [show1, setShow1] = useState(false);
  const handleShow1 = () => {
    setShow1(true);
  };
  { console.log("error=====>",error)}
  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col lg={7}>
            <div className="auth-box">
            { error ? <h4 className="auth-heading">{error}</h4> : null }
              <h4 className="auth-heading">Forgot Your Password?</h4>
              <h4 className="auth-p">Set New Password For Your Acccount</h4>
              <Form
                layout="vertical"
                name="basic"
                labelCol={{
                  span: 0,
                }}
                wrapperCol={{
                  span: 24,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
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
                    style={{
                      borderRadius: "5px",
                      fontSize: "14px",
                      padding: "10px 20px",
                    }}
                    onChange={(e) => checkPassword("password" , e.target.value)}
                    value={pass.password}
                  />
                </Form.Item>
                <Form.Item
                  label="Confirm Password"
                  name="conpassword"
                  rules={[
                    {
                      required: true,
                      message: "Please input your Confirm Password",
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
                    placeholder="Confirm your password"
                    style={{
                      borderRadius: "5px",
                      fontSize: "14px",
                      padding: "10px 20px",
                    }}
                    onChange={(e) => checkPassword("confirmPassword" , e.target.value)}
                    value={pass.confirmPassword}
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
                    // onClick={!error ? handleShow1  : null }
                  >
                    Continue
                  </Button>
                </Form.Item>
                <div className="already-account-text" style={{ textAlign: "center" }}>
                  Back to <span onClick={() => navigate("/login")}>Login</span>{" "}
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </div>

      <Modals
        open={show1}
        handleOk={() => setShow1(false)}
        handleCancel={() => setShow1(false)}
        text="Your password has been reset. Please login to continue."
        footer={[
          <Button
            key="submit"
            type=""
            className="web-btn"
            onClick={() => navigate("/login")}
            style={{textAlign:"center"}}
          >
            Continue
          </Button>,
        ]}
      />
    </Layout>
  );
}

export default ForgetPassword;
