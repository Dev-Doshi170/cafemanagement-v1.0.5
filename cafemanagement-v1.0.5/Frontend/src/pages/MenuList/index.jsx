

import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, SelectBox } from "../../components";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const table2Data = [
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692313",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692318",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692312",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692789",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  { productid: "#46569233", productname: "Sweet cheezy pizza ", quantity: "6957X", satus: "In Stock", price: "$56.12" },
  {
    productid: "#465692378",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "Out In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692336",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
  {
    productid: "#465692316",
    productname: "Sweet cheezy pizza ",
    quantity: "6957X",
    satus: "In Stock",
    price: "$56.12",
  },
];

export default function MenuListPage() {
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
                <div className="flex flex-row justify-center w-full mt-9 p-[26px] bg-white-A700 shadow-md rounded-[15px]">
                  <table className="w-[1036px] mx-[11px]">
                    <thead>
                      <tr className="m-4">
                        <th className="text-center text-gray-700_01 font-roboto ">Product ID</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Product Name</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Quantity</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Status</th>
                        <th className="text-center text-gray-700_01 font-roboto ">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {table2Data.map((rowData, index) => (
                        <tr key={index}>
                          <td className="text-center text-gray-700_01 font-roboto ">{rowData.productid}</td>
                          <td className="text-center text-gray-700_01 font-roboto h-14 ">
                          {rowData.productname}
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto ">{rowData.quantity}</td>
                          <td className="text-center text-gray-700_01 font-roboto ">
                            <Text as="p" className="!text-green-500">
                              {rowData.satus}
                            </Text>
                          </td>
                          <td className="text-center text-gray-700_01 font-roboto "> {rowData.price}</td>
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
    </>
  );
}

