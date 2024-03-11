// import React from "react";
// import { Helmet } from "react-helmet";
// import { Button, Img, Text, RatingBar, SelectBox } from "../../components";
// import Header from "../../components/Header";


// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// export default function CategoriesPage() {
//   return (
//     <>
//       <Helmet>
//         <title>Varun's Application2</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-center w-full bg-white-A700">
//         <div className="flex flex-row justify-center items-start w-full">
          
//           <div className="flex flex-col items-center justify-start w-[83%] gap-[38px]">
//             <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
//             <div className="flex flex-row justify-center w-[94%]">
//               <div className="flex flex-col items-center justify-start w-full gap-[34px]">
//                 <div className="flex flex-row justify-between items-start w-full">
//                   <div className="flex flex-col items-start justify-start gap-1">
//                     <Text size="xl" as="p">
//                       Categories
//                     </Text>
//                     <Text size="lg" as="p" className="!text-blue_gray-400">
//                       Menu List / Categories
//                     </Text>
//                   </div>
//                   <SelectBox
//                     indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
//                     name="today"
//                     placeholder="Today"
//                     options={dropDownOptions}
//                     className="w-[9%] mt-2.5 gap-px border-blue-A200 border border-solid"
//                   />
//                 </div>
//                 <div className="justify-center w-full gap-[30px] grid-cols-3 grid">
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145.png"
//                       alt="pizza_for_kids"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <Img src="images/img_group_18196.svg" alt="review_45_one" className="h-[10px]" />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145_182x318.png"
//                       alt="image"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <Img src="images/img_group_18196.svg" alt="image_one" className="h-[10px]" />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145_1.png"
//                       alt="image"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <Img src="images/img_group_18196.svg" alt="image_one" className="h-[10px]" />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145_2.png"
//                       alt="image"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <RatingBar
//                           value={4}
//                           isEditable={true}
//                           activeColor="#438ffe"
//                           size={10}
//                           className="flex justify-between w-[66px]"
//                         />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145_3.png"
//                       alt="image"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <RatingBar
//                           value={4}
//                           isEditable={true}
//                           activeColor="#438ffe"
//                           size={10}
//                           className="flex justify-between w-[66px]"
//                         />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="flex flex-col items-center justify-start w-full gap-[5px] p-4 bg-white-A700 shadow-md rounded-[15px]">
//                     <Img
//                       src="images/img_rectangle_4145_4.png"
//                       alt="image"
//                       className="w-full object-cover rounded-[10px]"
//                     />
//                     <div className="flex flex-col items-start justify-start w-full gap-[13px]">
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Text size="lg" as="p" className="!font-medium">
//                           Pizza for kids
//                         </Text>
//                         <Text as="p" className="!text-blue_gray-400 text-right">
//                           Total Order : 250
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-start items-center gap-2.5">
//                         <RatingBar
//                           value={4}
//                           isEditable={true}
//                           activeColor="#438ffe"
//                           size={10}
//                           className="flex justify-between w-[66px]"
//                         />
//                         <Text size="s" as="p" className="!text-blue_gray-400">
//                           (Review 4.5 )
//                         </Text>
//                       </div>
//                       <div className="flex flex-row justify-between items-center w-full">
//                         <Button className="font-medium min-w-[82px]">Price: $32</Button>
//                         <Text as="p" className="!text-blue_gray-400">
//                           Revenue :$1000
//                         </Text>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-between items-center w-full">
//                   <Text as="p" className="!font-poppins text-center">
//                     Dispalying 10 Out of 250
//                   </Text>
//                   <div className="flex flex-row justify-start items-center w-[11%] gap-[18px]">
//                     <Text as="p" className="text-center">
//                       10-250
//                     </Text>
//                     <div className="flex flex-row justify-start w-[49%]">
//                       <Button size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px] z-[1]">
//                         <Img src="images/img_arrow_right_white_a700.svg" />
//                       </Button>
//                       <div className="flex flex-col items-center justify-start h-[30px] w-[30px] ml-[-1px]">
//                         <Button color="blue_50" size="xs" className="w-[30px] rounded-tr-[5px] rounded-br-[5px]">
//                           <Img src="images/img_arrow_right_blue_a200.svg" />
//                         </Button>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox,  Input } from "../../components";
import Header from "../../components/Header";
import Popup from "../../components/Popup/index"; // Adjust the import path
import { Pencil } from 'lucide-react';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const table2Data = [
  { productname: 'Italian1' },
  { productname: 'Italian2' },
  { productname: 'Italian3' },
  { productname: 'Italian4' },
  // Add more objects as needed
];

export default function MenuListPage() {
  const [showAddCategoryPopup, setShowAddCategoryPopup] = useState(false);

  const handleAddCategoryClick = () => {
    setShowAddCategoryPopup(true);
  };

  const handlePopupSubmit = () => {
    // Implement logic for adding a new category
    setShowAddCategoryPopup(false);
  };

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
                       Manage Category
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
                  <Input type="text" placeholder="Search..." className="w-[20%] bg-slate-300" />
                  <Button onClick={handleAddCategoryClick} className="w-[15%] bg-blue_A200 text-white rounded-sm">
                    Add Category
                  </Button>
                </div>
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                
                  {/* Table for Categories */}
                  <table className="w-[1036px] mx-[11px]">
                    <thead>
                      <tr className="m-4">
                        <th className="text-center text-gray-700_01 font-roboto m-3">Category Name</th>
                        <th className="text-center text-gray-700_01 font-roboto m-3">Edit</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table2Data.map((rowData, index) => (
                        <tr key={index} className="">
                          <td className="text-center text-gray-700_01 font-roboto m-2">{rowData.productname}</td>
                          <td className="items-center flex justify-center text-gray-700_01 font-roboto m-2">
                          <Pencil color="rgb(67, 143, 254)" />
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
                {/* Search Bar */}
               
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Add Category Popup */}
      {showAddCategoryPopup && (
        <Popup title="Add Category" onClose={() => setShowAddCategoryPopup(false)} >
          <div className="flex flex-col items-center justify-center ">
            <Input type="text" placeholder="Category Name" className="w-full mb-4 p-2 border" />
            <Button onClick={handlePopupSubmit} className="w-full bg-blue-500 text-white py-2 rounded">
              Submit
            </Button>
          </div>
        </Popup>
      )}
    </>
  );
}

