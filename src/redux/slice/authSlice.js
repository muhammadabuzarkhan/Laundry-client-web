import { createSlice } from '@reduxjs/toolkit';
import  {  
  authLogin , forgetPassword , verifyCode ,
   resetPassword ,authSignup  } from "../thunk/authSlice"


 const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoading: false,
    error: "",
    data: []
    

   
  },
  reducers: {
    logouts(state) {
      state.data = [];
      state.error = "";
      // Optionally reset other state properties if needed
    },
    emptySomestates(state) {
      state.error = "";
      // Optionally reset other state properties if needed
    },
    // profileData(state) {
    //   state.data.user = {};
    //   // Optionally reset other state properties if needed
    // },
    editProfile(state , {payload}){
      state.data.user = payload.updateProfile
    },
    removeProfileImage(state , action){
      let { image , ...rest } = action.payload

      let profile = {
        ...rest,
        image : ""
      }
      

     
       state.data.user = profile
    }
  },
  extraReducers(builder) {
     // ----------------------------------- for user login api -----------------------------------------------
     builder.addCase(authLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
    
      state.isLoading = false;
      state.data =   action.payload?.data ? action.payload?.data : [] ;
      state.error = !action.payload?.data ? action?.payload : "";
    });
    builder.addCase(authLogin.rejected, (state, action) => {
    
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user login api -----------------------------------------------

     // ----------------------------------- for user forget password api -----------------------------------------------
     builder.addCase(forgetPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(forgetPassword.fulfilled, (state, action) => {
      
      state.isLoading = false;
      state.data =  action.payload.message;
    });
    builder.addCase(forgetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user forget password api -----------------------------------------------

    // ----------------------------------- for user verify code api -----------------------------------------------
    builder.addCase(verifyCode.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(verifyCode.fulfilled, (state, action) => {
      console.log("action",action)
      state.isLoading = false;
      state.data =  action?.payload?.message;
    });
    builder.addCase(verifyCode.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user verify code api -----------------------------------------------

     // ----------------------------------- for user reset password api -----------------------------------------------
     builder.addCase(resetPassword.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
    
      state.isLoading = false;
      state.data =  action.payload;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user reset password api -----------------------------------------------


    // ----------------------------------- for user registration api -----------------------------------------------
    builder.addCase(authSignup.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(authSignup.fulfilled, (state, action) => {
    
      state.isLoading = false;
      state.data =  [];
    });
    builder.addCase(authSignup.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    // ----------------------------------- for user registration api -----------------------------------------------


     // ----------------------------------- for user edit profile api -----------------------------------------------
    //  builder.addCase(editProfile.pending, (state, action) => {
    //   state.isLoading = true;
    // });
    // builder.addCase(editProfile.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   // Assuming API returns updated user profile
    //   state.data.user = action.payload;; // Update user object in state
    //   state.error = ""; // Clear error state on success
    // })
    // builder.addCase(editProfile.rejected, (state, action) => {
    //   state.isLoading = false;
    //   state.error = action.error;
    // });
    // ----------------------------------- for user edit profile api -----------------------------------------------
     
  },
})

// Action creators are generated for each case reducer function
export const { logouts  , emptySomestates , editProfile , removeProfileImage } = userSlice.actions

// export default userSlice.reducer

export const UserReducers = userSlice.reducer;