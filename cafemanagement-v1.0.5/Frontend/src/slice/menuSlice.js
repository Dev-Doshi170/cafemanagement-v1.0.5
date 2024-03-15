import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
    name: 'menu',
    initialState: {
      menu: [],
      categorylist:[],
    //   selectedCategory: null,
      pagination: {
        totalPages: 0,
        currentPage: 1,
        count: 0,
        rowsPerPage: 5,
      },
    },
    reducers: {
      setMenu: (state, action) => {
        
         state.menu = action.payload
        const { data, pagination } = action.payload;
        // Convert pagination values to appropriate data types
        state.menu = data;
        state.pagination = {
          totalPages: Number(pagination.totalPages) ,
          currentPage: Number(pagination.currentPage),
          count: Number(pagination.count),
          rowsPerPage: Number(pagination.rowsPerPage),
        };
      },
    //   setSelectedCategory: (state, action) => {
    //     state.selectedCategory = action.payload;
    //   },
    //   setSearchCategory: (state, action) => {
    //     state.categories = action.payload;
    //   },

    setCategorylist: (state, action) => {
        console.log(action.payload)
      state.categorylist = action.payload
     
   },
   menuupdate: (state, action) => {
    console.log(action.payload)
     const data = action.payload
     const  id = data.id;
   
    const index = state.menu.findIndex(item => item.id === id);
    if (index !== -1) {
      state.menu[index] = data;
    }
  },
  setSearchMenu: (state, action) => {
    state.menu = action.payload;
  },
    },
  });
  
  export const { setMenu,setCategorylist,menuupdate,setSearchMenu } = menuSlice.actions;
  
  export default menuSlice.reducer;