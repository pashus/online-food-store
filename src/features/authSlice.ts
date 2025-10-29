import type { IAuthState } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAuthState = {
  isAuthenticated: false,
  isLoading: false,
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.isLoading = false;
      localStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = "";
      state.isAuthenticated = false;
      state.isLoading = false;
      localStorage.removeItem("token");
    },
  },
  selectors: {
    getIsAuthenticated: (state) => state.isAuthenticated,
  },
});

export default authSlice.reducer;
export const { setToken, logout } = authSlice.actions;
export const { getIsAuthenticated } = authSlice.selectors;
