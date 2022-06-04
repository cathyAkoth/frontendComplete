import { combineReducers } from "redux";
import userReducer from "../features/users/usersSlice";
export default combineReducers({
  // here we will be adding reducers
  userReducer,
});
