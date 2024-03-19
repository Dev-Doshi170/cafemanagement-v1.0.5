// import React from "react";
// import { Helmet } from "react-helmet";
// import { Button, SelectBox, Img, Text, Input } from "../../components";
// import Header from "../../components/Header";



// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// export default function AddMenuPage() {
//   return (
//     <div>
//       <Helmet>
//         <title>Varun's Application2</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-center items-start w-full bg-white-A700">
     
//         <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
//           <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
//           <div className="flex flex-col items-center justify-start w-[94%] gap-[35px]">
//             <div className="flex flex-row justify-between items-center w-full">
//               <div className="flex flex-col items-start justify-start gap-[7px]">
//                 <Text size="xl" as="p">
//                   Add Menu
//                 </Text>
//                 <Text size="lg" as="p" className="!text-blue_gray-400">
//                   Add Menu / Menu List / Categories
//                 </Text>
//               </div>
//               <SelectBox
//                 indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
//                 name="today"
//                 placeholder="Today"
//                 options={dropDownOptions}
//                 className="w-[9%] gap-px border-blue-A200 border border-solid"
//               />
//             </div>
//             <div className="flex flex-col items-start justify-center w-full gap-[26px] p-5 bg-white-A700 shadow-md rounded-[15px]">
//               <Text size="lg" as="p" className="mt-1.5 !font-medium">
//                 Choose Better Menu Type
//               </Text>
//               <div className="flex flex-col items-start justify-start w-full mb-1 gap-[25px]">
//                 <div className="flex flex-row justify-start w-full">
//                   <div className="flex flex-col items-center justify-start w-full gap-[18px]">
//                     <div className="flex flex-row justify-start w-full gap-[30px]">
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-2">
//                         <Text size="lg" as="p">
//                           Food Name
//                         </Text>
//                         <Input
//                           color="gray_50_01"
//                           size="sm"
//                           type="text"
//                           name="name"
//                           placeholder="Enter Name "
//                           className="w-full border-gray-200 rounded-[5px]"
//                         />
//                       </div>
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-2">
//                         <Text size="lg" as="p">
//                           Food Price
//                         </Text>
//                         <Input
//                           color="gray_50_01"
//                           size="sm"
//                           name="price"
//                           placeholder="Enter Price"
//                           className="w-full border-gray-200 rounded-[5px]"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex flex-row justify-start items-start w-full gap-[30px]">
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
//                         <Text size="lg" as="p">
//                           Upload
//                         </Text>
//                         <div className="flex flex-row justify-start w-full">
//                           <div className="flex flex-row justify-center w-full p-[37px] border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px]">
//                             <div className="flex flex-col items-center justify-start w-[46%] gap-2.5 mx-[120px]">
//                               <Img src="images/img_frame_15.svg" alt="image_five" className="h-[32px] w-[32px]" />
//                               <Text as="p" className="!text-blue_gray-400 !font-normal">
//                                 <span className="text-gray-700_01 font-medium">Drop your imges here</span>
//                                 <span className="text-gray-700_01 font-medium">,</span>
//                                 <span className="text-blue_gray-400"></span>
//                                 <span className="text-blue-A200">or browes</span>
//                               </Text>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
//                         <Text size="lg" as="p" className="!text-blue_gray-400">
//                           Categories
//                         </Text>
//                         <SelectBox
//                           color="gray_50_01"
//                           size="sm"
//                           indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
//                           name="select"
//                           placeholder="Select"
//                           options={dropDownOptions}
//                           className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start gap-[21px]">
//                   <Button size="md" className="font-medium min-w-[112px]">
//                     Submit
//                   </Button>
//                   <Button size="md" variant="outline" className="font-medium min-w-[112px]">
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React, { useEffect,useState } from "react";
// import { Helmet } from "react-helmet";
// import { Button, SelectBox, Img, Text, Input } from "../../components";
// import Header from "../../components/Header";
// import { useSelector } from 'react-redux';

// import { useMenuContext } from "../../context/menu"


// const dropDownOptions = [
//   { label: "Option1", value: "option1" },
//   { label: "Option2", value: "option2" },
//   { label: "Option3", value: "option3" },
// ];

// export default function AddMenuPage() {

//   const { getCatgory } = useMenuContext();
//   const {categorylist} = useSelector((state) => state.menu);

//   useEffect(() => {
    
//     getCatgory();
//     console.log(categorylist)
    
