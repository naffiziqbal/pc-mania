const { createSlice } = require("@reduxjs/toolkit");

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLoading: false,
    isError: false,
    error: {},
    isModalOpen: false,
    isReviewModalOpen: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = { ...action.payload };
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setIsReviewModalOpen: (state, action) => {
      state.isReviewModalOpen = action.payload;
    },
  },
});

export const { setUser, setIsLoading, setIsModalOpen, setIsReviewModalOpen } =
  userSlice.actions;
