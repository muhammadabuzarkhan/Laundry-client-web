import React from "react";
import { Layout, Col,message , Row, Button, Form, Input } from "antd";
import { useNavigate } from "react-router";
import { useDispatch } from 'react-redux'
import { forgetPassword } from '../../redux/thunk/authSlice'
function ForgetPassword() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);

    const data = {
      email : values.email
    }
    const checkUser = await dispatch(forgetPassword(data)).unwrap()

    if(!checkUser.status && checkUser.message === "This User Does not exist"){
      message.error(checkUser.message)
    }else{
      navigate("/forget-password-2" , { state : data });
    }
    

    // router.push("/forget-password-2")
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col lg={7}>
            <div className="auth-box">
              <h2 className="auth-heading">Forgot Your Password?</h2>
              <p className="auth-p">Enter your active email address here</p>
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
                  label="Email Address"
                  name="email"
                  rules={[
                    {
                      type: "email",
                      message: "Please input valid email!",
                      // warningOnly: true,
                    },
                    {
                      required: true,
                      message: "Please input your email!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter your email address"
                    className="web-input"
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
                   // onClick={() => navigate("/forget-password-2")}
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
    </Layout>
  );
}

export default ForgetPassword;
