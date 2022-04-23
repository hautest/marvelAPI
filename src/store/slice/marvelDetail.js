import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: null,
  loading: false,
};

const marvelDetailSlice = createSlice({
  name: "marvelDetail",
  initialState,
  reducers: {
    getMarvelDetail: (state) => {
      state.loading = true;
    },

    setMarvelDetail: (state, action) => {
      state.detail = action.payload;
      state.loading = false;
    },
  },
});

export const { getMarvelDetail, setMarvelDetail } = marvelDetailSlice.actions;

export const marvelDetailReducer = marvelDetailSlice.reducer;
