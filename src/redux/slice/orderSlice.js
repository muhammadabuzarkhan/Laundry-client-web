import { createSlice } from '@reduxjs/toolkit';
import  { createOrder   , userOrders } from "../thunk/orderSlice"


 const orderSlice = createSlice({
  name: 'order',
  initialState: {
    isLoading: false,
    data: [],
    userOrder: [],
    currentOrder : [],
    status : false,
    error: null,
  },
  reducers: {
    clearOrders: (state) => {
      state.isLoading = false
      state.data = []
      state.userOrder = []
      state.currentOrder = []
      state.status =  false
    },
    clearUserOrders: (state) => {
      state.isLoading = false
      state.userOrder = []
      state.status =  false
    },
    addingOrderWithSteps: (state, action) => {
      const newOrder = action.payload;
      const exists = state.currentOrder.some(order => order.current === newOrder.current);
      if (!exists) {
        state.currentOrder = [...state.currentOrder, newOrder];
      }
    },
    clearOrderData: (state) => {
      console.log("555555" , state)
      state.currentOrder = []
    }
  },
  extraReducers(builder) {
     // ----------------------------------- for create order api -----------------------------------------------
     builder.addCase(createOrder.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createOrder.fulfilled, (state, action) => {
        console.log("action",action);
      state.isLoading = false;
      state.data =  action.payload?.data;
      state.status =  true
    });
    builder.addCase(createOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for create order api -----------------------------------------------


     // ----------------------------------- for user orders api -----------------------------------------------
     builder.addCase(userOrders.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userOrders.fulfilled, (state, action) => {
        console.log("action",action);
      state.isLoading = false;
      state.userOrder =  action?.payload?.orders;
    });
    builder.addCase(userOrders.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user orders api -----------------------------------------------

   
     
  },
})

// Action creators are generated for each case reducer function
export const { clearOrders , clearUserOrders , addingOrderWithSteps , clearOrderData } = orderSlice.actions

// export default userSlice.reducer

export const OrderReducers = orderSlice.reducer;