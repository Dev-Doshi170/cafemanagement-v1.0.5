
import React, { createContext, useContext, useState } from 'react';
import { useLocation  } from 'react-router-dom';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from 'react-redux';
import { setCategories,setSearchCategory} from '../slice/categorySlice';
const CategoryContext = createContext();






export const CategoryProvider = ({ children }) => {
  const dispatch = useDispatch();

  const selectedCategory = useSelector((state) => state.category.selectedCategory);
  const pagination = useSelector((state) => state.category.pagination);

  
   

    const addCatgory = async (name,currentPage,rowsPerPage) => {
      try {
        const response = await fetch(`http://localhost:8000/category/addcategory?currentPage=${currentPage}&rowsPerPage=${rowsPerPage}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name
          }),
        });
    
        const result = await response.json();
        
        if (response.ok) {
          const {data} = result
          dispatch(setCategories(result));
        } else {
          console.error('Invalid response structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const getCatgory = async (currentPage,rowsPerPage) => {
      console.log(currentPage,rowsPerPage)
      try {
        
        const response = await fetch(`http://localhost:8000/category?currentPage=${currentPage}&rowsPerPage=${rowsPerPage}`);
      
        const result = await response.json();
        //console.log(result)
        const {data,pagination} = result
        
        // Check if the 'data' property exists in the response
        if (response.ok) {
        //  console.log(response)
        dispatch(setCategories(result));
        } else {
          console.error('Invalid response structure:', result);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    const deleteCategory = async (currentPage, rowsPerPage) => {
      try {
        const response = await fetch(`http://localhost:8000/category/deletecategory/${selectedCategory.id}?currentPage=${currentPage}&rowsPerPage=${rowsPerPage}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (response.ok) {
          const result = await response.json();
          const { data } = result;
          dispatch(setCategories(result));
        } else {
          console.error('Failed to delete category');
        }
      } catch (error) {
        console.error(error);
      }
    };

    const editCategory = async (editProductName,currentPage,rowsPerPage) => {
      try {
        const response = await fetch(`http://localhost:8000/category/editcategory?currentPage=${currentPage}&rowsPerPage=${rowsPerPage}`, {
          method: 'PUT', // Use PUT for update
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: editProductName,
            categoryId:selectedCategory.id
          }),
        });
    
        if (response.ok) {
          const result = await response.json();
          const { data } = result;
          dispatch(setCategories(result));s
        } else {
          const result = await response.json();
          console.error('Failed to edit category:', result.message);
          // Handle specific error messages, such as "Category already exists"
          if (result.message === 'Category already exists') {
            toast.error('Category already exists');
          }
        }
      } catch (error) {
        console.error('Error editing category:', error);
      }
    };

    const searchCategory = async (searchTerm) => {
      try {
        const response = await fetch(`http://localhost:8000/category/search?name=${searchTerm}`);
    
        if (response.ok) {
          const result = await response.json();
          const { data } = result;
          dispatch(setSearchCategory(data));
        } else {
          console.error('Failed to search categories');
        }
      } catch (error) {
        console.error('Error searching categories:', error);
      }
    };

  

return (
    <CategoryContext.Provider value={{getCatgory ,addCatgory,deleteCategory,editCategory,searchCategory}}>
    {children}
    <ToastContainer />
    </CategoryContext.Provider>
    );
};

export const useCategoryContext = () => {
  return useContext(CategoryContext);
};