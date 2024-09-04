import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "../slices/authSlice";
import newsSlice from "../slices/newsSlice";

const combinedReducer = combineReducers({
  auth: authSlice,
  news: newsSlice,
});

const rootReducer = (state, action) => {
  if (action.type === "auth/logout") {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default rootReducer;
