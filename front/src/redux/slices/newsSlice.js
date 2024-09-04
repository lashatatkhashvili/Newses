import { createSlice } from "@reduxjs/toolkit";
import { getNewses } from "../actions/news.action";

const initialState = {
  data: null,
  status: "idle",
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNewses.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(getNewses.fulfilled, (state, { payload }) => {
      if (payload.page == 1) {
        state.data = payload.data;
      } else {
        state.data = {
          ...payload.data,
          newses: state?.data?.newses?.concat(payload.data.newses),
        };
      }
      state.status = "idle";
    });
    builder.addCase(getNewses.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export default newsSlice.reducer;
