import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {setMenu,setCategorylist,menuupdate} from '../slice/menuSlice'

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getMenu = async () => {
    try {
      
      const response = await fetch(`http://localhost:8000/menu/getmenu`);
      const result = await response.json();
      
      dispatch(setMenu(result))
    } catch (error) {
      console.error('Error fetching categories:', error);
      
    }
  };

  const getCatgory = async () => {

    try {
      
      const response = await fetch(`http://localhost:8000/menu/getCatgorylist`);
    
      const result = await response.json();
      if (response.ok) {
      
      dispatch(setCategorylist(result));
      } else {
        console.error('Invalid response structure:', result);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const updateMenuDetails = async (prod) => {
    const {categoryid,id,name,price,productname,quantity} = prod
    //console.log(prod)
    
    try {
      // Make API call to update menu details
      const response = await fetch(`http://localhost:8000/menu/updatemenu`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ categoryid, productname, quantity, price ,id}),
      });

      if (response.ok) {
        const updatedMenu = await response.json();
        // Update menu details in the state
        dispatch(menuupdate(updatedMenu.data))
        
        console.log(updatedMenu.data);
      } else {
        console.error('Failed to update menu details');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // useEffect(() => {
  //   getMenu();
  // }, []);

  return (
    <MenuContext.Provider value={{ getMenu ,getCatgory,updateMenuDetails}}>
      {children}
      <ToastContainer />
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
