import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

export const initialState = {
  loading: false,
  hasErrors: boolean,
  user: [{ id: 0, first_name: "", last_name: "", email: "" }],
};

// Using thus approach incase it's typescript
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user.push(action.payload);
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

export const { addUser, startLoading, getUsersFailure, getUsersSuccess } =
  userSlice.actions;
//export {addUser};
export default userSlice.reducer;
