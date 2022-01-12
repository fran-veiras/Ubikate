import { configureStore } from '@reduxjs/toolkit';
import locationReducer from './locationReducer/locationReducer';

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
