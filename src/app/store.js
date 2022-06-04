import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "features/rootReducer";
const store = configureStore({
  rootReducer,
});
export default store;
