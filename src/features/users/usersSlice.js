import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

export const initialState = {
  loading: false,
  hasErrors: boolean,
  user: [],
  role: "",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
    },
    addRole: (state, action) => {
      state.role = action.payload;
    },
    startLoading: (state) => {
      state.loading = true;
    },
    getUsersSuccess: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.hasErrors = false;
    },
    getUsersFailure: (state) => {
      state.loading = false;
      //handling Errors
      state.hasErrors = true;
    },
  },
});

export const {
  addUser,
  startLoading,
  getUsersFailure,
  getUsersSuccess,
  addRole,
} = userSlice.actions;

export default userSlice.reducer;