//   }, [])

//   return (
//     <>
//       <Helmet>
//         <title>Varun's Application2</title>
//         <meta name="description" content="Web site created using create-react-app" />
//       </Helmet>
//       <div className="flex flex-row justify-start items-start w-full bg-white-A700">
//         <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
//           <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
//           <div className="flex flex-col items-start justify-start w-[94%] gap-[37px]">
//             <div className="flex flex-col items-start justify-start gap-1.5">
//               <Text size="xl" as="p">
//                 Add Menu
//               </Text>
//               <Text size="lg" as="p" className="!text-blue_gray-400">
//                 Add Menu / Menu List / Categories
//               </Text>
//             </div>
//             <div className="flex flex-col items-start justify-center w-full gap-[26px] p-5 bg-white-A700 shadow-md rounded-[15px]">
//               <Text size="lg" as="p" className="mt-1.5 !font-medium">
//                 Choose Better Menu Type
//               </Text>
//               <div className="flex flex-col items-start justify-start w-full mb-1 gap-[25px]">
//                 <div className="flex flex-row justify-start w-full">
//                   <div className="flex flex-col items-center justify-start w-full gap-[18px]">
//                     <div className="flex flex-row justify-start w-full gap-[30px]">
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-2">
//                         <Text size="lg" as="p">
//                           Food Name
//                         </Text>
//                         <Input
//                           color="gray_50_01"
//                           size="sm"
//                           type="text"
//                           name="name"
//                           placeholder="Enter Name "
//                           className="w-full border-gray-200 rounded-[5px]"
//                         />
//                       </div>
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-2">
//                         <Text size="lg" as="p">
//                           Price
//                         </Text>
//                         <Input
//                           color="gray_50_01"
//                           size="sm"
//                           type="text"
//                           name="name"
//                           placeholder="Enter price "
//                           className="w-full border-gray-200 rounded-[5px]"
//                         />
//                       </div>
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-2">
//                         <Text size="lg" as="p">
//                           Food Price
//                         </Text>
//                         <Input
//                           color="gray_50_01"
//                           size="sm"
//                           name="price"
//                           placeholder="Enter Price"
//                           className="w-full border-gray-200 rounded-[5px]"
//                         />
//                       </div>
//                     </div>
//                     <div className="flex flex-row justify-start items-start w-full gap-[30px]">
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
//                         <Text size="lg" as="p">
//                           Upload
//                         </Text>
//                         <div className="flex flex-row justify-start w-full">
//                           <div className="flex flex-row justify-center w-full p-[37px] border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px]">
//                             <div className="flex flex-col items-center justify-start w-[46%] gap-2.5 mx-[120px]">
//                               <Img src="images/img_frame_15.svg" alt="image_five" className="h-[32px] w-[32px]" />
//                               <Text as="p" className="!text-blue_gray-400 !font-normal">
//                                 <span className="text-gray-700_01 font-medium">Drop your images here</span>
//                                 <span className="text-gray-700_01 font-medium">,</span>
//                                 <span className="text-blue_gray-400"></span>
//                                 <span className="text-blue-A200">or browse</span>
//                               </Text>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                       <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
//                         <Text size="lg" as="p" className="!text-blue_gray-400">
//                           Categories
//                         </Text>
//                         <SelectBox
//                           color="gray_50_01"
//                           size="sm"
//                           indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
//                           name="select"
//                           placeholder="Select"
//                           options={categorylist.map(category => ({ label: category.name, value: category.id }))}
//                           className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
//                         />
//                       </div>
                     
//                     </div>
                     
//                   </div>
//                 </div>
//                 <div className="flex flex-row justify-start gap-[21px]">
//                   <Button size="md" className="font-medium min-w-[112px]">
//                     Submit
//                   </Button>
//                   <Button size="md" variant="outline" className="font-medium min-w-[112px]">
//                     Cancel
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }


import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input } from "../../components";
import Header from "../../components/Header";
import { useSelector } from 'react-redux';

import { useMenuContext } from "../../context/menu"

