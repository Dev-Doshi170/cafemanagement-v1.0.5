

import React, { useEffect,useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox,Input } from "../../components";
import Header from "../../components/Header";
import { useMenuContext } from "../../context/menu"
import { useSelector } from 'react-redux';
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import Popup from "../../components/Popup/index";



const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


export default function MenuListPage() {

  const {menu,categorylist} = useSelector((state) => state.menu);

 
  const { getMenu,getCatgory,updateMenuDetails } = useMenuContext();

  useEffect(() => {
    getMenu();
    getCatgory();
    
  }, [])

  console.log(menu.name)
 


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

  return (
    <>
      <Helmet>
        <title>Varun's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
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
                   
                  />
                  </div>
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                  <table className="w-[1036px] mx-[11px]">
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
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-[15px]">
                  <Text as="p" className="!font-poppins text-center">
                    Displaying 10 Out of 250
                  </Text>
                  <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
                    <Text as="p" className="text-center">
                      10-250
                    </Text>
                    <div className="flex flex-row justify-start w-[49%]">
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] z-[1]">
                        <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_white_a700.svg" />
                        </Button>
                      </div>
                      <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
                        <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
                          <Img src="images/img_arrow_right_blue_a200.svg" />
                        </Button>
                      </div>
                    </div>
                  </div>
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

