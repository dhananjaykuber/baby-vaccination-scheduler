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
    deleteChildren: (state, action) => {
      state.childerns = state.childerns.filter(
        (children) => children._id != action.payload
      );
    },
    setVaccinations: (state, action) => {
      state.vaccinations = action.payload;
    },
    deleteVaccinations: (state, action) => {
      state.vaccinations = state.vaccinations.filter(
        (vaccination) => vaccination._id != action.payload
      );
    },
    updateVaccination: (state, action) => {
      state.vaccinations = state.vaccinations.map((vaccination) =>
        vaccination._id === action.payload
          ? { ...vaccination, mailed: true }
          : vaccination
      );
    },
  },
});

export const {
  setChildrens,
  deleteChildren,
  setVaccinations,
  deleteVaccinations,
  updateVaccination,
} = childernSlice.actions;

export default childernSlice.reducer;
