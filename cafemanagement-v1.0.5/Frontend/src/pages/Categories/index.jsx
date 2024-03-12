// import React, { useState } from "react";
// import { Helmet } from "react-helmet";
// import { Button, Img, Text, RatingBar, SelectBox,  Input } from "../../components";
// import Header from "../../components/Header";
// import Popup from "../../components/Popup/index"; // Adjust the import path
// import { Pencil } from 'lucide-react';
// import { Trash2 } from 'lucide-react';
// import ReactPaginate from 'react-paginate';

// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// const table2Data = [
//   { productname: 'Italian1' },
//   { productname: 'Italian2' },
//   { productname: 'Italian3' },
//   { productname: 'Italian4' },
//   // Add more objects as needed
// ];

// export default function MenuListPage() {
//   const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
//   const [editProductName, setEditProductName] = useState("");
//   const [editedProductName, setEditedProductName] = useState(""); // Add this line
//   const [itemOffset, setItemOffset] = useState(0);

//   // Simulate fetching items from another resources.
//   // (This could be items from props; or items loaded in a local state
//   // from an API endpoint with useEffect and useState)
//   const itemsPerPage = 4
//   const endOffset = itemOffset + itemsPerPage;
//   console.log(`Loading items from ${itemOffset} to ${endOffset}`);
//   const currentItems = items.slice(itemOffset, endOffset);
//   const pageCount = Math.ceil(items.length / itemsPerPage);

//   // Invoke when user click to request another page.
//   const handlePageClick = (event) => {
//     const newOffset = (event.selected * itemsPerPage) % items.length;
//     console.log(
//       `User requested page number ${event.selected}, which is offset ${newOffset}`
//     );
//     setItemOffset(newOffset);
//   };

//   const handleAddCategoryClick = () => {
//     setShowAddCategoryPopup(true);
//   };

//   const handleEditClick = (productName) => {
//     setEditProductName(productName);
//     setShowAddCategoryPopup(true);
//   };

//   const handlePopupSubmit = () => {
//     // Implement logic for adding or updating a category
//     setShowAddCategoryPopup(false);
//   };

