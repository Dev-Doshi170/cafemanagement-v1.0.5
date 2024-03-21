import React ,{ useEffect,useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../components";
import Header from "../../components/Header";
import { useOrderContext } from "../../context/order";
import { useSelector } from 'react-redux';

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];



const OrderListPage = () => {
  const { getOrderList,updateOrderStatus } = useOrderContext();
  const {orderlist} = useSelector((state) => state.order);


  useEffect(() => {
    
    getOrderList();
  }, [])

  const handleCheckboxClick = (orderId) => {
    console.log('Checkbox clicked for order ID:', orderId);
    updateOrderStatus(orderId);
    // Call your function to update the status here, passing orderId
  };

  console.log(orderlist)

  return (
    <div className="flex flex-row justify-center w-full bg-white-A700">
      <div className="flex flex-col items-center justify-start w-[83%]">
        <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
        <div className="flex flex-col items-center justify-start w-[94%] gap-9">
          <div className="flex flex-row justify-between items-center w-full">
            <div className="flex flex-col items-start justify-center gap-1.5">
              <Text size="xl" as="p">
                Order List
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Dashboard / Order List
              </Text>
            </div>
            <div className="flex flex-row justify-start w-[25%] gap-[22px]">
              <div className="flex gap-4 w-full ">
            <label htmlFor="">Show data of last 1 hour only</label>
            <input
            type="checkbox"
            //checked={rowData.status}
            //onChange={() => handleCheckboxClick(rowData.orderid)}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            
            />
            </div>
             
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-[26px]">
            <div className="flex flex-row justify-center w-full p-[23px] bg-white-A700 shadow-md rounded-[15px]">
              <table className="w-[1062px]">
                <thead>
                  <tr className="m-4">
                    <th className="text-gray-700_01 font-roboto ">Order ID</th>
                    <th className="text-gray-700_01 font-roboto w-52">Date</th>
                    <th className="text-gray-700_01 font-roboto ">Customer</th>
                    <th className="text-gray-700_01 font-roboto ">Amount</th>
                    <th className="text-gray-700_01 font-roboto ">Product Name</th>
                    <th className="text-gray-700_01 font-roboto ">Quantity</th>
                    <th className="text-gray-700_01 font-roboto ">Total Amount</th>
                    <th className="text-gray-700_01 font-roboto ">Status</th>
                  </tr>
                </thead>
                
                <tbody>
 
  {orderlist && orderlist.length > 0 ? (
    
    orderlist.map((rowData, index) => (
      <tr key={index} className={rowData.status ? "opacity-50" : ""}>
        <td className="text-center text-gray-700_01 font-roboto">{rowData.orderid}</td>
        <td className="text-center w-14 text-gray-700_01 font-roboto h-14">
          {new Date(rowData.Date).toLocaleString('en-US', {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })}
        </td>
        <td className="text-center text-gray-700_01 font-roboto">{rowData.customername}</td>
        <td className="text-center text-gray-700_01 font-roboto">{(rowData.amount * 1.18).toFixed()}</td>
        <td className="text-center text-gray-700_01 font-roboto">{rowData.productname}</td>
        <td className="text-center text-gray-700_01 font-roboto">{rowData.quantity}</td>
        <td className="text-center text-gray-700_01 font-roboto">{Math.round(rowData.amount * rowData.quantity * 1.18)}</td>
        <td className="text-center text-gray-700_01 font-roboto">
          {/* Assuming rowData.status is a boolean value */}
          <input
            type="checkbox"
            checked={rowData.status}
            onChange={() => handleCheckboxClick(rowData.orderid)}
            className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
            
          />
        </td>
      </tr>
    ))
  ) : (
    // If orderlist is null or empty, render a single row indicating no orders found
    <tr>
      <td colSpan="5" className="text-center text-gray-700_01 font-roboto">
        No orders found.
      </td>
    </tr>
  )}
</tbody>
              </table>
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <Text as="p" className="!font-poppins text-center">
                Displaying 10 Out of 250
              </Text>
              <div className="flex flex-row justify-start items-center w-[12%] gap-[18px]">
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
  );
};

export default OrderListPage;

