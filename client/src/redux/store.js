const { configureStore } = require("@reduxjs/toolkit");
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { cartSlice } from "./product/cartSlice";
import { composeWithDevTools } from "@redux-devtools/extension";

// const reducer = {
//   [cartSlice.name]: cartSlice.reducer,
// };

const store = configureStore({
  reducer: cartSlice.reducer,
});

export default store;
