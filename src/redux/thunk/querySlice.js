import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { QUERY } from '../../config/constants';

//Query create api integration start here
const createQuery = createAsyncThunk('query/create', async (data) => {
    try {
        console.log("response========>",data);
        // let token = data.user.token
        let postData = data
       const response = await Post(QUERY.create  , postData);
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//Query create api integration end here


//user Orders api integration start here
// const userOrders = createAsyncThunk('userorder/get', async (data) => {
//     try {
//         let token = data.token
//         // let postData = data.dats
//        const response = await Get(ORDER.userOrder   , token);
//        return response.data
    
//     } catch (error) {
//         console.log('error', error)
//     }
// });
//user Orders create api integration end here









export {
    createQuery
}