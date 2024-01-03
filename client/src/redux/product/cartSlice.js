import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    Add_TO_CART: (state, action) => {
      console.log({ ...action.payload });
      const product = { ...action.payload };
      state.cart.push(product);
      console.log(state.cart);
    },
  },
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     console.log("HYDRATE", state, action.payload);
  //     return {
  //       ...state,
  //       ...action.payload.subject,
  //     };
  //   },
  // },
});

export const { Add_TO_CART } = cartSlice.actions;
