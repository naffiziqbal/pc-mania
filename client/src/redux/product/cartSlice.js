import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    Add_TO_CART: (state, action) => {
      const existingProduct = state.cart.map(
        (product) => product._id === action.payload._id
      );
      if (existingProduct) {
        const product = {
          ...action.payload,
          ...(action.payload.qunatity += 1),
        };
        console.log(product);
        state.cart.push(product);
      } else {
        const product = { ...state.cart.qunatity };
        console.log(product);
      }
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
