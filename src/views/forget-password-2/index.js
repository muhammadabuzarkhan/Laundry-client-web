import React, { useEffect, useState , useRef } from "react";
import { Layout, Col, Row, Button, Form, Input , message } from "antd";
import { useNavigate , useLocation } from "react-router";
import VerificationInput from "react-verification-input";
import { useDispatch } from 'react-redux'
import { verifyCode , forgetPassword } from '../../redux/thunk/authSlice'

function ForgetPassword2() {
  const navigate = useNavigate();
  const location = useLocation();
  const { email } = location.state
  const dispatch = useDispatch()

  const [loading, setLoading] = React.useState(false);
  const [code, setCode] = useState(null);
  const [seconds, setSeconds] = useState(null); // 60 seconds = 1 minute
  const intervalRef = useRef();


  const onResend = () => {
    
    const data = {
      email :email 
    }
    dispatch(forgetPassword(data))
    setSeconds(60);
    startTimer();
  }


  const onFinish = async () => {
   
    const data = {
      email ,
      code
    }

    const checkedCode = await dispatch(verifyCode(data)).unwrap()
    if(checkedCode === "Invalid Verification Code"){
      message.error(checkedCode);
    }
   else{
     navigate("/forget-password-3" , { state : data });
   }
   
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

 
  // Function to start the timer
  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);
  };
  

  const handleSubmit = () => {
  
  };

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalRef.current);
      // Timer expired logic here
    }
  }, [seconds]);


  return (
    <Layout
      className=""
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      <div className="auth-banner">
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <Col lg={7}>
            <div className="auth-box" style={{ textAlign: "center" }}>
              <h2 className="auth-heading">Verification Code</h2>
              <p className="auth-p">
                An Email Has Been Sent To You With A Verification Code
              </p>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <VerificationInput
                  length={4}
                  placeholder="_"
                  validChars="0-9"
                  inputProps={{ inputMode: "numeric" }}
                  onChange={(val) => {
                    setCode(val);
                  }}
                />
              </div>
              <Button
                className={`${code?.length !== 4 ? "web-btn3" : "web-btn"}`}
                style={{
                  cursor: "pointer",
                  marginTop: "20px",
                }}
                onClick={() => onFinish()}
                disabled={code?.length !== 4}
              >
                Continue
              </Button>
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <>
              {
                !seconds ?
                (
                  <>
                  <Button
                            className="web-btn3"
                            style={{
                              cursor: "pointer",
                              marginTop: "20px",
                            }}
                            onClick={() => onResend()}
                            
                          >
                            Resend
                          </Button>
                  </>
                )
                : 
                <>
                     <p style={{ color:"#FC0004"}}> {"00"+":"+seconds} </p> 

                  </>
              }
                          
                  </>
              </div>
              
            </div>
          </Col>
        </Row>
      </div>
    </Layout>
  );
}

export default ForgetPassword2;
