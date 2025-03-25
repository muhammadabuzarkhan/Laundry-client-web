import { useEffect, useState , useCallback, useMemo } from "react";
import {
  Col,
  Row,
  Button,
  message,
  Steps,
  theme,
  Input,
  Form,
  Flex,
  Radio,
  Modal,
  Image,
  Divider,
  Select, List,Calendar ,
  Tag,
  TimePicker,
  DatePicker,
  Switch 
} from "antd";
import moment from 'moment';
import { GoogleMap, useJsApiLoader , Marker  } from '@react-google-maps/api';
import { Link  } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { useNavigate } from "react-router";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { createOrder } from '../../redux/thunk/orderSlice'
import { clearCart } from '../../redux/slice/serviceSlice'
import { CirclesWithBar , BallTriangle } from 'react-loader-spinner'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { getReferalDetail } from '../../redux/thunk/referalCodeSlice'
import {  getallServices } from '../../redux/thunk/serviceSlice'
import { RedeemCoupenCode } from '../../redux/thunk/coupenSlice'
import {
  FaLocationArrow,
  FaBuilding,
  FaCheckCircle,
  FaCalendar,
  FaClock,
} from "react-icons/fa";
import { clearOrders , addingOrderWithSteps} from '../../redux/slice/orderSlice'
import ServicesAdd from "../../components/servicesAdd";
import { BsBuildingsFill } from "react-icons/bs";
import { BiSolidShoppingBagAlt, BiSolidDoorOpen } from "react-icons/bi";
import { ImageUrl } from "../../config/helper";
import { useSelector } from 'react-redux'
import axios from 'axios'
import { Elements, useStripe, useElements, CardNumberElement, CardExpiryElement, CardCvcElement } from '@stripe/react-stripe-js';
const onChange = (e) => {
  console.log(`radio checked:${e.target.value}`);
};


const containerStyle = {
  width: '400px',
  height: '400px'
};

const containerStyle2 = {
   width: '600px',
  height: '400px'
};

const OPTIONS = {
  minZoom: 4,
  maxZoom: 15,
}



console.log("-----window----->" , window.location.href);



function Login({stripePromise}) {
  const [form] = Form.useForm();
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch()
  const navigate = useNavigate()
  console.log("stripePromise kon  ===>",stripePromise)



  const { token } = theme.useToken();
  const [startDate, setStartDate] = useState(null);

  const [currentCenter2, setCurrentCenter2] = useState({
    lat : 0,
    lng : 0
  });
  const [bufferDays, setbufferDays] = useState(0);
  const [endDate, setEndDate] = useState(null);
  const [startTime , setStartTime] = useState("")
  const [endTime , setEndTime] = useState("")
  const [newendDate, setNewEndDate] = useState(new Date());
  const [current, setCurrent] = useState(0);
  const [modal2Open, setModal2Open] = useState(0);
  const [modal3Open, setModal3Open] = useState(0);
  const [modaldata ,Setmodaldata] = useState(null)
  const [recommendPostcode , SetrecommendPostcode] = useState([])
  const [isGoogleMapLoaded, setIsGoogleMapLoaded] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [selectedValue , setselectedValue]  = useState([])
  const [addressDetails , setaddressDetails] = useState("")
  const [addressDetailsboolean , setaddressDetailsboolean] = useState(false)
  const [erroraddressDetails , seterroraddressDetails] = useState("")
  const [addressType , SetaddressType] = useState("")
  const [totals , Settotal] = useState("")
  const [error ,Seterror] = useState("")
  const [nexterror ,Setnexterror] = useState("")
  const [carterror ,Setcarterror] = useState("")
  const [totalError , SettotalError] = useState("")
  const [customDandT , SetcustomDandT] = useState(false)
  const [checkfields ,Setcheckfields] = useState(false)
  const { cart , user , order } = useSelector((state) => state )
  const {isLoading  , data , status } = order
  const userToken = user.data.token
  const cartItems = cart?.serviceItems?.allcategory
  const extraService = cart?.cartItems?.every((item) => 
    item?.category === "665995351eef6eae3c2b078d" && 
    item?.categoryData?._id === "665995351eef6eae3c2b078d" &&  
    item?.categoryData?.title === "Service Wash")
  const reduxSteps = order?.currentOrder
  const ImageURLS = 'https://react.customdev.solutions:3021/'
  const [desc ,Setdesc] = useState("")
  const googleKey = 'AIzaSyBECY2aNK5YkXshm_ZEqtZY0M_hcJT65Iw'

  const center = {
    lat: 51.529736,
    lng: -0.086555
  };



  

  const [currentCenter, setCurrentCenter] = useState(center);

  const [contactDetails , setContactDetails] = useState({
    mode : "" ,
    firstName : user ? user?.data?.user?.firstName : "",
    lastName : user ? user?.data?.user?.lastName : "",
    phoneNumber : user ? user?.data?.user?.phoneNumber : "",
    email : user ? user?.data?.user?.email : "",
  })

  const [card,Setcard] = useState({
    CardholderName : user?.data?.user?.firstName + " " + user?.data?.user?.lastName ,
    Cardnumber : "",
    Expirydate : "",
    CVC : ""
  })

  const [collectNote , setCollectNote] = useState("") 
  const [delieverNote , setDelieverNote] = useState("")
  const [driverTip , SetdriverTip] = useState(0)
  const [renderKey, setRenderKey] = useState(0);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey
  })
 
  const [map, setMap] = useState(null)
  const [markers, setMarkers] = useState([]);
  const [markers2, setMarkers2] = useState([]);

  console.log("model marker" , markers);

  console.log("location marker12" , markers2);
  

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds , map);
    
    setMap(map)
    
  }, [])




  // const onLoads = useCallback(function (mapInstance) {
  //   setMap(mapInstance);

  //   mapInstance.addListener('center_changed', () => {
  //     const center = mapInstance.getCenter();
  //     console.log("center====>",center);
      
  //     setCurrentCenter({ lat: center.lat(), lng: center.lng() });
  //   });

  //   mapInstance.addListener('zoom_changed', () => {
  //     setCurrentZoom(mapInstance.getZoom());
  //   });
  // }, [currentCenter]);

  const onLoads = useCallback((mapInstance) => {
    setMap(mapInstance);
    if(currentCenter){
      mapInstance.fitBounds(new window.google.maps.LatLngBounds(currentCenter));
      setIsGoogleMapLoaded(true)
    }
  }, [currentCenter]);


  const onLoades = useCallback((mapInstance) => {
    setMap(mapInstance);
    
    if (currentCenter) {
      const bounds = new window.google.maps.LatLngBounds(currentCenter);
      mapInstance.fitBounds(bounds);
  
      // Adjust the zoom level manually after fitting bounds
      const zoomLevel = 8; // Change this to your desired zoom level
      mapInstance.setZoom(zoomLevel);
    }
  }, [currentCenter]);


  
  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

 
  

 
  const addMarker = (e) => {
    const lat = e.latLng.lat();
    const lng = e.latLng.lng();
    const newMarker = { lat, lng };
    console.log("newMarker",newMarker);
    
    // setMarkers([newMarker]);
    // setMarkers2(newMarker)

    setMarkers((prevMarkers) => [newMarker]);
    setMarkers2((prevMarkers) => [newMarker]);

   

    // forceRerender();
  };
  
  useEffect(() => {
    console.log("Markers2 updated:", markers2);
  }, [markers2]);

  const newMarker = useMemo(()=>{
    return markers2
  },[markers2, markers , isLoaded])

  //console.log("newMarker",newMarker);
  

  // const forceRerender = () => {
  //   setRenderKey((prevKey) => prevKey + 1);
  // };


