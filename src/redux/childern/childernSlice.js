import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  childerns: [],
  vaccinations: [],
  isLoading: false,
};

const childernSlice = createSlice({
  name: 'childern',
  initialState,
  reducers: {
    setChildrens: (state, action) => {
      state.childerns = action.payload;
    },
    setVaccinations: (state, action) => {
      state.vaccinations = action.payload;
    },
  },
});

export const { setChildrens, setVaccinations } = childernSlice.actions;

export default childernSlice.reducer;
