import { useState, useEffect } from "react";
import {
  Col,
  Row,
  Button,
  Input,
  Form,
  Select,
  DatePicker,
  Upload,
  message,
} from "antd";
import ImageUploading from 'react-images-uploading';
import { useNavigate , useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editProfile , removeProfileImage } from '../../redux/slice/authSlice'
import { Put } from '../../config/api/put'
import { AUTH } from '../../config/constants'
// import DashbordSidebar from "../../../components/DashboardSidebar";
// import { myprofiledata } from "../../../components/Data/data";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import swal from "sweetalert";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
// import { PROFILE, UPLOADS_URL } from "../../../config/constants/api";
// import { Put } from "../../../config/api/put";
import moment from "moment";
// import { addProfileDetails } from "../../../redux/slice/authSlice";
import { FaCamera } from "react-icons/fa";
import dayjs from "dayjs";

// const getBase64 = (img, callback) => {
//   const reader = new FileReader();
//   reader.addEventListener("load", () => callback(reader.result));
//   reader.readAsDataURL(img);
// };
// const beforeUpload = (file) => {
//   const isImage = file.type.startsWith("image/");
//   if (!isImage) {
//     message.error("Invalid Uplaod, You can only upload image files!");
//   }
//   return isImage;
// };

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
};



const DropzoneFiltercards = () => {
  const ImageURL = 'https://react.customdev.solutions:3021/'
  const location = useLocation()
  const { state } = location
  const [states, setState] = useState( state || {});
  const [loading, setLoading] = useState(false);
  
  const [imageUrl, setImageUrl] = useState("");
  const [images, setImages] = useState([]);
  const [form] = Form.useForm();
  const token = useSelector((state) => state?.user?.data?.token);
  const profileDetails = useSelector((state) => state.user.profileDetails);
  const userProfile = useSelector((state) => state.user.data.user);
console.log("images",images)

  useEffect(() => {
    form.setFieldsValue({
      FullName: profileDetails?.fullName,
      email: profileDetails?.email,
      Phone: profileDetails?.phone,
      
    });
  }, []);

console.log("state",state,"states",states , "userProfile",userProfile);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!profileDetails) {
  //     navigate("/createProfile");
  //   }
  // }, []);
  const navigate = useNavigate();

  // const onFinish = (values) => {
  //   const { Country, City, State, Street, FullName, Gender, Phone, DOB } =
  //   values;
  //   const formValuesChanged = () => {
  //     return (
  //       profileDetails?.fullName !== FullName ||
  //       profileDetails?.location?.street !== Street ||
  //       profileDetails?.location?.country !== Country ||
  //       profileDetails?.location?.city !== City ||
  //       profileDetails?.location?.state !== State ||
  //       profileDetails?.gender !== Gender ||
  //       !dayjs(profileDetails?.dateOfBirth).isSame(DOB) ||
  //       profileDetails?.phone !== Phone ||
  //       imageObject
  //     );
  //   };
  //   if(formValuesChanged()){
  //     let data = new FormData();
  //     if (imageObject) {
  //       data.append("image", imageObject);
  //     }
  //     if (FullName) {
  //       data.append("fullName", FullName);
  //     }
  //     if (DOB) {
  //       data.append("dateOfBirth", moment(DOB?.$d).format("YYYY-MM-DD"));
  //     }
  //     if (Phone) {
  //       data.append("mobile", Phone);
  //     }
  //     if (Gender) {
  //       data.append("gender", Gender);
  //     }
  //     data.append(
  //       "location",
  //       JSON.stringify({
  //         country: Country ? Country : profileDetails?.location?.country,
  //         city: City ? City : profileDetails?.location?.city,
  //         state: State ? State : profileDetails?.location?.state,
  //         street: Street ? Street : profileDetails?.location?.street,
  //       })
  //     );
  //     Put(PROFILE.updateMyProfile, token, data, {}, "multipart")
  //       .then((response) => {
  //         if (response.status) {
  //           form.resetFields();
  //           swal("Success", "Profile Updated Successfully", "success");
  //           dispatch(
  //             addProfileDetails({
  //               details: {
  //                 fullName: FullName ? FullName : profileDetails.fullName,
  //                 gender: Gender ? Gender : profileDetails.gender,
  //                 dateOfBirth: DOB
  //                   ? moment(DOB?.$d).format("YYYY-MM-DD")
  //                   : profileDetails.dateOfBirth,
  //                 phone: Phone ? Phone : profileDetails.phone,
  //                 location: {
  //                   country: Country
  //                     ? Country
  //                     : profileDetails?.location?.country,
  //                   city: City ? City : profileDetails?.location?.city,
  //                   state: State ? State : profileDetails?.location?.state,
  //                   street: Street ? Street : profileDetails?.location?.street,
  //                 },
  //                 image: response?.data?.image
  //                   ? response?.data?.image
  //                   : profileDetails?.image,
  //                 email: profileDetails.email,
  //               },
  //             })
  //           );
  //           navigate("/Profile");
  //         }
  //       })
  //       .catch((err) => {
  //         console.log("Error", err);
  //         swal("Error", err?.response?.data?.message, "error");
  //       });
  //   }
  //   else{
  //     swal("System Alert", "No Changes Detected", "error");
  //     return;
  //   }
  
  // };





  // const handleChangepro = (info) => {
  //   if (info.file.status === "uploading") {
  //     setLoading(true);
  //     return;
  //   }
  //   if (info.file.status === "done") {
  //     getBase64(info.file.originFileObj, (url) => {
  //       setImageObject(info.file.originFileObj);
  //       setLoading(false);
  //       setImageUrl(url);
  //     });
  //   }
  //   if (info.file.status === "error") {
  //     message.error("Upload failed. Please try again with a smaller file.");
  //     setLoading(false);
  //   }
  // };
  const handleChangepro = (info) => {
    console.log("info",info)
    if (info.file.status === 'uploading') {
      setLoading(true);
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };


  const onFinish = async (values) => {

    const {firstName , lastName , phoneNumber } = values

    const formData = new FormData()

    formData.append('firstName' , firstName ? firstName : state?.firstName)
    formData.append('lastName' , lastName ? lastName :  state?.lastName)
    formData.append('phoneNumber' , phoneNumber ? phoneNumber : state?.phoneNumber)
    formData.append('email' , state?.email)

    if (images) {
      formData.append('image', images ? images.map(data => data.file).pop() : state.image);
  }

console.log("images",images)
    
    const response = await Put(AUTH.update ,token ,formData , null , "multipart" );
    let Respdata = response.data
    console.log("Respdata",Respdata)
    // dispatch(profileData())

    dispatch(editProfile(Respdata))
    navigate('/profile')
    
  }

  const onChange = (date, dateString) => {
    // console.log(date, dateString);
  };

  const onChange32 = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  const ExistingImage = () => {
    dispatch(removeProfileImage(userProfile))
  }


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
                        <h3 className="main-heading">Edit Profile</h3>
                      </div>
                      <div className="bg-parent">
                      {console.log("imageUrl",state)}
                        <Row
                          gutter={[16, 16]}
                          align={""}
                          justify={"space-between"}
                        >
                          <Col md={10} lg={10} xl={8}>
                            <div className="wrapper-group-1000001858">
                              <>
                                {/* <Upload
                                  name="image"
                                  showUploadList={false}
                                  style={{ position: "relative" }}
                                  onChange={handleChangepro}
                                  beforeUpload={beforeUpload}
                                >
                                  {" "}
                                  <div
                                    style={{
                                      height: "300px",
                                      border: "1px solid gray",
                                      display: "flex",
                                      justifyContent: "center",
                                      alignItems: "center",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {imageUrl ? (
                                      <img
                                        src={imageUrl}
                                        alt="avatar"
                                        style={{
                                          width: "100%",
                                        }}
                                      />
                                    ) : (
                                      <img
                                        src={
                                          ImageURL + state?.image
                                        }
                                        alt="avatar"
                                        style={{
                                          width: "100%",
                                          maxHeight: "360px",
                                          objectFit: "cover",
                                          objectPosition: "center",
                                          filter: "blur(1px)",
                                        }}
                                      />
                                    )}
                                    <FaCamera
                                      style={{
                                        position: "absolute",
                                        color: "rgb(0,127,202)",
                                        fontSize: "25px",
                                      }}
                                    />
                                  </div>{" "}
                                </Upload> */}
                                  
                                {
                                  userProfile?.image ?
                                  (
                                    <>
                                    <img src={ImageURL + userProfile.image} alt="" width="200" height="200" />
                                    <button onClick={ExistingImage}>Discard Image</button>
                                    
                                    </>
                                  )
                                  : 
                                  (
                                    <ImageUploading
                                        value={images}
                                        onChange={onChange32}
                                        maxNumber={1}
                                        dataURLKey="data_url"
                                      >
                                        {({
                                          imageList,
                                          onImageUpload,
                                          onImageRemoveAll,
                                          onImageUpdate,
                                          onImageRemove,
                                          isDragging,
                                          dragProps,
                                        }) => (
                                          // write your building UI
                                          <div className="upload__image-wrapper">
                                            <button
                                              style={isDragging ? { color: 'red' } : undefined}
                                              onClick={onImageUpload}
                                              {...dragProps}
                                            >
                                              Click or Drop here
                                            </button>
                                            &nbsp;
                                            {/* <button onClick={onImageRemoveAll}>Remove all images</button> */}
                                            {imageList.map((image, index) => (
                                              <div key={index} className="image-item">
                                                <img src={image['data_url']} alt="" width="200" height="200" />
                                                <div className="image-item__btn-wrapper">
                                                  <button onClick={() => onImageUpdate(index)}>Update</button>
                                                  <button onClick={() => onImageRemove(index)}>Remove</button>
                                                </div>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                  </ImageUploading>
                                  )

                                }
                             
                              </>
                            </div>
                          </Col>

                          <Col md={14} lg={14} xl={16}>
                            <div className="">
                              <div className="logo-rectangle">
                                <div className="edit-profile-info">
                                  <Form
                                    
                                    className="row g-3"
                                    name="basic"
                                    layout="vertical"
                                    initialValues={{
                                      remember: true,
                                    }}
                                     onFinish={onFinish}
                                    onFinishFailed={onFinishFailed}
                                    autoComplete="off"
                                    form={form}
                                  >
                                    <Row
                                      style={{ width: "100%" }}
                                      gutter={[16, 16]}
                                    >
                                      <Col lg={12} md={12} xs={24}>
                                        <Form.Item
                                          label="firstName"
                                          name="firstName"
                                          rules={[
                                            {
                                              message:
                                                "Please enter your First Name!",
                                            },
                                          ]}
                                        >
                                          <Input
                                            size="large"
                                            placeholder={
                                              userProfile?.firstName
                                            }
                                            className="web-input"
                                            value={userProfile?.firstName}
                                          />
                                        </Form.Item>
                                      </Col>

                                      <Col lg={12} md={12} xs={24}>
                                        <Form.Item
                                          label="lastName"
                                          name="lastName"
                                          rules={[
                                            {
                                              message:
                                                "Please enter your Last Name!",
                                            },
                                          ]}
                                        >
                                          <Input
                                            size="large"
                                            placeholder={
                                              userProfile?.lastName
                                            }
                                            className="web-input"
                                            value={userProfile?.lastName}
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col lg={12} md={12} xs={24}>
                                        <Form.Item
                                          label="Email"
                                          name="Email"
                                        >
                                          <Input
                                            size="large"
                                            placeholder={userProfile?.email}
                                            value={userProfile?.email}
                                            className="web-input"
                                            disabled
                                          />
                                        </Form.Item>
                                      </Col>
                                      <Col lg={12} md={12} xs={24}>
                                        <Form.Item
                                          label="phoneNumber"
                                          name="phoneNumber"
                                        >
                                          <Input
                                            size="large"
                                            placeholder={userProfile?.phoneNumber}
                                            className="web-input"
                                            type="number"
                                            value={userProfile?.phoneNumber}
                                          />
                                        </Form.Item>
                                      </Col>
                                     
                                      
                                      
                                     
                                     

                                     
                                      <div
                                        className=""
                                        style={{ textAlign: "center" }}
                                      >
                                        <Button
                                          type=""
                                          htmlType="submit"
                                          className="btn web-btn px-5"
                                        >
                                          Update
                                        </Button>
                                      </div>
                                    </Row>
                                  </Form>
                                </div>
                              </div>
                            </div>
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
