import { createSlice } from "@reduxjs/toolkit";
import { getallServices , subServicesbyServiceId , productsBysubCatId } from '../thunk/serviceSlice';
const initialState = {
  isLoading: false,
  cartItems : [],
  serviceItems: [],
  subserviceItems: {},
  products : {},
  subTotal : 0,
  error: null,
};

export const cartSlice = createSlice({
  name: "service",
  initialState,
  reducers: {
   
     addToCart: (state, action) => {
      const { payload } = action;
      const existingItem = state.cartItems.find(item => item.title === payload.title && item.id === payload.id);
    
      if (existingItem) {
        state.cartItems = state.cartItems.map(item =>
          item.title === payload.title && item.id === payload.id
            ? { ...item, quantity: item.quantity + payload.quantity , price : Number(item.price) * Number(item.quantity) }
            : item
        );
      } else {
        state.cartItems = [...state.cartItems, payload];
      }
    },
    
    quantityAndPriceChanges: (state, action) => {
      const { count, details, decount } = action.payload;
      const existingItem = state.cartItems.find(item => item.title === details.title && item.id === details.id);
    
      if (existingItem) {

        

        state.cartItems = state.cartItems.map(item => {
          if (item.title === details.title && item.id === details.id) {

            const newQuantity = item.quantity + (count || -decount);
            const retailPrice = item.price
            const newPrice = retailPrice * newQuantity

            console.log(
              "newQuantity",newQuantity ,
              "newPrice",newPrice , 
              "item.quantity",item.quantity, 
              "item.price" ,item.price 
            );
            return {
              ...item,
              quantity: newQuantity,
              subprice: newPrice
            };
          }
          return item;
        });
      }
    },
    

    
    
    removeFromCart: (state, { payload }) => {
        const { id } = payload;
         const itemToRemove = state.cartItems.find((item) => item.id === id);
        if (itemToRemove) {
          //state.subTotal -= itemToRemove.quantity * itemToRemove.price;
          state.cartItems = state.cartItems.filter(
            (item) => item.id !== id
          );
        }
      },

    clearCart: (state) => {
      state.cartItems = [];
      state.subTotal = 0;
    },
    updateCartItemQuantity: (state, { payload }) => {
        const { name, quantity } = payload;
        const itemToUpdate = state.serviceItems.find((item) => item.name === name);
        if (itemToUpdate) {
          const quantityDifference = quantity - itemToUpdate.quantity;
          itemToUpdate.quantity = quantity;
          state.subTotal += quantityDifference * itemToUpdate.price;
        }
      },
  },
  extraReducers(builder){
   // ----------------------------------- all Services api integration start here -----------------------------------------------
   builder.addCase(getallServices.pending, (state, action) => {
    
    state.isLoading = true;
  });
  builder.addCase(getallServices.fulfilled, (state, action) => {
   
    state.isLoading = false;
    state.serviceItems =  action.payload;
  });
  builder.addCase(getallServices.rejected, (state, action) => {
    
    state.isLoading = false;
    state.error = action.error;
  });
  // ----------------------------------- all Services api integration end here -----------------------------------------------\

  // -----------------------------------  sub Services w . r . f of serviceId api integration start here -----------------------------------------------
  builder.addCase(subServicesbyServiceId.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(subServicesbyServiceId.fulfilled, (state, action) => {
    state.isLoading = false;
    state.subserviceItems =  action.payload;
  });
  builder.addCase(subServicesbyServiceId.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  });
  // ----------------------------------- sub Services w . r . f of serviceId api integration end here -----------------------------------------------


  // -----------------------------------  products w.r.f categoryId api integration start here -----------------------------------------------
  builder.addCase(productsBysubCatId.pending, (state, action) => {
    state.isLoading = true;
  });
  builder.addCase(productsBysubCatId.fulfilled, (state, action) => {
    state.isLoading = false;
    state.products =  action.payload;
  });
  builder.addCase(productsBysubCatId.rejected, (state, action) => {
    state.isLoading = false;
    state.error = action.error;
  });
  // ----------------------------------- products w.r.f categoryId api integration end here -----------------------------------------------


  }
},
);

export const {quantityAndPriceChanges , addToCart, removeFromCart, clearCart , updateCartItemQuantity } = cartSlice.actions;

export const Serives = cartSlice.reducer;

