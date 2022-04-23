import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [],
  loading: false,
  maxPage: 0,
};

const marvelListSlice = createSlice({
  name: "marvelList",
  initialState,
  reducers: {
    getMarvelList: (state) => {
      state.loading = true;
    },
    setMarvelList: (state, action) => {
      state.list = action.payload;
      state.loading = false;
    },
    setMaxPage: (state, action) => {
      state.maxPage = action.payload;
    },
  },
});

export const { getMarvelList, setMarvelList, setMaxPage } =
  marvelListSlice.actions;

export const marvelListReducer = marvelListSlice.reducer;