//console.log("inputValue",inputValue , "recommendPostcode",recommendPostcode)


  useEffect(() => {
    if (user && user.data && user.data.user) {
      const { firstName, lastName, phoneNumber, email } = user.data.user;
      setContactDetails({ mode: "", firstName, lastName, phoneNumber, email });
    } else {
      // Handle the guest user case
      setContactDetails({
        mode: "guest",
        firstName: "Guest",
        lastName: "",
        phoneNumber: "",
        email: ""
      });
    }
  }, [user]);


  const FetchServices =  () => {
    dispatch(getallServices())
}



  useEffect(() => {
    form.setFieldsValue(contactDetails);
  }, [contactDetails, form]);

  const handleChangeStart = (value) => {
    console.log("123value",value);
    
    setStartTime(value)
  };
  const handleChangeEnd = (value) => {
    console.log("12344value",value);
    setEndTime(value)
  };
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const { TextArea } = Input;
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    //console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const autoComplete_Address = async (e) => {
    const { value } = e.target
    if(value.trim() === '' || value == null){
      setInputValue('')
      return 
    }
    setInputValue(value)
    // const url = `https://api.postcodes.io/postcodes/${value}/autocomplete`
    // const postCodes = await axios.get(url)
    // if(postCodes?.data?.result == null){
    //   return 
    // }


    const url = 'https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws';

    const formdata = new FormData();

    formdata.append('Key', "AG56-NB85-BC21-KB22")
    formdata.append('Text' , value)
    formdata.append('Countries' , 'GB')
    formdata.append('Limit' , '5')
    formdata.append('Language' , 'en-gb')

    let config = {headers: { 'Content-Type': 'multipart/form-data' }}

    const resultSearch = await axios.post(url , formdata, config)
    SetrecommendPostcode(resultSearch?.data?.Items)
  }
  

  const handleSelect = async (item) => {
    console.log("xxsss11" , item);
    let codes = item?.Description?.split('-')[0]
    let code = codes.trim()
    
    
    seterroraddressDetails(null)
    setInputValue(item?.Description?.split('-')[0])
    setInputValue2(code.split('London')[1])
    SetrecommendPostcode([])
    await placeSearch(item?.Id)
    
  }

  const placeSearch = async (id) => {
    console.log("aaaaaaaaa" , id);
    
    try {
        // const url = 'https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws';

        // const formdata = new FormData();

        // formdata.append('Key', "AG56-NB85-BC21-KB22")
        // formdata.append('Text' , code)
        // formdata.append('Countries' , 'GB')
        // formdata.append('Limit' , '5')
        // formdata.append('Language' , 'en-gb')

        // let config = {headers: { 'Content-Type': 'multipart/form-data' }}

        // const resultSearch = await axios.post(url , formdata, config)
        
        // let id =  resultSearch?.data?.Items?.map(data => data?.Id).pop()
        

        const urls = 'https://api.addressy.com/Capture/Interactive/Find/v1.10/json3.ws';

        const Formdata = new FormData();

        Formdata.append('Key', "AG56-NB85-BC21-KB22")
        Formdata.append('Container' , id)
        Formdata.append('Countries' , 'GB')
        Formdata.append('Limit' , '5')
        Formdata.append('Language' , 'en-gb')

        let config = {headers: { 'Content-Type': 'multipart/form-data' }}

        const FullAddress = await axios.post(urls , Formdata, config)


        if(!FullAddress){
          setselectedValue("")
         
        }
     // console.log("FullAddress",FullAddress);
     let ui = FullAddress?.data?.Items?.map(data => data).pop()
     
     if(FullAddress?.data?.Items.length === 0){
      message.error("No address details found")
      setaddressDetailsboolean(true)
     }
     
        setselectedValue(FullAddress?.data?.Items?.map(data => data?.Text  + " " + data?.Description) )
      console.log("inputValue2",ui);
      
        await GetLatLongonPostcode(FullAddress?.data?.Items?.map(data => data?.Description.split('London')[1]).pop());
       
       
    } catch (err) {
        console.error("Error:", err);
    }
}

 console.log("selectedValue",inputValue2);


const handlePostalCodeSelect = (item) => {
  setaddressDetails(item)
  setselectedValue("")
}

let totalsNow;


  const GoogleMapGeoLocationApi = async (markers) => {
    let geo = markers.pop()
    let lat = geo.lat
    let lng = geo.lng
    //console.log(geo  , lat  , lng)
    const apiKey = googleKey;
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
  
      if (data.status === 'OK' && data.results.length > 0) {
        const formattedAddress = data.results[0].formatted_address;
         let code = formattedAddress.split(',')
         
          let postcode = code[code.length - 2].replace(" London ","")
        
        setInputValue(postcode)
        setaddressDetails(formattedAddress)
        setCurrentCenter({ lat: lat, lng: lng });
        return formattedAddress;
      } else {
        throw new Error('Unable to retrieve address');
      }
    } catch (error) {
      console.error('Error retrieving address:', error);
      return null;
    }
  }

  const onSetChange = (e) => {
    const { value } = e.target
    if(value.trim() === '' || value == null){
      setaddressDetails('')
      return 
    }else{
      setaddressDetails(value || addressDetails);
    }
  };

  const onChange2 = (date, dateString) => {
   
    if(dateString){
      setStartDate(new Date(dateString))
    }else{
      setStartDate(null)
    }
    
  };

  // const disabledDate = (current) => {
  //   // Get today's date
  //   const today = new Date();

  //   // Disable dates before today (including today)
  //   return current && current < today.setHours(0, 0, 0, 0);
  // };

  const disabledDate = (current) => {
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset today's time to midnight
  
    // Calculate the date 15 days from today
    const fifteenDaysFromNow = new Date();
    fifteenDaysFromNow.setDate(today.getDate() + 15); // Add 15 days
  
    // Disable dates that are before today or after 15 days from today
    return current < today || current > fifteenDaysFromNow;
  };
  

  const EndDatereflectionWithStartDate = () => {
    let MaxDays = Math.max(...cart.cartItems.map((data) => {
      const { categoryData } = data
      const  { NoOfDays } = categoryData
      return NoOfDays
    })
    );

    //console.log("startDate",startDate,"MaxDays",MaxDays);

    if(startDate){
      setbufferDays(MaxDays)
      setEndDate(new Date(startDate.getTime() + MaxDays * 24 * 60 * 60 * 1000))
    }else{
      setEndDate(null)
    }
  }


  const disabledDates = (current) => {
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset today's time to midnight

    // Calculate the maximum days allowed from the cart data
    let maxDays = Math.max(
        ...cart.cartItems.map((data) => {
            const { categoryData } = data;
            const { NoOfDays } = categoryData;
            return NoOfDays;
        })
    );

    // Calculate the maximum selectable date
    const maxDate = new Date(startDate);
    maxDate.setDate(startDate.getDate() + maxDays); // Add maxDays to today's date

    // Disable dates that are before today or after the maxDate
   
    return current && (current < today || (current >= today && current <= maxDate));
};

  
  const onChange3 = (date, dateString) => {
    
   if(dateString){
     setEndDate(new Date(dateString))
   }else{
    setEndDate(null)
   }
    
  };

  const handleContactDetails = (field , value) => {
    setContactDetails((prev) => ({
      ...prev ,
      [field] : value
    }))
  }


  const handleChange = (field, event) => {
   // console.log(field, event);
    Setcard((prev) => ({
      ...prev,
      [field]: event.complete,
    }));

    if (event.error) {
      
     // console.log(event.error.message);
    } else {
      
      console.log('');
    }
  };




  useEffect(() => {
    EndDatereflectionWithStartDate()
  },[startDate])
  
  const handleCollectionNote = (value) => {
    setCollectNote(value)
  }

  const handleDeliveryNote = (value) => {
    setDelieverNote(value)
  }


   const serviceTaken =  useSelector((state) => state.cart.cartItems)

   const uniqueFilteredItems = [];
   const seenCategoryIds = new Set();
 
   serviceTaken.forEach(item => {
     if (!seenCategoryIds.has(item.category)) {
       uniqueFilteredItems.push(item);
       seenCategoryIds.add(item.category);
     }
   });

   

  const newServices =  serviceTaken.map(data => {
      if(data.category){
        
          let products = [];
          products.push({
            productId : data.id  ,
            quantity : data.quantity
          })
         
          return{
            categoryId : data.category,
            products
          }
      }
    })

   let gross_Total = useSelector((state) => state.cart.cartItems)

   let total = gross_Total.map(data => {
    const { price  , subprice} = data
    return  !subprice && price ? price : (subprice && price ? subprice : null)

   })

   const elementStyles = {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4"
      },
      border: "5px solid black",
      padding: "10px",
      borderRadius: "4px"
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a"
    }
  };

  const elementOptions = {
    style: elementStyles,
  };
  
