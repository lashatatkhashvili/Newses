import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "../actions/auth.action";
import { clearDataFromLocalStorage } from "../../utils/localstorage";

const initialState = {
  user: null,
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.user = action.payload;
    },
    logout: () => {
      clearDataFromLocalStorage();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state) => {
      state.status = "pending";
      state.user = null;
    });
    builder.addCase(loginUser.fulfilled, (state, { payload }) => {
      state.user = payload;
      state.status = "idle";
    });
    builder.addCase(loginUser.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export const { logout, setUserData } = authSlice.actions;

export default authSlice.reducer;
