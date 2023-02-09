import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

export const getHospitalInformation = createAsyncThunk(
  'hospital/getHospitalInformation',
  () => {
    return JSON.parse(Cookies.get('HospitalAdmin'));
  }
);

const initialState = {
  hospital: null,
  isLoading: false,
};

const hospitalSlice = createSlice({
  name: 'hospital',
  initialState,
  reducers: {
    setHospital: (state, action) => {
      state.hospital = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getHospitalInformation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHospitalInformation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hospital = action.payload;
      })
      .addCase(getHospitalInformation.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setHospital } = hospitalSlice.actions;

export default hospitalSlice.reducer;
