import { createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../config/api/post';
import { Get } from '../../config/api/get';
import { CATEGORY , SUBCATEGORY , PRODUCTS } from '../../config/constants';

//all Services api integration start here
const getallServices = createAsyncThunk('category/getall', async (data) => {
    try {
       const response = await Get(CATEGORY.getall);
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//all Services api integration end here

//all sub Services api integration start here
const subServicesbyServiceId = createAsyncThunk('subcategory/filter', async (data) => {
    try {
       const response = await Get(SUBCATEGORY.subcatfilter+data.id);
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//all sub Services api integration end here

//all products w.r.f categoryId api integration start here
const productsBysubCatId = createAsyncThunk('products/filter', async (data) => {
    try {
       const response = await Get(PRODUCTS.getall+data.id);
       return response.data
    
    } catch (error) {
        console.log('error', error)
    }
});
//all products w.r.f categoryId api integration end here







export {
    getallServices,
    subServicesbyServiceId,
    productsBysubCatId
}