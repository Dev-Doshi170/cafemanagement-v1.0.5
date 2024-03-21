

import { createSlice } from '@reduxjs/toolkit';

const calculateSubtotal = (cartlist) =>
  cartlist.reduce((total, item) => total + item.price * item.orderedQuantity, 0);

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    cartlist: [],
    subtotal: 0, 
    customerid: null,
    orderlist:null,
  },
  reducers: {
    setOrder: (state, action) => {
      const { data } = action.payload;

      // Iterate over the new data
      data.forEach(newItem => {
        // Check if there's an item with the same ID in the cartlist
        const existingIndex = state.cartlist.findIndex(item => item.id === newItem.id);

        // If the item exists in cartlist, update it
        if (existingIndex !== -1) {
          state.cartlist[existingIndex] = { ...state.cartlist[existingIndex], ...newItem };
        } else {
          // If the item doesn't exist, add it to cartlist
          state.cartlist.push(newItem);
        }
      });

      // Remove items with quantity <= 0
      state.cartlist = state.cartlist.filter(item => item.orderedQuantity > 0);

      // Update subtotal
      state.subtotal = calculateSubtotal(state.cartlist);
    },
    deleteItem: (state, action) => {
      const itemIdToDelete = action.payload;
      // Filter out the item with the provided ID
      state.cartlist = state.cartlist.filter(item => item.id !== itemIdToDelete);

      // Update subtotal after deletion
      state.subtotal = calculateSubtotal(state.cartlist);
    },
    setCustomerId: (state, action) => {
      console.log(action.payload)
      state.customerid = action.payload;
      
    },

    setOrderList: (state, action) => {
      console.log(action.payload)
      state.orderlist = action.payload;
    },
    statusUpdate: (state, action) => {
      console.log(action.payload)
      const orderIdToUpdate = action.payload;
      // Find the order with the provided orderIdToUpdate in the orderlist
      const orderToUpdate = state.orderlist.find(order => order.orderid === orderIdToUpdate);

      // If the order is found, update its status to true
      if (orderToUpdate) {
        orderToUpdate.status = true;
      } else {
        console.log(`Order with ID ${orderIdToUpdate} not found.`);
      }
    },

  },
});

export const { setOrder, deleteItem, setCustomerId ,setOrderList ,statusUpdate} = orderSlice.actions;

export default orderSlice.reducer;
