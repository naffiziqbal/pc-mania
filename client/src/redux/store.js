const { configureStore } = require("@reduxjs/toolkit");
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { cartSlice } from "./product/cartSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userSlice } from "./user/UserSlice";

// const reducer = {
//   [cartSlice.name]: cartSlice.reducer,
// };

const rootReducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
