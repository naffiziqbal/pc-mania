const { createSlice } = require("@reduxjs/toolkit");

export const searchSlice = createSlice({
  name: "search",
  initialState: {
    isSearchOpen: false,
  },
  reducers: {
    setsSearchOpen: (state, action) => {
      state.isSearchOpen = action.payload;
    },
  },
});

export const { setsSearchOpen } = searchSlice.actions;
