import { createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "../../services/newsService";

export const getNewses = createAsyncThunk(
  "news/getNewses",
  async (def, thunkApi) => {
    try {
      const data = await newsService.getNewses(def.page, def.limit);

      return { data, page: def.page };
    } catch (ex) {
      return thunkApi.rejectWithValue(ex);
    }
  }
);
