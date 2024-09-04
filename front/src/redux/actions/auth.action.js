import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { setDataToLocalStorage } from "../../utils/localstorage";
import authService from "../../services/AuthService";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (def, thunkApi) => {
    try {
      const user = await authService.loginUser({
        username: def.username,
        password: def.password,
      });

      setDataToLocalStorage("user", user);

      return user;
    } catch (ex) {
      toast.error("Invalid username or password.");
      return thunkApi.rejectWithValue(ex);
    }
  }
);
