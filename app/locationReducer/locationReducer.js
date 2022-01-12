import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import locationApiActions from '../../services/locationSevice';

const locationInitialState = {
  data: [],
  error: '',
  currentLocation: {
    name: '',
    location: '',
    type: '',
    wifi: '',
    price: '',
  },
};

export const getData = createAsyncThunk(
  'locations/getData',
  locationApiActions.getLocation
);

const locationSlice = createSlice({
  name: 'locations',
  initialState: locationInitialState,
  extraReducers: {
    [getData.pending]: (state, action) => {
      return {
        ...state,
        loading: true,
      };
    },
    [getData.fulfilled]: (state, action) => {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    },
    [getData.rejected]: (state, action) => {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    },
  },
});

export default locationSlice.reducer;
