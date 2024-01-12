const { createSlice } = require("@reduxjs/toolkit");

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
  },
  reducers: {
    AddOders: (state, action) => {
      state.orders = action.payload;
    },
  },
});

export const { AddOders } = orderSlice.actions;
