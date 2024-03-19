import React, { createContext, useContext, useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import {setMenu,setCategorylist,menuupdate,setSearchMenu} from '../slice/menuSlice'


const MenuContext = createContext();



export const MenuProvider = ({ children }) => {
  const dispatch = useDispatch();

  const getMenu = async (currentPage,rowsPerPage) => {
    try {
      currentPage = parseInt(currentPage);
      rowsPerPage = parseInt(rowsPerPage);
  
      const response = await fetch(`http://localhost:8000/menu/getmenu?currentPage=${currentPage}&rowsPerPage=${rowsPerPage}`);
      const result = await response.json();
      
      if (response.ok){
        dispatch(setMenu(result))
      }
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

  async function deleteMenuItem(id) {
    const apiUrl = 'http://localhost:8000/menu/deletemenu'; 
    const requestData = {
      menuId: id
    };
  
    try {
      const response = await fetch(apiUrl, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify(requestData)
      });
  
      if (response.ok) {
        const result = await response.json();
        if (response.ok){
          dispatch(setMenu(result))
        }
        console.log('Menu item deleted successfully:', result);
        return result; // You can return data or do something else with it
      } else {
        console.error('Failed to delete menu item:', response.statusText);
        return null; // Return null or throw an error based on your error handling logic
      }
    } catch (error) {
      console.error('An error occurred while deleting the menu item:', error);
      throw error; // Throw the error for the caller to handle
    }
  }

  async function addMenuItem(formdata,link) {
   console.log(link)

    try {
      const response = await fetch('http://localhost:8000/menu/addmenu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // You can add additional headers if needed
        },
        body: JSON.stringify({formdata,link}) // Convert data to JSON format
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Menu item added successfully:', data);
        return data; // You can return data or do something else with it
      } else {
        console.error('Failed to add menu item:', response.statusText);
        return null; // Return null or throw an error based on your error handling logic
      }
    } catch (error) {
      console.error('An error occurred while adding the menu item:', error);
      throw error; // Throw the error for the caller to handle
    }
  }

  

  const searchMenu = async (searchTerm) => {
    try {
      const response = await fetch(`http://localhost:8000/menu/searchmenu?name=${searchTerm}`);
  
      if (response.ok) {
        const result = await response.json();
        const { data } = result;
        dispatch(setSearchMenu(data));
      } else {
        console.error('Failed to search categories');
      }
    } catch (error) {
      console.error('Error searching categories:', error);
    }
  };

  // useEffect(() => {
  //   getMenu();
  // }, []);

  return (
    <MenuContext.Provider value={{ getMenu ,getCatgory,updateMenuDetails,deleteMenuItem,addMenuItem,searchMenu}}>
      {children}
      <ToastContainer />
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
