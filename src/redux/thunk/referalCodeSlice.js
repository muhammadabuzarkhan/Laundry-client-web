import { createAsyncThunk } from '@reduxjs/toolkit';
import { Put } from '../../config/api/put';
import { Get } from '../../config/api/get';
import { REFERAL_CODE } from '../../config/constants';

//referal create api integration start here
const getAvaibleReferalCode = createAsyncThunk('referal/get', async (data) => {
    const { token } = data
    try {
           const response = await Get(REFERAL_CODE.getAvaibleReferalCode  , token);
           return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//referal create api integration end here


//referal create api integration start here
const getReferalDetail = createAsyncThunk('referalDetail/get', async (data) => {
    const { token , code , bodyData} = data
    try {
           const response = await Put(REFERAL_CODE.getReferalDetail+code , token , bodyData);
           return response
    
    } catch (error) {
        console.log('error', error)
    }
});
//referal create api integration end here

export { 
    getAvaibleReferalCode,
    getReferalDetail
}