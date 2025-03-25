import { createAsyncThunk } from '@reduxjs/toolkit';
import { Put } from '../../config/api/put';
import { COUPEN } from '../../config/constants';

//coupen code api start here
const RedeemCoupenCode = createAsyncThunk('coupen/Redeem', async (data) => {
    const { code } = data;
    try {
       const response = await Put(COUPEN.redeemReferalCode+code);
       if(response.status){
           return response
       }
    
    } catch (error) {
       return error?.response?.data
    }
});
//coupen code api end here



export {
    RedeemCoupenCode
}