import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import centroItvReducer from "./slice/centroItvSlice";


export const store = configureStore({
  reducer: {
    user: userReducer,
    centroItv: centroItvReducer
  },
});

export default store;