export default function AddMenuPage() {
  const { getCatgory,addMenuItem } = useMenuContext();
  const { categorylist } = useSelector((state) => state.menu);

  const [formData, setFormData] = useState({
    productname: "",
    price: "",
    quantity: "",
    categoryid: null,
    image:null,
    url:null
  });

  useEffect(() => {
    getCatgory();
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0]; // Get the selected file
    setFormData({
      ...formData,
      image: file // Update the image in the form data
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCategoryChange = (selectedOption) => {
    setFormData({ ...formData, categoryid: selectedOption.categoryid });
  };
  
  const handleImageUpload = async(pics) => {
    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics); // Use the same key "file"
      data.append("upload_preset", "ml_default");
      data.append("cloud_name", "dtcu9cwxo");
      fetch("https://api.cloudinary.com/v1_1/dtcu9cwxo/upload", {
        method: "post",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // Update only the image URL in the formData
          setFormData(prevState => ({
            ...prevState,
            url: data.url.toString() // Update the image URL
          }));
          const link =  data.url.toString();
          console.log(data.url.toString());
          addMenuItem(formData,link)
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleSubmit = async() => {
    // Handle form submission here
    handleImageUpload(formData.image)
    //await addMenuItem(formData)
    //console.log(formData)
  };

  return (
    <>
      <Helmet>
        <title>Varun's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start items-start w-full bg-white-A700">
        <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
          <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
          <div className="flex flex-col items-start justify-start w-[94%] gap-[37px]">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Text size="xl" as="p">
                Add Menu
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Add Menu / Menu List / Categories
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-[26px] p-5 bg-white-A700 shadow-md rounded-[15px]">
              <Text size="lg" as="p" className="mt-1.5 !font-medium">
                Choose Better Menu Type
              </Text>
              <div className="flex flex-col items-start justify-start w-full mb-1 gap-[25px]">
                <div className="flex flex-row justify-start w-full">
                  <div className="flex flex-col items-center justify-start w-full gap-[18px]">
                    <div className="flex flex-row justify-start w-full gap-[30px]">
                      <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                        <Text size="lg" as="p">
                          Product Name
                        </Text>
                        <Input
                          color="gray_50_01"
                          size="sm"
                          type="text"
                          name="productname"
                          value={formData.productname}
                          onChange={handleChange}
                          placeholder="Enter Name "
                          className="w-full border-gray-200 rounded-[5px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                        <Text size="lg" as="p">
                          Price
                        </Text>
                        <Input
                          color="gray_50_01"
                          size="sm"
                          
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Enter price "
                          className="w-full border-gray-200 rounded-[5px]"
                        />
                      </div>
                      <div className="flex flex-col items-start justify-start w-[49%] gap-2">
                        <Text size="lg" as="p">
                          Quantity
                        </Text>
                        <Input
                          color="gray_50_01"
                          size="sm"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleChange}
                          placeholder="Enter Price"
                          className="w-full border-gray-200 rounded-[5px]"
                        />
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                    <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
  <Text size="lg" as="p">
    Upload
  </Text>
  <div className="flex flex-row justify-start w-full">
    <label htmlFor="image-upload" className="flex flex-row justify-center w-full p-[37px] border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px] cursor-pointer">
      <input 
        id="image-upload" 
        type="file" 
        accept="image/*" 
        name="image"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <div className="flex flex-col items-center justify-start w-[46%] gap-2.5 mx-[120px]">
        <Img src="images/img_frame_15.svg" alt="image_five" className="h-[32px] w-[32px]" />
        <Text as="p" className="!text-blue_gray-400 !font-normal">
          <span className="text-gray-700_01 font-medium">Drop your images here</span>
          <span className="text-gray-700_01 font-medium">,</span>
          <span className="text-blue_gray-400"></span>
          <span className="text-blue-A200">or browse</span>
        </Text>
      </div>
    </label>
  </div>
</div>
                      <div className="flex flex-col items-start justify-start w-[49%] gap-1.5">
                        <Text size="lg" as="p" className="!text-blue_gray-400">
                          Categories
                        </Text>
                        <SelectBox
                          color="gray_50_01"
                          size="sm"
                          indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                          name="selectedCategory"
                          placeholder="Select"
                          value={formData.selectedCategory}
                          onChange={handleCategoryChange}
                          options={categorylist.map(category => ({ label: category.name, categoryid: category.id }))}
                          className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
                        />
                      </div>
                     
                    </div>
                     
                  </div>
                </div>
                <div className="flex flex-row justify-start gap-[21px]">
                  <Button size="md" className="font-medium min-w-[112px]" onClick={handleSubmit}>
                    Submit
                  </Button>
                  <Button size="md" variant="outline" className="font-medium min-w-[112px]">
                    Cancel
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}