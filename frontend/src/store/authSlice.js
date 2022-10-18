import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: 
    {
      id: "none",
      email: "none",
      name: "none",
      role:"none"
    }
  ,
  reducers: {
    setAuth: (state, actions) => {
      return actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuth } = authSlice.actions;

export default authSlice.reducer;