//console.log("contactDetails",contactDetails)




  const createOrders = async (e) => {

    e.preventDefault();
    // const stripe = await stripePromise;

    const cardData = {
      number: card.Cardnumber,
      exp_month: card.Expirydate.split('/')[0],
      exp_year: card.Expirydate.split('/')[1],
      cvc: card.CVC,
    };


    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error, token } = await stripe.createToken(cardElement);

    const [ a , b , c] = [...reduxSteps]

    const { addressDetails : addressDetailss , addressType : addressTypes , inputValue : inputValues } = a
    const {
      startTime : startTimes , startDate : startDates , collectNote :collectNotes , 
      endDate : endDates , endTime : endTimes , delieverNote : delieverNotes , desc :descs
    } = c
    
    // console.log("24444" ,
    //   addressDetailss , addressTypes , inputValues,

    //   startTimes , startDates , collectNotes , endDates , endTimes , delieverNotes , descs
    // )

    let discountAmount = (total.reduce((acc , data) => acc + data , 0)) * discount

    const dats = {
       services : newServices,
      collectionTime : [
        { 
          date  : !startDate ? startDates : startDate,
          time  : !startTime ? startTimes : startTime, 
          instructions : !collectNote ? collectNotes : collectNote
        }
      ],
      DeliveryTime : [
        { 
          date  :   !endDate ? endDates  : endDate,
          time  :   !endTime ?  endTimes : endTime,
          instructions :  !delieverNote ? delieverNotes : delieverNote
        }
      ],
      stripetoken : token.id,
      description : !desc ? descs : desc ,
      postcode : !inputValue ? inputValues : inputValue ,
      address : !addressDetails ? addressDetailss : addressDetails ,
      addressType :  "home",
      CardholderName :  card.CardholderName ,
      Cardnumber :  token.card.last4      ,
      Expirydate :  `${token.card.exp_month}`+"/"+`${token.card.exp_year}`,
      grossTotal : total.reduce((acc , data) => acc + data , 0),
      serviceFee : 1.99,
      driverTip : Number(driverTip),
      Total :  Math.round(useCode ? useCode : discount ?  (total.reduce((acc , data) => acc + data , 0)) - discountAmount : (total.reduce((acc , data) => acc + data , 0)) + 1.99 + driverTip) ,
      email : contactDetails?.email ,
      uid : !userToken ? null : user?.data?.user?._id,
      isGuest : !userToken ? true : false
      
    }

    const data = {
      dats
    }
   // console.log("datadata",data)

   dispatch(createOrder(data))
   dispatch(clearCart())
   message.success("Processing complete!")
    // const { status  } = dispatch(createOrder(data)).unwrap()

    // if(status){

    //   if(!userToken){
    //     message.success("Processing complete!")
    //     message.success("Dear Guest User Please check your mail for login")
    //     dispatch(clearCart())
    //     dispatch(clearOrders())
    //     navigate("/")
    //   }else{
    //     dispatch(clearCart())
    //     dispatch(clearOrders())
    //     message.success("Processing complete!")
    //     navigate("/myOrders")
    //   }
    // }
   

    
    


  }
 
  useEffect(() => {
    if(status){
      if(!userToken){
        message.success("Dear Guest User Please check your mail for login")
        navigate("/thanks", {state : data})
        dispatch(clearOrders())
      }else{
        navigate("/thanks", {state : data})
        dispatch(clearOrders())
      }
    }
  },[status])
 

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#aab7c4"
        },
        backgroundColor: "#f6f9fc", // Example background color
        border: "1px solid #ddd", // Example border
        padding: "10px", // Example padding
      },
      invalid: {
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  useEffect(() => {
    if(!addressDetails){
      Seterror("Address Details is required")
    }

    if(inputValue && addressDetails || reduxSteps.length){
     
      Seterror(null)
    }

   


  },[addressDetails])

  useEffect(() => {
    if(current === 2 || current === 3){
      totalsNow = Math.round(total.reduce((acc , data) => acc + data , 0) + 1.99 + driverTip)
      Settotal(totalsNow < 20 ? null : totalsNow)
    }
  },[current  , driverTip])


  useEffect(() => {
   
    if(current === 3 && !totals){
      SettotalError("Minimum order is £20")
    }
    
    if(current === 3 && totals) {
      SettotalError(null)
    }
  },[ current , totals , driverTip])

  //console.log("totalError",totalError , current );
  

  useEffect(() => {
    if(current === 2 && !desc && !startDate && !startTime && !collectNote && !delieverNote  && !endTime) {
      Setnexterror("Description is required")
    }
   
    if(current === 2 && desc && startDate && startTime && collectNote && delieverNote  && endTime || reduxSteps.length){
      Setnexterror(null)
    }
  },[current,desc,addressDetails,startDate,startTime,collectNote,delieverNote,endTime])

  useEffect(() => {

    if(current === 0){
      Setcarterror(null)
    }
   

    if(current === 1 && !cart?.cartItems?.length > 0) {
      FetchServices()
      Setcarterror("Your Cart is Empty")
    }
   
    if(current === 1 && cart?.cartItems?.length > 0){
      Setcarterror(null)
    }
  },[current,cart.cartItems])


  useEffect(() => {
    if(inputValue  && addressDetails && current === 1){
      const step1 = {
        step : '1',
        inputValue , 
       
        addressDetails , 
        current
      }
      dispatch(addingOrderWithSteps(step1))
    }
  },[addressDetails && current === 1])

  useEffect(() => {
    if(cart?.cartItems.length > 0 && current === 2){
      const step2 = {
        step : '2',
        cart : cart?.cartItems ,
        current 
      }
      dispatch(addingOrderWithSteps(step2))
    }
  },[current === 2])

  useEffect(() => {
    if(
      startDate && startTime && endDate &&
       endTime && delieverNote && collectNote && desc && current === 3
      ){
      const step3 = {
        step : '3',
        startDate,
        startTime,
        collectNote,
        endDate,
        endTime,
        delieverNote,
        desc,
        current
      }
      dispatch(addingOrderWithSteps(step3))
    }
  },[ current === 3])


  useEffect(() => {
    if(
       contactDetails?.firstName && contactDetails.lastName &&
       contactDetails?.email && contactDetails?.phoneNumber &&
       contactDetails?.mode && current === 4
      ){
      const step4 = {
        step : '4',
        firstName : contactDetails?.firstName ,
        lastName : contactDetails.lastName ,
        email : contactDetails?.email,
        phoneNumber : contactDetails?.phoneNumber,
        mode : contactDetails?.mode,
        current
      }
      dispatch(addingOrderWithSteps(step4))
    }
  },[current === 4])

//  console.log("checkfields",checkfields , "current",current)

  useEffect(() => {
    if(reduxSteps.length > 0 ){
      let reduxStep = reduxSteps?.map(data => data?.current)?.pop()
      setCurrent(reduxStep)
    }
  },[])

 
const [discount, setDiscount] = useState([]);

  useEffect(() => {
    if(current === 4) {
      const newReferal = async () => {
        console.log("window.location.href",window.location.href);
        let codes = window.location.href.split('code=').pop()
        let code = codes.split('&').shift()
        let user = window.location.href.split('sid=').pop()
  
        const bodyData = {
          user
        }
    
        const data = {
          code : code,
          bodyData,
          token : userToken
        }
    
        let referalDiscount = await dispatch(getReferalDetail(data)).unwrap()
        if(referalDiscount?.status){
          setDiscount(referalDiscount?.data?.discount)
          message.success(referalDiscount?.message)
        }
        console.log("referalDiscount",referalDiscount);
        
      }

      newReferal()

    }


  },[current === 4])


  const GetLatLongonPostcode = async (code) => {
    console.log("ssss",code);
    
    if (!code) return;
    const url = `https://api.postcodes.io/postcodes?q=${code}`;
    try {
      const getLatLong = await axios.get(url);
      let position = getLatLong?.data?.result?.[0];
      if (position) {
        const { latitude, longitude } = position;
        setCurrentCenter({ lat: latitude, lng: longitude });
        const newMarker = { lat : latitude, lng : longitude };
        setMarkers2((prevMarkers) => [newMarker]);
      }
    } catch (err) {
      console.error("Error fetching lat long:", err);
    }
  }

  const [redeemCode , SetredeemCode] = useState([])
  const [useCode, SetuseCode] = useState(null)
  const handleRedeemCode = async (redeemCode) => {
  
    const data = {
      code : redeemCode
    }

    let checked = await dispatch(RedeemCoupenCode(data)).unwrap()

    console.log("checked123",checked);
    

    if(!checked.status){
      message.error(checked?.message)
    }else{
      let totalAmount = Math.round(total.reduce((acc , data) => acc + data , 0))
      if(totalAmount > checked?.data?.redeemCoupen?.discount){
        let discount = Math.round(totalAmount - checked?.data?.redeemCoupen?.discount)
        SetuseCode(discount)
        message.success(checked?.message)
      }else{
        message.info("Discount is greater than total amount")
      }
       


    }
  }


  //console.log("currentCenter2" , currentCenter2);
  // useEffect(() => {
  //   GetLatLongonPostcode()
  // },[inputValue , addressDetails])

  const steps = [
    {
      title: "Find address",
      content: (
        <>
          <h4 className="f-40">Find your address</h4>
          {
            userToken ? 
            null :
            (
              <h6 className="f-14" style={{ textAlign: "end" }}>
                <Link to={"/login"}>LOGIN</Link> for save addresses
              </h6>
            ) 
          }
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
             className="customForm"
          >
            <Form.Item
              name="postcode"
              rules={[
                {
                  required: true,
                  message: "Please input UK postcode!",
                },
              ]}
            >
              <Input
                size="large"
                placeholder="Enter UK postcode, such as E2 0HE"
                className="web-input"
                value={inputValue}
                onChange={(e) => autoComplete_Address(e) }
              />
             {recommendPostcode.length > 0 ?
              (
                <div style={{ height: "200px" , overflowY:"scroll", width:"50%"}}> 
                    <List
                      size="small"
                      bordered
                      dataSource={recommendPostcode}
                      renderItem={(item) => (
                        <List.Item 
                          onClick={() => handleSelect(item)}
                          >
                            {item?.Description?.split('-')[0]}
                          </List.Item>
                      )}
                    />
                </div>
                ) : " "}
                <div style={{ padding : recommendPostcode.length > 0 ? "20px" : "0px"}}></div>
            </Form.Item>
            
            {/* <div style={{ paddingBottom: "20px" }}>
              <span className="step-icons">
                <FaLocationDot /> Postcode search
              </span>
              <span className="step-icons" onClick={() => setModal2Open(true)}>
                <FaLocationArrow /> Map search
              </span>
            </div> */}
              
              
              {
                selectedValue.length > 0 && (
                  <>
                    <div style={{ height: "200px" , overflowY:"scroll", width:"50%"}}>
                      <List
                        size="small"
                        bordered
                        dataSource={selectedValue}
                        renderItem={(item) => (
                          <List.Item 
                            onClick={() => handlePostalCodeSelect(item)}
                            >
                            {item}
                          </List.Item>
                        )}
                      />
                    </div>
                  </>
                )
              }
              

              
          
              
            {
              erroraddressDetails && (
                <>
                <div>
                  <p style={{color:"red" , fontFamily:"Inter", fontSize:"15px", fontWeight:"600"}} >{erroraddressDetails}</p>
                </div>
                <br /> 
                </>
              )
            }
             <div style={{ padding : selectedValue.length > 0 ? "20px" : "0px"}}></div>
            <Input
                  size="large"
                  placeholder="Adds address details (apartment name, number, floor ...)"
                  className="web-input"
                  onChange={(e) => !addressDetailsboolean ? onSetChange(e) : setaddressDetails(e.target.value)}
                  value={addressDetails}
                />


              <div style={{ padding : '20px'}}></div>
          </Form>

          <div>

        


            
            {/* {console.log("addressDetails",addressDetails , "error",error)} */}
            {/* <h5 className="f-16" style={{ padding: "10px 20px" }}>
              Choose address type
            </h5>
            <Flex vertical gap="middle" className="multi-radio">
              <Radio.Group 
              onChange={(e) =>{ 
                
               
               
                SetaddressType(e.target.value) 

                
                }} defaultValue="a">
                <Radio.Button value="home">
                  <BiSolidShoppingBagAlt /> Home
                </Radio.Button>
                <Radio.Button value="office">
                  <FaBuilding /> OFFICE
                </Radio.Button>
                <Radio.Button value="hotel">
                  <BsBuildingsFill /> HOTEL
                </Radio.Button>
              </Radio.Group>
            </Flex>
            <h5 className="f-20" style={{ padding: "10px 20px" }}>
              Choose building entrance
            </h5> */}
               
            {
              !addressDetails ?
              (
               null
              )
              : 
              (
                !isGoogleMapLoaded ?
                (
                  <>
                     {
                      
                      (() => {
                        const addressParts = addressDetails?.split(' ') || [];
                        const postcode = addressParts.slice(-2).join('  '); // Last and second last as postcode
                        const city = addressParts.slice(-3, -2).join(' '); // Third last as city
                        const town = addressParts.slice(0, -3).join(' '); // Remaining as town

                        console.log("Postcode:", postcode);
                        console.log("City:", city);
                        console.log("Town:", town);

                        return (
                          <>
                            {/* <div style={{ padding:"10px" , fontSize : 16}}>Town : {town}</div>
                            <div style={{ padding:"10px" , fontSize : 16}}>City : {city}</div>
                            <div style={{ padding:"10px" , fontSize : 16}}>PostCode : {postcode}</div> */}

                              <div className="info-container">
                                    <div className="info-item">
                                      <strong>Address:</strong> {town}
                                    </div>
                                    <div className="info-item">
                                      <strong>City:</strong> {city}
                                    </div>
                                    <div className="info-item">
                                      <strong>PostCode:</strong> {postcode}
                                    </div>
                                  </div>
                          </>
                        );
                      })()
                    }
                  </>
                )
                :
                isGoogleMapLoaded &&  isLoaded  && (
                  <GoogleMap
                    // key={renderKey}
                    mapContainerStyle={containerStyle2}
                    center={markers2.length ? markers2[0] : currentCenter || center} // Center on marker or fallback to default
                    options = {OPTIONS}
                    onLoad={onLoads}

                    onUnmount={onUnmount}
                  >
                   
                  {/* {console.log("ggg16661113333")} */}
                    {
                    markers2 && markers2?.map((marker, index) => (
                      <Marker key={index} position={{ lat: marker.lat, lng: marker.lng }} />
                    ))}
                  
                   
                  </GoogleMap>
                )
                
                  
              )
            }
          </div>
        </>
      ),
    },
    {
      title: "services",
      content: (
        <>
          <h4 className="f-40">What services do you need?</h4>
        {
          cartItems && cartItems.length > 0 ? 
          cartItems?.map((data) => (
            <>
            <div className="step-service-card">
            <Row style={{ alignItems: "center", padding: "20px" }}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Image
                  preview={false}
                  src={ImageURLS+data.catImage}
                  alt="paymentcards"
                />
               
                <h5 className="f-28">{data.title}</h5>
                <p>
                  <strong>£ {data.price} </strong> {data.priceDescription}
                </p>
              </Col>
              {
                data?._id === "6659994b3c1edcdfb89618b0" ?
                null :
                (
                  <>
                    <Col lg={12} md={12} sm={12} xs={24} style={{ textAlign: "end" }}>
                      <Button
                        className="web-btn"
                        style={{
                          cursor: "pointer",
                          margin: "10px 0",
                          gap: "10px",
                        }}
                        onClick={() => {
                          setModal3Open(true)
                          Setmodaldata(data)
                          }}
                      >
                        ADD SERVICES
                      </Button>
                    </Col>
                  </>
                )
              }
            </Row>
            <div className="step-service-card-gray">
              <h6 className="f-20">What’s included</h6>
                    <ul className="service-checks">
                        {
                          data.tags.map((item) => {
                            return(
                                <li>
                                  <FaCheckCircle /> {item}
                                </li>
                            )
                          })
                        }
                    </ul>
              <p className="forgot-text">Any special requests?</p>
            </div>
          </div>
            </>
          ))
          :
          (
            <>
              <div>
              <BallTriangle
                  height={100}
                  width={100}
                  radius={5}
                  color="#4fa94d"
                  ariaLabel="ball-triangle-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  />
              </div>
            </>
          )
        }

          {/* <div className="step-service-card">
            <Row style={{ alignItems: "center", padding: "20px" }}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Image
                  preview={false}
                  src={ImageUrl("service-icon-2.png")}
                  alt="paymentcards"
                />
                <h5 className="f-28">Wash</h5>
                <p>
                  <strong>£ 20.98 </strong> Price Per Weight / 8 KG In Laundry
                </p>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24} style={{ textAlign: "end" }}>
                <Button
                  className="web-btn"
                  style={{
                    cursor: "pointer",
                    margin: "10px 0",
                    gap: "10px",
                  }}
                  onClick={() => setModal3Open(true)}
                >
                  SERVICE ADDED
                </Button>
              </Col>
            </Row>
            <div className="step-service-card-gray">
              <h6 className="f-20">What’s included</h6>
              <ul className="service-checks">
                <li>
                  <FaCheckCircle /> WASH
                </li>
                <li>
                  <FaCheckCircle /> TUMBLE - DRY
                </li>
                <li>
                  <FaCheckCircle /> IN A BAG
                </li>
                <li>
                  <FaCheckCircle /> Mixed Wash 30 C
                </li>
              </ul>
              <p className="forgot-text">Any special requests?</p>
            </div>
          </div>

          <div className="step-service-card">
            <Row style={{ alignItems: "center", padding: "20px" }}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Image
                  preview={false}
                  src={ImageUrl("service-icon-3.png")}
                  alt="paymentcards"
                />
                <h5 className="f-28">Wash and iron</h5>
                <p>
                  <strong>£ 30.98 </strong>Price per item
                </p>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24} style={{ textAlign: "end" }}>
                <Button
                  type="button"
                  htmlType="submit"
                  className="web-btn2"
                  style={{
                    cursor: "pointer",
                    margin: "10px 0",
                    gap: "10px",
                  }}
                >
                  + ADD SERVICE
                </Button>
              </Col>
            </Row>
            <div className="step-service-card-gray">
              <h6 className="f-20">What’s included</h6>
              <ul className="service-checks">
                <li>
                  <FaCheckCircle /> WASH
                </li>
                <li>
                  <FaCheckCircle /> TUMBLE - DRY
                </li>
                <li>
                  <FaCheckCircle /> IN A BAG
                </li>
                <li>
                  <FaCheckCircle /> Mixed Wash 30 C
                </li>
              </ul>
              <p className="forgot-text">Any special requests?</p>
            </div>
          </div>
          <div className="step-service-card">
            <Row style={{ alignItems: "center", padding: "20px" }}>
              <Col lg={12} md={12} sm={12} xs={24}>
                <Image
                  preview={false}
                  src={ImageUrl("service-icon-1.png")}
                  alt="paymentcards"
                />
                <h5 className="f-28">Dry cleaning</h5>
                <p>
                  <strong>£ 30.98 </strong>Price per item
                </p>
              </Col>
              <Col lg={12} md={12} sm={12} xs={24} style={{ textAlign: "end" }}>
                <Button
                  type="button"
                  htmlType="submit"
                  className="web-btn2"
                  style={{
                    cursor: "pointer",
                    margin: "10px 0",
                    gap: "10px",
                  }}
                >
                  + ADD SERVICE
                </Button>
              </Col>
            </Row>
            <div className="step-service-card-gray">
              <h6 className="f-20">What’s included</h6>
              <ul className="service-checks">
                <li>
                  <FaCheckCircle /> WASH
                </li>
                <li>
                  <FaCheckCircle /> TUMBLE - DRY
                </li>
                <li>
                  <FaCheckCircle /> IN A BAG
                </li>
                <li>
                  <FaCheckCircle /> Mixed Wash 30 C
                </li>
              </ul>
              <p className="forgot-text">Any special requests?</p>
            </div>
          </div> */}
        </>
      ),
    },
    {
      title: "Collection",
      content: (
        <>
          <h4 className="f-40">Collection & delivery</h4>
          <div className="step-tag">
            There is high demand in your area, so please place your order within
            30 minutes.
            <p>
              <FaClock />
            </p>
          </div>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
          >
            <h6 className="f-20" style={{ margin: "10px 0" }}>
              Collection time
            </h6>
            <Row gutter={[16, 16]} className="for-gutter-0">
              <Col lg={12} xs={24}>
                <Form.Item label="Select day" className="select-icon customDatePicker">
                  {/* <Select
                    defaultValue="today"
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleChange}
                    options={[
                      {
                        value: "today",
                        label: "Today",
                      },
                      {
                        value: "tomorrow ",
                        label: "Tomorrow ",
                      },
                      {
                        value: "sat, 11 May ",
                        label: "Sat, 11 May ",
                      },
                      {
                        value: "sun, 12 May  ",
                        label: "Sun, 12 May  ",
                      },
                      {
                        value: "mon, 13 May ",
                        label: "Mon, 13 May ",
                      },
                      {
                        value: "tue, 14 May ",
                        label: "Tue, 14 May ",
                      },
                      {
                        value: "wed, 15 May ",
                        label: "Wed, 15 May ",
                      },
                      {
                        value: "thu, 16 May ",
                        label: "Thu, 16 May ",
                      },
                      {
                        value: "fri, 17 May",
                        label: "Fri, 17 May",
                      },
                      {
                        value: "sat, 18 May ",
                        label: "Sat, 18 May ",
                      },
                      {
                        value: "sun, 19 May ",
                        label: "Sun, 19 May ",
                      },
                      {
                        value: "mon, 20 May ",
                        label: "Mon, 20 May ",
                      },
                      {
                        value: "tue, 21 May ",
                        label: "Tue, 21 May ",
                      },
                    ]}
                  /> */}
                  {/* <DatePicker 
                    selected={startDate} 
                    onChange={(date) => setStartDate(date)}
                    className=""
                    style={{padding: "10px 0px"}}
                    />
                  <FaCalendar className="select-left-icon" /> */}
                  <DatePicker 
                    className="web-input" 
                    style={{paddingRight:"10px", width:"100%"}} 
                    onChange={onChange2} 
                    value={startDate ? moment(startDate) : null}
                    disabledDate={disabledDate}
                    />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                {/* <Form.Item label="Select time" className="select-icon">
                  <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleChangeStart}
                    options={[
                      {
                        value: "13:00 - 16:00",
                        label: "13:00 - 16:00",
                      },
                      {
                        value: "14:00 - 17:00",
                        label: "14:00 - 17:00",
                      },
                      {
                        value: "18:00 - 21:00",
                        label: "18:00 - 21:00",
                      },
                      {
                        value: "19:00 - 22:00",
                        label: "19:00 - 22:00",
                      },
                      {
                        value: "20:00 - 23:00",
                        label: "20:00 - 23:00",
                      },
                      {
                        value: "14:00 - 16:00",
                        label: "14:00 - 16:00",
                      },
                      {
                        value: "15:00 - 17:00",
                        label: "15:00 - 17:00",
                      },
                      {
                        value: "20:00 - 22:00",
                        label: "20:00 - 22:00",
                      },
                    ]}
                  />
                  <FaClock className="select-left-icon" />
                </Form.Item> */}

                <Form.Item
                        label="Select time"
                        name="time"
                        
                        rules={[
                          { required: true, message: "Please select a time!" },
                        
                          {
                            validator: (_, value) => {
                                const selectedTime = dayjs(value, "HH:mm:ss");
                                const currentDate = dayjs().startOf("day");
                                const selectedDate = dayjs(startDate);
                
                                if (
                                    selectedDate.isSame(currentDate, "day") &&
                                    selectedTime.isBefore(dayjs())
                                ) {
                                    return Promise.reject(
                                        "Please select a time in the future for today!"
                                    );
                                }
                
                                return Promise.resolve();
                            },
                        },

                        ]}
                      >
                        <TimePicker
        className="web-select23"
        onChange={(time, timeString) => handleChangeStart(timeString)}
        defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
        disabledHours={() => {
            const hours = [];
            const currentDate = dayjs().startOf("day");
            const selectedDate = dayjs(startDate);

            if (selectedDate.isSame(currentDate, "day")) {
                for (let i = 0; i < dayjs().hour(); i++) {
                    hours.push(i);
                }
            }
            return hours;
        }}
        disabledMinutes={(selectedHour) => {
            const minutes = [];
            const currentDate = dayjs().startOf("day");
            const selectedDate = dayjs(startDate);

            if (
                selectedDate.isSame(currentDate, "day") &&
                selectedHour === dayjs().hour()
            ) {
                for (let i = 0; i < dayjs().minute(); i++) {
                    minutes.push(i);
                }
            }
            return minutes;
        }}
    />
                      </Form.Item>
              </Col>
              <Col lg={24} xs={24}>
                <Form.Item label="Driver instructions" className="select-icon">
                  <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleCollectionNote}
                    options={[
                      {
                        value: "Collect from outside",
                        label: "Collect from outside",
                      },
                      {
                        value: "Collect from me in person",
                        label: "Collect from me in person",
                      },
                      {
                        value: "Collect from reception/porter",
                        label: "Collect from reception/porter",
                      },
                    ]}
                  />
                  <BiSolidDoorOpen className="select-left-icon" />
                </Form.Item>
              </Col>
            </Row>
            <Divider />
            {console.log("bufferDays ===>",bufferDays)}
            {
              startDate && bufferDays > 1 ?
              (
                  <Row style={{ justifyContent:"space-between"}}>
                      <h6 className="f-20">Delivery time</h6>
                      <div>
                        <span className="f-16" style={{marginRight:"10px"}}>Custom Delivery time</span>
                      <Switch
                      size="large"
                              checkedChildren={<CheckOutlined />}
                              unCheckedChildren={<CloseOutlined />}
                              onChange={() => !customDandT  ? SetcustomDandT(true) : SetcustomDandT(false)}
                              value={customDandT}
                            />
                            </div>

                  </Row>
              )
              : 
              null
            }
            <Row gutter={[16, 16]} className="for-gutter-0" style={{marginTop:"20px"}}>
              <Col lg={12} xs={24}>
           
                <Form.Item label="Select day" className="select-icon">
                  {/* <Select
                    defaultValue="today"
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleChange}
                    options={[
                      {
                        value: "today",
                        label: "Today",
                      },
                      {
                        value: "tomorrow ",
                        label: "Tomorrow ",
                      },
                      {
                        value: "sat, 11 May ",
                        label: "Sat, 11 May ",
                      },
                      {
                        value: "sun, 12 May  ",
                        label: "Sun, 12 May  ",
                      },
                      {
                        value: "mon, 13 May ",
                        label: "Mon, 13 May ",
                      },
                      {
                        value: "tue, 14 May ",
                        label: "Tue, 14 May ",
                      },
                      {
                        value: "wed, 15 May ",
                        label: "Wed, 15 May ",
                      },
                      {
                        value: "thu, 16 May ",
                        label: "Thu, 16 May ",
                      },
                      {
                        value: "fri, 17 May",
                        label: "Fri, 17 May",
                      },
                      {
                        value: "sat, 18 May ",
                        label: "Sat, 18 May ",
                      },
                      {
                        value: "sun, 19 May ",
                        label: "Sun, 19 May ",
                      },
                      {
                        value: "mon, 20 May ",
                        label: "Mon, 20 May ",
                      },
                      {
                        value: "tue, 21 May ",
                        label: "Tue, 21 May ",
                      },
                    ]}
                  />
                  <FaCalendar className="select-left-icon" /> */}
                  
                  {
                   !extraService && !customDandT && startDate && endDate && (
                      <DatePicker 
                        className="web-input"  
                        style={{paddingRight:"10px", width:"100%"}} 
                        // onChange={onChange3} 
                        value={endDate ? moment(endDate)  : null}
                        disabled
                        />
                    )
                  }
                  {
                    startDate && extraService && (
                      <DatePicker 
                              className="web-input"  
                              style={{paddingRight:"10px", width:"100%"}} 
                              onChange={onChange3} 
                              value={endDate ? moment(endDate)  : null}
                              disabled
                              />
                    )
                  }

                  {
                     customDandT && (
                      <DatePicker 
                      className="web-input"  
                      style={{paddingRight:"10px", width:"100%"}} 
                      onChange={onChange3} 
                      disabledDate={disabledDates}
                      />
                    )
                  }
                  
              
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                {/* <Form.Item label="Select time" className="select-icon">
                  <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleChangeEnd}
                    options={[
                      {
                        value: "13:00 - 16:00",
                        label: "13:00 - 16:00",
                      },
                      {
                        value: "14:00 - 17:00",
                        label: "14:00 - 17:00",
                      },
                      {
                        value: "18:00 - 21:00",
                        label: "18:00 - 21:00",
                      },
                      {
                        value: "19:00 - 22:00",
                        label: "19:00 - 22:00",
                      },
                      {
                        value: "20:00 - 23:00",
                        label: "20:00 - 23:00",
                      },
                      {
                        value: "14:00 - 16:00",
                        label: "14:00 - 16:00",
                      },
                      {
                        value: "15:00 - 17:00",
                        label: "15:00 - 17:00",
                      },
                      {
                        value: "20:00 - 22:00",
                        label: "20:00 - 22:00",
                      },
                    ]}
                  />
                  <FaClock className="select-left-icon" />
                </Form.Item> */}

                <Form.Item
                        label="Select time"
                        name="times"
                        rules={[
                          { required: true, message: "Please select a time!" },
                        ]}
                        
                      >
                        <TimePicker
                         className="web-select23"
                          onChange={(time, timeString) =>
                            handleChangeEnd(timeString)
                          }
                          defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                         
                        />
                      </Form.Item>
              </Col>
              <Col lg={24} xs={24}>
                <Form.Item label="Driver instructions" className="select-icon">
                  <Select
                    defaultValue=""
                    style={{
                      width: "100%",
                    }}
                    className="web-select"
                    onChange={handleDeliveryNote}
                    options={[
                      {
                        value: "Deliver to me in person",
                        label: "Deliver to me in person",
                      },
                      {
                        value: "Leave at the door",
                        label: "Leave at the door",
                      },
                      {
                        value: "Deliver to the reception/porter",
                        label: "Deliver to the reception/porter",
                      },
                    ]}
                  />
                  <BiSolidDoorOpen className="select-left-icon" />
                </Form.Item>
              </Col>
              <Divider />
              <Col lg={24} xs={24}>
                <TextArea
                  className="web-textarea"
                  rows={6}
                  placeholder="Add any special instruction for the driver...."
                  maxLength={100}
                  onChange={(e) => Setdesc(e.target.value)}
                  value={desc}
                />
              </Col>
            </Row>
          </Form>
        </>
      ),
    },
    {
      title: "Contact",
      content: (
        <>
          <h4 className="f-40">Contact</h4>
          <p className="web-p">
            We need your contact information to keep you updated about your
            order.
          </p>
          {
            !userToken  ?
            (
              <div className="step-tag">
            <Link to={"/login"}>Already have an account? LOGIN NOW!</Link>
              </div>
            )
            :
            null
          }
          <Form
            layout="vertical"
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
           
          >
            <Row gutter={[16, 16]} className="for-gutter-0">
              <Col lg={24} xs={24}>
                <Radio.Group
                   onChange={(e) => handleContactDetails('mode', e.target.value)}
                  value={contactDetails.mode}
                  className="contact-step-radio"
                >
                  <Radio value={"Individual"}>Individual</Radio>
                  <Radio value={"COMPANY"}>COMPANY</Radio>
                </Radio.Group>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="First name"
                  name="firstName"
                  rules={[
                    {
                      required: true,
                      message: "Please input First name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="James"
                    className="web-input"
                    onChange={(e) => handleContactDetails('firstName', e.target.value)}
                    value={contactDetails?.firstName}
                  />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Last name"
                  name="lastName"
                  rules={[
                    {
                      required: true,
                      message: "Please input Last name!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Anderson"
                    className="web-input"
                    onChange={(e) => handleContactDetails('lastName', e.target.value)}
                    value={contactDetails?.lastName}
                  />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Phone number"
                  name="phoneNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please input Phone number!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="123 456 789"
                    className="web-input"
                    onChange={(e) => handleContactDetails('phoneNumber', e.target.value)}
                    value={contactDetails?.phoneNumber}
                  />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Email address"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please input Email address!",
                    },
                  ]}
                >
                  <Input
                    size="large"
                    placeholder="Anderson"
                    className="web-input"
                    onChange={(e) => handleContactDetails('email', e.target.value)}
                    value={contactDetails?.email}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </>
      ),
    },
    {
      title: "Payment",
      content: (
        <>
          
          <h4 className="f-40">Payment</h4>
          <Form
            layout="vertical"
            name="basic"
            initialValues={{
              remember: true,
            }}
          >


            <Row gutter={[16, 16]} className="for-gutter-0">
              <Col lg={24} xs={24}>
                <Form.Item
                  label="Card number"
                  name="Cardnumber"
                  rules={[
                    {
                      
                      required: true,
                      message: "Please input Card number!",
                    },
                  ]}
                >
                  {/* <Input
                    size="large"
                    placeholder="1234 1234 1234 1234"
                    className="web-input"
                    onChange={(e) => handleCardPaymentDetails('Cardnumber', e.target.value)}
                    value={card.Cardnumber }
                    maxLength={16}
                  /> */}

                  <CardNumberElement 
                    options={elementOptions} 
                    onChange={(event) => handleChange('cardNumber', event)}
                    />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="Expiry date"
                  name="Expirydate"
                  rules={[
                    {
                      required: true,
                      message: "Please input Expiry date!",
                    },
                  ]}
                >
                  {/* <Input
                    size="large"
                    placeholder="MM/YY"
                    className="web-input"
                    onChange={(e) => handleCardPaymentDetails('Expirydate', e.target.value)}
                    value={card.Expirydate}
                  /> */}
                  <CardExpiryElement 
                    options={elementOptions}  
                    onChange={(event) => handleChange('cardExpiry', event)}

                    />
                </Form.Item>
              </Col>
              <Col lg={12} xs={24}>
                <Form.Item
                  label="CVC"
                  name="cvc"
                  rules={[
                    {
                      required: true,
                      message: "Please input CVC!",
                    },
                  ]}
                >
                  {/* <Input
                    size="large"
                    placeholder="1234"
                    className="web-input"
                    onChange={(e) => handleCardPaymentDetails('CVC', e.target.value)}
                    value={card.CVC}
                    maxLength={3}
                  /> */}
                  <CardCvcElement 
                    options={elementOptions} 
                    onChange={(event) => handleChange('cardCvc', event)}
                    />
                </Form.Item>
              </Col>

              <div style={{ paddingBottom : "100px"}}></div>

              <Col lg={12} xs={24}>
                <Form.Item
                  label="Referal Code"
                  name="code"
                  // rules={
                  //   [
                  //   {
                  //     required: true,
                  //     message: "Please input CVC!",
                  //   },
                  // ]}
                >
                  <Input
                    size="large"
                    placeholder="Enter Coupen code"
                    className="web-input"
                    onChange={(e) => SetredeemCode(e.target.value)}
                    value={redeemCode}
                  />
                 
                </Form.Item>
              </Col>
            {
              !useCode ? 
              (
                <Col lg={12} xs={24}>
              <Button className="web-btn" style={{marginTop:"26px"}} onClick={() => handleRedeemCode(redeemCode)}> Redeem </Button>
              </Col>
              )
              :
              null
            }
              


            </Row>
          </Form>

          
          <div>
        {/* <CardElement className={cardStyle} /> */}
      </div>
          
        </>
      ),
    },
  ];
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  // console.log("items",items)

  const contentStyle = {
    lineHeight: "260px",
    textAlign: "center",
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };


  
  if(isLoading){
    const styles = {
      loaderContainer: {
        display: 'flex',
        flexDirection: 'column', // Stack elements vertically
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh', 
        width: '100%',
        textAlign: 'center', // Center text horizontally
      },
      loaderText: {
        marginBottom: '20px', 
        fontSize: '18px',
        color: '#333',
      },
    };

   
    
    return(
            <div style={styles.loaderContainer}>
            <p style={styles.loaderText}>Your order is processing, please wait!</p>
                <CirclesWithBar
                 height="200"
                  width="200"
                  color="#4fa94d"
                  outerCircleColor="#FF2D32"
                  innerCircleColor="#4fa94d"
                  barColor="#4fa94d"
                  ariaLabel="circles-with-bar-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
          </div>
    )
  }
  


  return (
    <div className="auth-banner">
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col xl={20} lg={21} md={23} sm={23} xs={23}>
          <Row
            gutter={[16, 16]}
            style={{ width: "100%", justifyContent: "space-between" }}
            className="for-gutter-0"
          >
            <Col lg={15}>
              <>
                <Steps current={current} items={items} />
                <div className="step-content-box">{steps[current]?.content}</div>
              </>
            </Col>
            <Col lg={8}>
              <div
                style={{
                  marginTop: 54,
                }}
                className="next-box"
              >
              {/* {console.log("nexterror",nexterror)} */}
             
              {
                !error && !carterror && !totalError && !nexterror   ?
                (
                  <>
                  {current < steps.length - 1 && (
                        <Button className="web-btn" onClick={() => next()}>
                          Next
                        </Button>
                      )}   
                  </>

                )
                :
                (
                  <p className="mainbtn" style={{ fontSize:15 , borderBlock : 10 , marginBottom :20 }}>{error ? error : carterror ? carterror : totalError ? totalError : nexterror}</p> 
                )
              }
              

             

                {current === steps.length - 1 && (
                  <Button
                    className="web-btn"
                    onClick={(e) => createOrders(e)
                      }
                  >
                    PLACE ORDER
                  </Button>
                )}
                
                {current > 0 && (
                  <Button
                    className="web-btn"
                    style={{
                      margin: "0 8px",
                    }}
                    onClick={() => prev()}
                  >
                    Previous
                  </Button>
                )}

                <div className="payment-step">
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={14}>
                      <h6 className="f-20">Pay now</h6>
                    </Col>
                    <Col
                      lg={12}
                      md={12}
                      sm={12}
                      xs={10}
                      style={{ textAlign: "end" }}
                      
                    >
                      {/* {console.log("totals",totals , "current",current)} */}
                      <h6 className="f-20"> {totals < 20 ?  null : useCode ? useCode : discount ? "£"+ Number(totals - (totals * discount)) :  "£"+totals }</h6>
                    </Col>
                    <Col lg={14} md={14} sm={14} xs={24}>
                      <p className="">Minimum order charge</p>
                    </Col>
                    <Col
                      lg={10}
                      md={10}
                      sm={10}
                      xs={24}
                      style={{ textAlign: "end" }}
                    >
                      <p className="">£ {useCode ? useCode : total?.reduce((acc , data) => acc + data , 0) }</p>
                    </Col>
                    <Col lg={14} md={14} sm={14} xs={24}>
                      <p className="">Service fee</p>
                    </Col>
                    <Col
                      lg={10}
                      md={10}
                      sm={10}
                      xs={24}
                      style={{ textAlign: "end" }}
                    >
                      <p className="">£ 1.99</p>
                    </Col>
                    <Col lg={14} md={14} sm={14} xs={24}>
                      <p className="">Collection & delivery</p>
                    </Col>
                    <Col
                      lg={10}
                      md={10}
                      sm={10}
                      xs={24}
                      style={{ textAlign: "end" }}
                    >
                      <p className="">Free</p>
                    </Col>
                    {
                      discount > 0 &&
                      (
                        <>
                        <Col lg={14} md={14} sm={14} xs={24}>
                          <p className="">Discount</p>
                        </Col>
                        <Col
                          lg={10}
                          md={10}
                          sm={10}
                          xs={24}
                          style={{ textAlign: "end" }}
                        >
                          <p className="">{discount * 100 + " " +"%"}</p>
                        </Col>
                        </>
                      )
                    }
                    {
                      driverTip  ?
                       driverTip && (
                        <>
                            <Col lg={14} md={14} sm={14} xs={24}>
                              <p className="">Order tip</p>
                            </Col>
                          <Col
                            lg={10}
                            md={10}
                            sm={10}
                            xs={24}
                            style={{ textAlign: "end" }}
                          >
                            <p className="">{driverTip}</p>
                          </Col>
                        </>
                      )
                      : null
                    }
                  </Row>
                  <div className="payment-step-box2">
                    <h5 className="f-20">Tip your driver?</h5>
                    <Radio.Group onChange={(e) => SetdriverTip(e.target.value)} defaultValue={0}>
                      <Radio.Button value={0}>NO</Radio.Button>
                      <Radio.Button value={10}>£10</Radio.Button>
                      <Radio.Button value={5}>£5</Radio.Button>
                      <Radio.Button value={2}>£2</Radio.Button>
                    </Radio.Group>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>
                    {
                      !reduxSteps.length > 0 ?
                      (
                        <>
                        <div><FaCheckCircle className="" /> </div> 
                        <div>
                            <strong className="f-16">Address</strong>
                          </div>
                          
                        </>
                      )
                      :
                      (
                        <>
                        {
                          reduxSteps.map((data , index) => {
                            if(data.current === 1){
                              return(
                                <>
                                  <div key={index}> <FaCheckCircle className="check-green" /> </div>
                                  <div>
                                    <strong className="f-16">Address</strong>
                                    <p className="f-14">
                                      { data.addressDetails }
                                    </p>
                                  </div>
                                </>
                              )
                            }
                          })
                        }
                        </>
                      )
                    }
                    </li>
                    <Divider />
                    <li>
                    {
                      !reduxSteps.length > 0 ?
                      (
                        <>
                        <div><FaCheckCircle className="" /> </div> 
                        <div>
                            <strong className="f-16">Collection time</strong>
                          </div>
                        </>
                      )
                      :
                      (
                        <>
                        {
                          reduxSteps.map((data,index) => {
                            if(data.current === 3){
                              return(
                                <>
                                    <div key={index}> <FaCheckCircle className="check-green" /></div>
                                    <div>
                                      <strong className="f-16">Collection time</strong>
                                      <p className="f-14">
                                        { new Date(data.startDate).toDateString()}, {data.startTime} {data.collectNote}
                                      </p>
                                    </div>
                                </>
                              )
                            }
                          })
                        }
                        </>
                      )
                    }
                    </li>
                    <Divider />
                    <li>
                    {
                      !reduxSteps.length > 0 ?
                      (
                        <>
                        <div><FaCheckCircle className="" /> </div> 
                        <div>
                            <strong className="f-16">Collection time</strong>
                          </div>
                        </>
                      )
                      :
                      (
                        <>
                        {
                          reduxSteps.map((data,index) => {
                            if(data.current === 3){
                              return(
                                <>
                                    <div key={index}> <FaCheckCircle className="check-green" /></div>
                                    <div>
                                      <strong className="f-16">Delivery time</strong>
                                      <p className="f-14">
                                        { new Date(data.endDate).toDateString()}, {data.endTime} {data.delieverNote}
                                      </p>
                                    </div>
                                </>
                              )
                            }
                          })
                        }
                        </>
                      )
                    }
                    </li>
                    <Divider />
                    <li>
                            <div>
                              <FaCheckCircle className="check-green" />
                            </div>
                                    <div>
                                      <strong className="f-16">Selected services</strong>
                            {
                              uniqueFilteredItems.length ?

                              uniqueFilteredItems.map((data) => {
                                return(
                                  <>
                                      <p className="f-14">
                                        <Image
                                          preview={false}
                                          src={ImageURLS+data.categoryData.catImage}
                                          alt="paymentcards"
                                          className="selected-service-img"
                                        />
                                        <strong>{data.title}</strong> Price per weight
                                      </p>
                                  </>

                                )
                              })
                              : null
                            }
                          </div>
                    </li>
                    <Divider />
                    <li>
                    {
                      !reduxSteps.length > 0 ?
                      (
                        <>
                          <div><FaCheckCircle className="" /> </div> 
                          <div>
                              <strong className="f-16">Contact</strong>
                          </div>
                        </>
                      )
                      :
                      (
                        <>
                        {
                          reduxSteps.map((data,index) => {
                            if(data.current === 4){
                              return(
                                <>
                                <div> <FaCheckCircle className="check-green" /> </div>
                                <div>
                                  <strong className="f-16">Contact</strong>
                                  <p className="f-14">{
                                    data?.firstName + " " + 
                                    data?.lastName
                                    
                                    }</p>
                                  <p>{data?.email}</p>
                                  <p>{data?.phoneNumber}</p>
                                </div>
                                </>
                              )
                            }
                          })
                        }
                          
                        </>
                      )
                    }
                    </li>
                    <Divider />
                    <li>
                      <div>
                        <FaCheckCircle className="" />
                      </div>
                      <div>
                        <strong className="f-16">Payment</strong>
                        <p className="f-14">
                         {totals}
                        </p>
                      </div>
                    </li>
                    <Divider />
                  </ul>
                </div> 

              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Modal
        title="Your location"
        centered
        open={modal2Open}
        onOk={() => setModal2Open(false)}
        onCancel={() => setModal2Open(false)}
        footer={null}
        style={{ textAlign: "center" }}
      >
        {/* <Image
          preview={false}
          src={ImageUrl("map-img.png")}
          alt="paymentcards"
        /> */}
       
       {
        isLoaded &&
        (
          <GoogleMap
            mapContainerStyle={containerStyle}
           
            options = {OPTIONS}
            // center={center}
            // zoom={10}
            onLoad={onLoads}
            onUnmount={onUnmount}
            onClick={(e) => addMarker(e)}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}
            <></>
          </GoogleMap>

        )
       } 

       
              <Button
          type="button"
          htmlType="submit"
          className="web-btn"
          style={{
            cursor: "pointer",
            margin: "10px 0",
            gap: "10px",
          }}
          onClick={() =>{ 
            GoogleMapGeoLocationApi(markers)
            setModal2Open(false)
            }}
        >
          <FaLocationArrow className="save-location" /> SAVE LOACTION
        </Button>
      </Modal>

      <Modal
        title="Please select your preference for wash"
        centered
        width={700}
        open={modal3Open}
        onOk={() => setModal3Open(false)}
        onCancel={() => setModal3Open(false)}
        footer={null}
        style={{ textAlign: "center" }}
      >
      <ServicesAdd modalKey={modaldata?._id} />
        {/* <div className="radio-popup">
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">
              <FaCheckCircle className="tick" />
              <Image
                preview={false}
                src={ImageUrl("service-icon-2.png")}
                alt="paymentcards"
              />
              <h6 className="f-16-pop">Mixed wash</h6>
              <p>£ 20.89 / 8 KG</p>
            </Radio.Button>
            <Radio.Button value="b">
              <FaCheckCircle className="tick" />
              <Image
                preview={false}
                src={ImageUrl("inner-service-icon-2.png")}
                alt="paymentcards"
              />
              <h6 className="f-16-pop">Mixed wash</h6>
              <p>£ 20.89 / 8 KG</p>
            </Radio.Button>
          </Radio.Group>
        </div> */}
        {/* <Button
          type="button"
          htmlType="submit"
          className="web-btn"
          style={{
            cursor: "pointer",
            margin: "10px 0",
            gap: "10px",
          }}
        >
          ADD SERVICES
        </Button> */}
      </Modal>
    </div>
  );

  

 
}





export default Login;