//   return (
//     <>
//       <Helmet>
//         <title>Varun's Application2</title>
//         <meta
//           name="description"
//           content="Web site created using create-react-app"
//         />
//       </Helmet>
//       <div className="flex flex-row justify-center w-full bg-white-A700">
//         <div className="flex flex-row justify-center items-start w-full">
//           <div className="flex flex-col items-center justify-start w-[83%] gap-9">
//             <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
//             <div className="flex flex-row justify-center w-[94%]">
//               <div className="flex flex-col items-center justify-start w-full">
//                 <div className="flex flex-row justify-between items-center w-full">
//                   <div className="flex flex-col items-start justify-start gap-1.5">
//                     <Text size="xl" as="p">
//                       Manage Category
//                     </Text>
//                     <Text size="lg" as="p" className="!text-blue_gray-400">
//                       Menu / Menu List
//                     </Text>
//                   </div>
//                   <SelectBox
//                     indicator={
//                       <Img
//                         src="images/img_frame_11_white_a700.svg"
//                         alt="Frame 11"
//                       />
//                     }
//                     name="today"
//                     placeholder="Today"
//                     options={dropDownOptions}
//                     className="w-[9%] gap-px border-blue-A200 border border-solid"
//                   />
//                 </div>
//                 <div className="flex flex-row justify-between items-center w-[94%] mt-6">
//                   <Input
//                     type="text"
//                     placeholder="Search..."
//                     className="w-[20%] bg-slate-300"
//                   />
//                   <Button
//                     onClick={handleAddCategoryClick}
//                     className="w-[15%] bg-blue_A200 text-white rounded-sm"
//                   >
//                     Add Category
//                   </Button>
//                 </div>
//                 <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
//                   {/* Table for Categories */}
//                   <table className="w-[1036px] mx-[11px]">
//                     <thead>
//                       <tr className="mb-6">
//                         <th className="text-center text-gray-700_01 font-roboto m-3">
//                           Category Name
//                         </th>
//                         <th className="text-center text-gray-700_01 font-roboto m-3">
//                           Edit
//                         </th>
//                         <th className="text-center text-gray-700_01 font-roboto m-3">
//                           Delete
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {table2Data.map((rowData, index) => (
//                         <tr key={index} className="">
//                           <td className="text-center text-gray-700_01 font-roboto m-2  h-14">
//                             {rowData.productname}
//                           </td>
//                           <td className="text-center text-gray-700_01 font-roboto m-2">
//                             <button className="items-center " onClick={() => handleEditClick(rowData.productname)}>
//                               <Pencil color="rgb(67, 143, 254)" />
//                             </button>
//                           </td>
//                           <td className="text-center text-gray-700_01 font-roboto m-2">
//                             <button className="items-center">
//                               <Trash2 color="rgb(250, 0, 0)"  />
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//                 <ReactPaginate
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={pageCount}
//         previousLabel="< previous"
//         renderOnZeroPageCount={null}
//       />
//                 {/* Search Bar */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Add Category Popup */}
//         {/* Add/Edit Category Popup */}
//         {showAddCategoryPopup && (
//         <Popup
//           title={editProductName ? "Edit Category" : "Add Category"}
//           onClose={() => setShowAddCategoryPopup(false)}
//         >
//           <div className="flex flex-col items-center justify-center ">
//             <Input
//               type="text"
//               placeholder="Category Name"
//               className="w-full mb-4 p-2 border"
//               value={editedProductName || editProductName}
//               onChange={(e) => setEditedProductName(e.target.value)}
//             />
//             <Button
//               onClick={handlePopupSubmit}
//               className="w-full bg-blue-500 text-white py-2 rounded"
//             >
//               {editProductName ? "Update" : "Submit"}
//             </Button>
//           </div>
//         </Popup>
//       )}
//     </>
//   );
// }

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import {
  Button,
  Img,
  Text,
  RatingBar,
  SelectBox,
  Input,
} from "../../components";
import Header from "../../components/Header";
import Popup from "../../components/Popup/index"; // Adjust the import path
import { Pencil } from "lucide-react";
import { Trash2 } from "lucide-react";
import ReactPaginate from "react-paginate";
import { useCategoryContext } from "../../context/category";

import store from "slice/store";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const table2Data = [
  { productname: "Italian1" },
  { productname: "Italian2" },
  { productname: "Italian3" },
  { productname: "Italian4" },
  { productname: "Italian5" },
  { productname: "Italian6" },
  { productname: "Italian7" },
  { productname: "Italian8" },
  // Add more objects as needed
];

export default function MenuListPage() {
  const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);
  const [editProductName, setEditProductName] = useState("");
  const [itemOffset, setItemOffset] = useState(0);
  const { getCatgory, addCatgory } = useCategoryContext();
  const { categories } = store.getState().category;

  useEffect(() => {
    getCatgory();
  }, []);

  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = table2Data.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(table2Data.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % table2Data.length;
    setItemOffset(newOffset);
  };

  const handleAddCategoryClick = () => {
    setEditProductName("");
    setShowAddCategoryPopup(true);
  };

  const handleEditClick = (productName) => {
    setEditProductName(productName);
    setShowAddCategoryPopup(true);
  };

  const handlePopupSubmit = () => {
    addCatgory("dev");
    setShowAddCategoryPopup(false);
    setEditProductName("");
  };

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
                  />
                  <Button
                    onClick={handleAddCategoryClick}
                    className="w-[15%] bg-blue_A200 text-white rounded-sm"
                  >
                    Add Category
                  </Button>
                </div>
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
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
                              onClick={() => handleEditClick(rowData.name)}
                            >
                              <Pencil color="rgb(67, 143, 254)" />
                            </button>
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto m-2">
                            <button className="items-center">
                              <Trash2 color="rgb(250, 0, 0)" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <ReactPaginate
                  breakLabel="..."
                  nextLabel="next >"
                  onPageChange={handlePageClick}
                  pageRangeDisplayed={5}
                  pageCount={pageCount}
                  previousLabel="< previous"
                  renderOnZeroPageCount={null}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showAddCategoryPopup && (
        <Popup
          title={editProductName ? "Edit Category" : "Add Category"}
          onClose={() => {
            setShowAddCategoryPopup(false);
            setEditProductName(""); // Reset editedProductName when closing the popup
          }}
        >
          <div className="flex flex-col items-center justify-center ">
            <Input
              type="text"
              placeholder="Category Name"
              className="w-full mb-4 p-2 border"
              value={editProductName || ""}
              onChange={(e) => {setEditProductName(e.target.value);}}
            />
            <Button
              onClick={handlePopupSubmit}
              className="w-full bg-blue-500 text-white py-2 rounded"
            >
              {editProductName ? "Update" : "Submit"}
            </Button>
          </div>
        </Popup>
      )}
    </>
  );
}
