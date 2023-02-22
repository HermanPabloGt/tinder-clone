import { configureStore } from "@reduxjs/toolkit";
import objectReducer from './slices/objectSlice';

export const store = configureStore({
  reducer: {
    object: objectReducer
  },
});
