import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categorySlice';
import menuReducer from './menuSlice'
import oderReducer from './oderSlice'

const store = configureStore({
  reducer: {
    category: categoryReducer,
    menu:menuReducer ,
    order:oderReducer,
  },
});

export default store;