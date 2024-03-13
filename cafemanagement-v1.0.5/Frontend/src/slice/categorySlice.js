
import { createSlice } from '@reduxjs/toolkit';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    selectedCategory: null,
    pagination: {
      totalPages: 0,
      currentPage: 1,
      count: 0,
      rowsPerPage: 5,
    },
  },
  reducers: {
    setCategories: (state, action) => {
      const { data, pagination } = action.payload;
      // Convert pagination values to appropriate data types
      state.categories = data;
      state.pagination = {
        totalPages: Number(pagination.totalPages) ,
        currentPage: Number(pagination.currentPage),
        count: Number(pagination.count),
        rowsPerPage: Number(pagination.rowsPerPage),
      };
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setSearchCategory: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories, setSelectedCategory,setSearchCategory } = categorySlice.actions;

export default categorySlice.reducer;

