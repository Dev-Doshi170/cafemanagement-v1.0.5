import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import menuReducer from './menuSlice'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    menu:menuReducer ,
  },
});

export default store;