import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import userReducer from "../features/users/usersSlice";

const reducer = combineReducers({
  // here we will be adding reducers
  user: userReducer,
});

const store = configureStore({
  reducer,
});
export default store;
