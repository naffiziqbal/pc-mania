const { configureStore } = require("@reduxjs/toolkit");
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { cartSlice } from "./product/cartSlice";
import { composeWithDevTools } from "@redux-devtools/extension";
import { userSlice } from "./user/UserSlice";
import { searchSlice } from "./user/search/searchSlice";
import { orderSlice } from "./product/order/orderSlice";

// const reducer = {
//   [cartSlice.name]: cartSlice.reducer,
// };

const rootReducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  search: searchSlice.reducer,
  orders: orderSlice.reducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
