import { HYDRATE } from "next-redux-wrapper";

const { createSlice } = require("@reduxjs/toolkit");

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    Add_TO_CART: (state, action) => {
      const existingProduct = state?.cart?.filter(
        (product) => product._id === action.payload._id
      );
      // console.log(!existingProduct, "before");

      if (!existingProduct.length) {
        const product = { ...action.payload };
        state.cart.push(product);
      } else {
        const newCart = state.cart.find(
          (data) => data._id === action.payload._id
        );
        // console.log(newCart);
        // ? If Product exist Update product Quanity
        if (newCart) {
          state.cart[
            (newCart.quantity = action.payload.quantity + newCart.quantity)
          ];
        }
        // console.log("else");
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
