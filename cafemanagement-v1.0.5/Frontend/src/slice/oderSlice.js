

// import { createSlice } from '@reduxjs/toolkit';

// const calculateSubtotal = (orderList) =>
//   orderList.reduce((total, item) => total + item.price * item.orderedQuantity, 0);

// const orderSlice = createSlice({
//   name: 'order',
//   initialState: {
//     orderList: [],
//     subtotal: 0, 
//     customerid:null,
//   },
//   reducers: {
//     setOrder: (state, action) => {
//       const { data } = action.payload;

//       // Iterate over the new data
//       data.forEach(newItem => {
//         // Check if there's an item with the same ID in the orderList
//         const existingIndex = state.orderList.findIndex(item => item.id === newItem.id);

//         // If the item exists in orderList, update it
//         if (existingIndex !== -1) {
//           state.orderList[existingIndex] = { ...state.orderList[existingIndex], ...newItem };
//         } else {
//           // If the item doesn't exist, add it to orderList
//           state.orderList.push(newItem);
//         }
//       });

//       // Remove items with quantity <= 0
//       state.orderList = state.orderList.filter(item => item.orderedQuantity > 0);

//       // Update subtotal
//       state.subtotal = calculateSubtotal(state.orderList);
//     },
//     deleteItem: (state, action) => {
//       const itemIdToDelete = action.payload;
//       // Filter out the item with the provided ID
//       state.orderList = state.orderList.filter(item => item.id !== itemIdToDelete);

//       // Update subtotal after deletion
//       state.subtotal = calculateSubtotal(state.orderList);
//     },
//   },
// });

// export const { setOrder, deleteItem } = orderSlice.actions;

// export default orderSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const calculateSubtotal = (orderList) =>
  orderList.reduce((total, item) => total + item.price * item.orderedQuantity, 0);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orderList: [],
    subtotal: 0, 
    customerid: null,
  },
  reducers: {
    setOrder: (state, action) => {
      const { data } = action.payload;

      // Iterate over the new data
      data.forEach(newItem => {
        // Check if there's an item with the same ID in the orderList
        const existingIndex = state.orderList.findIndex(item => item.id === newItem.id);

        // If the item exists in orderList, update it
        if (existingIndex !== -1) {
          state.orderList[existingIndex] = { ...state.orderList[existingIndex], ...newItem };
        } else {
          // If the item doesn't exist, add it to orderList
          state.orderList.push(newItem);
        }
      });

      // Remove items with quantity <= 0
      state.orderList = state.orderList.filter(item => item.orderedQuantity > 0);

      // Update subtotal
      state.subtotal = calculateSubtotal(state.orderList);
    },
    deleteItem: (state, action) => {
      const itemIdToDelete = action.payload;
      // Filter out the item with the provided ID
      state.orderList = state.orderList.filter(item => item.id !== itemIdToDelete);

      // Update subtotal after deletion
      state.subtotal = calculateSubtotal(state.orderList);
    },
    setCustomerId: (state, action) => {
      console.log(action.payload)
      state.customerid = action.payload;
    },
  },
});

export const { setOrder, deleteItem, setCustomerId } = orderSlice.actions;

export default orderSlice.reducer;
