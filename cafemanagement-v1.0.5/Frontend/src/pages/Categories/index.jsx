import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox, Input } from "../../components";
import Header from "../../components/Header";
import Popup from "../../components/Popup/index";
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import { useCategoryContext } from "../../context/category";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import { setSelectedCategory} from '../../slice/categorySlice';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function MenuListPage() {
  const dispatch = useDispatch();
  const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
  const [editProductName, setEditProductName] = useState("");
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);
  const [searchValue,setsearchValue] = useState('')
  const [mode ,setMode] = useState();
  const { getCatgory, addCatgory,deleteCategory,editCategory,searchCategory } = useCategoryContext();
  const categories = useSelector((state) => state.category.categories);
  const {totalPages,currentPage,rowsPerPage} = useSelector((state) => state.category.pagination);


  useEffect(() => {
    getCatgory(1,5);
  }, []);

  const handleAddCategoryClick = () => {
    setMode('add')
    setEditProductName("");
    setShowAddCategoryPopup(true);
  };

  const handleEditClick = (data) => {
    setMode('edit')
    dispatch(setSelectedCategory(null));
    dispatch(setSelectedCategory(data)); 
    setEditProductName(data.name);
    setShowAddCategoryPopup(true);
  };

  const handleDeleteClick = (data) => {
    
    dispatch(setSelectedCategory(data)); 
    setDeleteConfirmation(true);
  };

  const handleCancelDelete = () => {
    setDeleteConfirmation(false);
  };

  const handleConfirmDelete = () => {
    // Perform delete action here
    console.log(`Deleting category: ${editProductName}`);
    deleteCategory(currentPage,rowsPerPage);
    setDeleteConfirmation(false);
  };

  const handlePopupSubmit = () => {
    if (mode === 'add') {
      addCatgory(currentPage,rowsPerPage);
    } else if (mode === 'edit') {
      editCategory(editProductName,currentPage,rowsPerPage);
    }
  
    if (deleteConfirmation) {
      handleConfirmDelete();
    } else {
      setShowAddCategoryPopup(false);
      setEditProductName("");
    }
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setsearchValue(searchTerm);
    searchCategory(searchTerm);
  };

  const handleNextPage = () => {
    
    getCatgory(currentPage + 1,rowsPerPage);
    //setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    getCatgory(currentPage-1,rowsPerPage);
  };

  // const handleFirstPage = () => {
  //   setCurrentPage(1);
  // };

  // const handleLastPage = () => {
  //   const totalPages = Math.ceil(categories.length / itemsPerPage);
  //   setCurrentPage(totalPages);
  // };

  const handleRowsPerPageChange = (e) => {
    //setItemsPerPage(Number(e.target.value));
    getCatgory(currentPage,Number(e.target.value));// Reset to the first page when changing items per page
  };

  const onPageChange = (pageNumber) => {
    //setItemsPerPage(Number(e.target.value));
    getCatgory(Number(pageNumber),rowsPerPage);// Reset to the first page when changing items per page
  };


  // Calculate current items based on the current page and items per page



  return (
    <>
      <Helmet>
        <title>Varun's Application2</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700">
        <div className="flex flex-row justify-center items-start w-full">
          <div className="flex flex-col items-center justify-start w-[83%] gap-9">
            <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Manage Category
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Menu / Menu List
                    </Text>
                  </div>
                  <SelectBox
                    indicator={
                      <Img
                        src="images/img_frame_11_white_a700.svg"
                        alt="Frame 11"
                      />
                    }
                    name="today"
                    placeholder="Today"
                    options={dropDownOptions}
                    className="w-[9%] gap-px border-blue-A200 border border-solid"
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-[94%] mt-6">
                  <Input
                    type="text"
                    placeholder="Search..."
                    className="w-[20%] bg-slate-300"
                    onChange={handleSearchChange}
                  />
                  <Button
                    onClick={handleAddCategoryClick}
                    className="w-[15%] bg-blue_A200 text-white rounded-sm"
                  >
                    Add Category
                  </Button>
                </div>
                <div className="flex flex-col justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                  <table className="w-[1036px] mx-[11px]">
                    <thead>
                      <tr className="mb-6">
                        <th className="text-center text-gray-700_01 font-roboto m-3">
                          Category Name
                        </th>
                        <th className="text-center text-gray-700_01 font-roboto m-3">
                          Edit
                        </th>
                        <th className="text-center text-gray-700_01 font-roboto m-3">
                          Delete
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories.map((rowData, index) => (
                        <tr key={index} className="">
                          <td className="text-center text-gray-700_01 font-roboto m-2 h-14">
                            {rowData.name}
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto m-2">
                            <button
                              className="items-center"
                              onClick={() => handleEditClick(rowData)}
                            >
                              <Pencil color="rgb(67, 143, 254)" />
                            </button>
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto m-2">
                            <button className="items-center" onClick={() => handleDeleteClick(rowData)}>
                              <Trash2 color="rgb(250, 0, 0)" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <div className="flex justify-between mt-4">
          <Button onClick={handleFirstPage}>First Page</Button>
          <Button onClick={handlePreviousPage}>Previous Page</Button>
          <p>{`Page ${currentPage}`}</p>
          <Button onClick={handleNextPage}>Next Page</Button>
          <Button onClick={handleLastPage}>Last Page</Button>
          <div>
            <label htmlFor="rowsPerPage">Rows per page: </label>
            <select
              id="rowsPerPage"
              value={itemsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
        </div> */}
       {!searchValue && <div class="flex items-center gap-4 justify-center mt-4 ">
  <button
    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button" disabled={currentPage === 1} onClick={handlePreviousPage}>  
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
    </svg>
    Previous
  </button>
  {/* <div class="flex items-center gap-2">
    <button
      class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        1
      </span>
    </button>
    
  </div> */}

<div className="flex items-center gap-2">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
        <button
        
          key={pageNumber}
          className={`relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase ${
            currentPage === pageNumber
              ? 'bg-blue-A200 text-white shadow-md shadow-gray-900/10 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none'
              : 'text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20'
          } disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
          type="button"
          onClick={() => onPageChange(pageNumber)}
          disabled={currentPage === pageNumber}
        >
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">{pageNumber}</span>
        </button>
      ))}
    </div>

  <button
    class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-full select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    type="button" disabled={currentPage === totalPages}  onClick={handleNextPage}>
    Next
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
      aria-hidden="true" class="w-4 h-4">
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
    </svg>
  </button>
  <div>
            <label htmlFor="rowsPerPage">Rows per page: </label>
            <select
              id="rowsPerPage"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
            >
              <option value={5}>5</option>
              <option value={10}>10</option>
            </select>
          </div>
</div>}
         
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddCategoryPopup && (
        <Popup
          title={mode === 'edit' ? "Edit Category" : "Add Category"}
          onClose={() => {
            setShowAddCategoryPopup(false);
            setEditProductName("");
          }}
        >
          <div className="flex flex-col items-center justify-center ">
            <Input
              type="text"
              placeholder="Category Name"
              className="w-full mb-4 p-2 border"
              value={editProductName || ""}
              onChange={(e) => setEditProductName(e.target.value)}
            />
            <Button
              onClick={handlePopupSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              {mode === 'edit'  ? "Update" : "Submit"}
            </Button>
          </div>
        </Popup>
      )}
      {deleteConfirmation && (
        <Popup
          title="Confirm Deletion"
          onClose={handleCancelDelete}
        >
          <div className="flex flex-col items-center justify-center">
            <p>Are you sure you want to delete this category?</p>
            <div className="flex justify-center mt-4">
              <Button onClick={handleConfirmDelete} className="mr-2 bg-red-500 text-white">
                Delete
              </Button>
              <Button onClick={handleCancelDelete} className="bg-gray-500 text-white">
                Cancel
              </Button>
            </div>
          </div>
        </Popup>
      )}
    </>
  );
}