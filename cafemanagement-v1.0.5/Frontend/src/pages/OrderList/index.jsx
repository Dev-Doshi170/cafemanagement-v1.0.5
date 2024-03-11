import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, SelectBox } from "../../components";
import Header from "../../components/Header";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const tableData = [
  // Your table data here...
  {
            orderidone: "#01236556",
            date: "21 June 2020, 12:42 AM",
            customerone: "Kathryn Murphy",
            location: "35 Station Road London",
            amount: "$83.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "21 June 2020, 12:42 AM",
            customerone: "Kathryn Murphy",
            location: "35 Station Road London",
            amount: "$83.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "24 June 2020, 12:42 AM",
            customerone: "Kristin Watson",
            location: "35 Station Road London",
            amount: "$82.46\t",
            satusorder: "On Delivery",
          },
          {
            orderidone: "#01236556",
            date: "21 June 2020, 12:42 AM",
            customerone: "Darrell Steward",
            location: "35 Station Road London",
            amount: "$87.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "24 June 2020, 12:42 AM",
            customerone: "Jenny Wilson",
            location: "35 Station Road London",
            amount: "$82.46",
            satusorder: "On Delivery",
          },
          {
            orderidone: "#01236556",
            date: "24 June 2020, 12:42 AM",
            customerone: "Courtney Henry",
            location: "35 Station Road London",
            amount: "$90.46",
            satusorder: "On Delivery",
          },
          {
            orderidone: "#01236556",
            date: "21 June 2020, 12:42 AM",
            customerone: "Annette Black",
            location: "35 Station Road London",
            amount: "$12.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "21 June 2020, 12:42 AM",
            customerone: "Eleanor Pena",
            location: "35 Station Road London",
            amount: "$92.46",
            satusorder: "On Delivery",
          },
          {
            orderidone: "#01236556",
            date: "23 June 2020, 12:42 AM",
            customerone: "Wade Warren",
            location: "35 Station Road London",
            amount: "$32.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "218 June 2020, 12:42 AM",
            customerone: "Brooklyn Simmons",
            location: "35 Station Road London",
            amount: "$82.46",
            satusorder: "\tNew Order",
          },
          {
            orderidone: "#01236556",
            date: "218 June 2020, 12:42 AM",
            customerone: "Brooklyn Simmons",
            location: "35 Station Road London",
            amount: "$82.46",
            satusorder: "\tNew Order",
          },
];

const OrderListPage = () => {
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
            <div className="flex flex-row justify-start w-[22%] gap-[22px]">
              <SelectBox
                indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                name="allstatus"
                placeholder="All Status"
                options={dropDownOptions}
                className="w-[49%] gap-px border-blue-A200 border border-solid"
              />
              <SelectBox
                color="blue_50"
                variant="outline"
                indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                name="today"
                placeholder="Today"
                options={dropDownOptions}
                className="w-[42%] gap-px"
              />
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
                    <th className="text-gray-700_01 font-roboto ">Status Order</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((rowData, index) => (
                    <tr key={index}>
                      <td className="text-center text-gray-700_01 font-roboto ">{rowData.orderidone}</td>
                      <td className="text-center w-14 text-gray-700_01 font-roboto h-14">{rowData.date}</td>
                      <td className="text-center text-gray-700_01 font-roboto">{rowData.customerone}</td>
                      <td className="text-center text-gray-700_01 font-roboto">{rowData.amount}</td>
                      <td>
                        <div className="flex flex-row justify-around ">
                          <Button color="blue_50" className="mt-[11px] font-medium min-w-[100px] font-roboto">
                            {rowData.satusorder}
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
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

