// CountryContext.js
import React, { createContext, useContext, useState } from 'react';
import { useLocation  } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories} from '../slice/categorySlice';
const CategoryContext = createContext();




export const CategoryProvider = ({ children }) => {
  const dispatch = useDispatch();

    const addCatgory = async (name) => {
      try {
        const response = await fetch('http://localhost:8000/category/addcategory', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name
          }),
        });
    
        const result = await response.json();
    
        // Check if the 'data' property exists in the response
        if (result.ok) {
         console.log(result)
        } else {
          console.error('Invalid response structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getCatgory = async () => {
      try {
        const response = await fetch('http://localhost:8000/category', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          
        });
    
        
        const result = await response.json();
        const {data} = result

        console.log(data);
        dispatch(setCategories(data));
        // Check if the 'data' property exists in the response
        if (response.ok) {
        //  console.log(response)
        } else {
          console.error('Invalid response structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    

  

return (
    <CategoryContext.Provider value={{getCatgory ,addCatgory}}>
    {children}
    <ToastContainer />
    </CategoryContext.Provider>
    );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};