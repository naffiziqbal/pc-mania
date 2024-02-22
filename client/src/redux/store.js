const { configureStore } = require("@reduxjs/toolkit");
import { cartSlice } from "./product/cartSlice";
import { userSlice } from "./user/UserSlice";
import { searchSlice } from "./user/search/searchSlice";
import { orderSlice } from "./product/order/orderSlice";
import { reviewApi } from "./product/review/reviewApi";

// const reducer = {
//   [cartSlice.name]: cartSlice.reducer,
// };

const rootReducer = {
  user: userSlice.reducer,
  cart: cartSlice.reducer,
  search: searchSlice.reducer,
  orders: orderSlice.reducer,
  [reviewApi.reducerPath]: reviewApi.reducer,
};
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(reviewApi.middleware),
});

export default store;
