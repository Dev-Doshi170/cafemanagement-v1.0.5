import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {setMenu} from '../slice/menuSlice'

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getMenu = async () => {
    try {
      //dispatch({ type: actionTypes.SET_LOADING, payload: true });
      const response = await fetch(`http://localhost:8000/menu/getmenu`);
      const result = await response.json();
      
      dispatch(setMenu(result))
    } catch (error) {
      console.error('Error fetching categories:', error);
      //dispatch({ type: actionTypes.SET_ERROR, payload: 'Internal Server Error' });
    }
  };

  // useEffect(() => {
  //   getMenu();
  // }, []);

  return (
    <MenuContext.Provider value={{ getMenu }}>
      {children}
      <ToastContainer />
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
