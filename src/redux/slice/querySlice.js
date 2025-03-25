import { createSlice } from '@reduxjs/toolkit';
import  { createQuery } from "../thunk/querySlice"


 const querySlice = createSlice({
  name: 'order',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {
   
  },
  extraReducers(builder) {
     // ----------------------------------- for create order api -----------------------------------------------
     builder.addCase(createQuery.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(createQuery.fulfilled, (state, action) => {
        console.log("action",action);
      state.isLoading = false;
      state.data =  [];
    });
    builder.addCase(createQuery.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for create order api -----------------------------------------------


     // ----------------------------------- for user orders api -----------------------------------------------
    //  builder.addCase(userOrders.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(userOrders.fulfilled, (state, action) => {
    //     console.log("action",action);
    //   state.isLoading = false;
    //   state.userOrder =  action.payload.orders;
    // });
    // builder.addCase(userOrders.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });
    // ----------------------------------- for user orders api -----------------------------------------------

   
     
  },
})

// Action creators are generated for each case reducer function
export const {  } = querySlice.actions

// export default userSlice.reducer

export const QueryReducers = querySlice.reducer;