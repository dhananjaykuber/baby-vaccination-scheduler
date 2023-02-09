import { configureStore } from '@reduxjs/toolkit';
import hospitalReducer from '../redux/hospital/hospitalSlice';
import childernReducer from '../redux/childern/childernSlice';

export const store = configureStore({
  reducer: {
    hospital: hospitalReducer,
    childern: childernReducer,
  },
});
