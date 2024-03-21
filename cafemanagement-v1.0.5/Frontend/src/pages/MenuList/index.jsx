

import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox,Input } from "../../components";
import Header from "../../components/Header";
import { useMenuContext } from "../../context/menu"
import { useSelector } from 'react-redux';
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import Popup from "../../components/Popup/index";
import { useOrderContext } from "../../context/order";



const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


export default function MenuListPage() {

  const {menu,categorylist,pagination} = useSelector((state) => state.menu);
  const {totalPages,currentPage,rowsPerPage} =pagination
  const { getOrderList } = useOrderContext();

 
  const { getMenu,getCatgory,updateMenuDetails,deleteMenuItem,searchMenu } = useMenuContext();

  useEffect(() => {
    getMenu();
    getCatgory();
    getOrderList();
  }, [])

  console.log(menu.name)
 

  const [searchValue,setsearchValue] = useState('')
  const [editingProduct, setEditingProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

  const handleEditClick = async (product) => {
    setEditingProduct(product);
    setIsPopupOpen(true);
  };
  
  useEffect(() => {
    console.log(editingProduct);
  }, [editingProduct]);


  const handlePopupClose = () => {
    setEditingProduct(null);
    setIsPopupOpen(false);
  };

  const handleFormSubmit = (updatedProduct) => {
    updateMenuDetails(editingProduct);
   
    // Handle form submission, e.g., dispatch an action to update the product
    //console.log("Updated Product:", updatedProduct);

    // Close the popup

    handlePopupClose();
  };

  const handleDeleteClick = (product) => {
    setEditingProduct(product);
    setIsDeleteConfirmationOpen(true);
  };

  const handleConfirmDelete = () => {
    // Handle delete logic here
    console.log("Deleting product:", editingProduct);
    deleteMenuItem(editingProduct.id)
    // Close the confirmation popup
    setIsDeleteConfirmationOpen(false);
  };
  
  const handleCancelDelete = () => {
    // Close the confirmation popup
    setIsDeleteConfirmationOpen(false);
  };

  const updateData = () =>{
    
    updateMenuDetails(editingProduct);
    console.log(editingProduct)
  }

  const handleNextPage = () => {
    
    getMenu(currentPage + 1,rowsPerPage);
    //setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    getMenu(currentPage-1,rowsPerPage);
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
    getMenu(currentPage,Number(e.target.value));// Reset to the first page when changing items per page
  };

  const onPageChange = (pageNumber) => {
    //setItemsPerPage(Number(e.target.value));
    getMenu(Number(pageNumber),rowsPerPage);// Reset to the first page when changing items per page
  };

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    if(searchTerm === ""){
      setsearchValue("");
      getMenu(1,5);
    }else{
      setsearchValue(searchTerm);
      searchMenu(searchTerm);
    }
  };

  return (
    <>
      <Helmet>
        <title>Varun's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-center w-full bg-white-A700 ">
        <div className="flex flex-row justify-center items-start w-full">
          <div className="flex flex-col items-center justify-start w-[83%] gap-9">
            <Header className="flex justify-center items-center w-full  bg-white-A700 shadow-xs" />
            <div className="flex flex-row justify-center w-[94%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Menu List
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Menu / Menu List
                    </Text>
                  </div>
                  <SelectBox
                    indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
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
                  </div>
                <div className="flex flex-col justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                  <table className="w-[1036px] -m-8 mt-2">
                    <thead>
                      <tr className="m-4">
                       
                        <th className="text-center text-gray-700_01 font-roboto ">Product Name</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Quantity</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Category</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Status</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Price</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menu.map((rowData, index) => (
                        <tr key={index}>
                         
                          <td className="text-center text-gray-700_01 font-roboto h-14 ">
                          {rowData.productname}
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto ">{rowData.quantity}</td>
                          <td className="text-center text-gray-700_01 font-roboto h-14 ">
                          {rowData.name}
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto ">
                            <Text as="p" className="!text-green-500">
                            {rowData.quantity > 0 ? 'In Stock' : 'Out of Stock'}
                            </Text>
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto "> {rowData.price}</td>
                          <td className="text-center text-gray-700_01 font-roboto m-2 ">
                            <button
                              className="items-center m-1"
                              onClick={() => handleEditClick(rowData)}
                            >
                              <Pencil color="rgb(67, 143, 254)" />
                            </button>
                            <button className="items-center m-1" 
                            onClick={() => handleDeleteClick(rowData)}
                            >
                              <Trash2 color="rgb(250, 0, 0)" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {!searchValue && <div class="flex items-center gap-4 justify-center mt-12">
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
      {isPopupOpen && (
        <Popup title="Edit Product" onClose={handlePopupClose}>
          <form className="flex  flex-col gap-4" onSubmit={(e) => { e.preventDefault(); handleFormSubmit(editingProduct); }}>
          <Input type="text" value={editingProduct.productname} onChange={(e) => setEditingProduct({ ...editingProduct, productname: e.target.value })} />
  <Input type="text" value={editingProduct.quantity} onChange={(e) => setEditingProduct({ ...editingProduct, quantity: e.target.value })} />
            
            <div className="relative w-60 bg-gray-50_01 rounded-[17px] border border-solid text-blue_gray-400">
            <select
  value={editingProduct.name} // Use editingProduct.name as the value
  onChange={(e) => {
    const selectedName = e.target.value;
    const selectedCategory = categorylist.find(category => category.name === selectedName);
    setEditingProduct({ ...editingProduct, name: selectedName, categoryid: selectedCategory?.id });
  }}
  className="input-box w-56 ml-4 p-2"
>
<option  value={editingProduct.name}>{editingProduct.name}</option>
  {categorylist.map((category) => (
    <option key={category.id} value={category.name}>
      {category.name}
    </option>
  ))}
</select>
</div>
<Input type="text" value={editingProduct.price} onChange={(e) => setEditingProduct({ ...editingProduct, price: e.target.value })} />

            <Button type="submit" >Update</Button>
          </form>
        </Popup>
      )}
      {isDeleteConfirmationOpen && (
  <Popup
    title="Confirm Deletion"
    onClose={handleCancelDelete}
  >
    <div className="flex flex-col items-center justify-center">
      <p>Are you sure you want to delete this product?</p>
      <div className="flex justify-around mt-4">
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

