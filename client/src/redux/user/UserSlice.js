const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
    isError: false,
    error: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setIsLoading } = userSlice.actions;
