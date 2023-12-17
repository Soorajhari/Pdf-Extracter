import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  loading: false,
  userInfo: {
    firstName: "",
    lastNmae: "",
    email: "",
    mobile: "",
  
  },


  error: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    
    },
    signUpData: (state, action) => {
      state.userInfo = action.payload;
    //   state.loading = action.payload;
    },
  },
});

export const { setLoading, setError, signUpData } = authSlice.actions;

export default authSlice.reducer;
