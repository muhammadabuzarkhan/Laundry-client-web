import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { ORDER } from '../../config/constants';

//Order create api integration start here
const createOrder = createAsyncThunk('order/create', async (data) => {
    try {
        let postData = data.dats
           const response = await Post(ORDER.create  , postData);
           return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//Order create api integration end here


//user Orders api integration start here
const userOrders = createAsyncThunk('userorder/get', async (data) => {
    try {
        let token = data.token
        // let postData = data.dats
       const response = await Get(ORDER.userOrder   , token);
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//user Orders create api integration end here

//user Orders api integration start here
const OrderDetailsdata = createAsyncThunk('order/details', async (data) => {
    try {
       
        const { id , token } = data
       const response = await Get(ORDER.orderDetails+id   , token);
       return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//user Orders create api integration end here








export {
    createOrder ,userOrders,OrderDetailsdata
}