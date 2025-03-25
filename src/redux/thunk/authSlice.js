import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { AUTH } from '../../config/constants';

//user login api start here
const authLogin = createAsyncThunk('user/login', async (data) => {
    try {
       const response = await Post(AUTH.signin , data);
       if(response.data.status){
           return response.data
       }else{
        return response.data.message
       }
    
    } catch (error) {
        console.log('error', error)
    }
});
//user login api end here

//forget password api start here
const forgetPassword = createAsyncThunk('user/forgetPassword', async (data) => {
    try {
       
       const response = await Post(AUTH.emailCode , data);
       if(response?.response?.data?.status === false ){
            return response?.response?.data
       }else{
           return response.data
       }
    
    } catch (error) {
        console.log('error', error)
    }
});
//forget password api end here


//verify code api start here
const verifyCode = createAsyncThunk('user/verifyCode', async (data) => {
    try {
       
       const response = await Post(AUTH.verifyCode , data);
       console.log("message" , response)
       if(response?.response?.data?.status === false){
        return response?.response?.data?.message
    }else{
        return response?.data
    }
      
    
    } catch (error) {
        console.log('error', error)
    }
});
//verify code api end here

//reset password api start here
const resetPassword = createAsyncThunk('user/resetPassword', async (data) => {
    try {
       
       const response = await Post(AUTH.resetPassword , data);
     
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//reset password api end here

// signup user api start here
const authSignup = createAsyncThunk('user/register' , async (data) => {
    let postData = data
    try { 
        const response = await Post(AUTH.signup , postData);
        if(response?.response?.data?.status === false ){
            return response?.response?.data
        }else{
            return response?.data
        }
     
     } catch (error) {
         console.log('error', error)
     }
})
// signup user api end here

// signup user api start here
// const editProfile = createAsyncThunk('user/edit' , async (data) => {
//     try { 
      
//         let token = data.userToken
//         let putData = data.user

//         console.log("4555",token , "putData",putData)

//         const response = await Put(AUTH.update ,token ,putData);
//         console.log("response",response.data)
         
//         return  {
//                 data : response.data,
//                 token : token
//                 }
     
//      } catch (error) {
//          console.log('error', error)
//      }
// })
// signup user api end here


export {
    authLogin,
    forgetPassword,
    verifyCode,
    resetPassword,
    authSignup
}