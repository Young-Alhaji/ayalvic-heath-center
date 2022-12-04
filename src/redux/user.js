import { createSlice } from "@reduxjs/toolkit";
export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "",
    token: "",
  },
  reducers: {
    setusername: (state, action) => {
      state.username = action.payload;
    },
    settoken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setusername, settoken } = userSlice.actions;
export default userSlice.reducer;