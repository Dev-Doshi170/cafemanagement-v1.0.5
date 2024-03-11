import React from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, RatingBar, Heading, CheckBox, SelectBox } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";

import { createColumnHelper } from "@tanstack/react-table";

const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const table1Data = [
  {
    customerone: "Kristin Watson",
    reviewtwo:
      "Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Kristin Watson",
    reviewtwo:
      "Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Ralph Edwards",
    reviewtwo:
      "Generators on the Internet tend to repeat predefined necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Darrell Steward",
    reviewtwo:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Jenny Wilson",
    reviewtwo:
      "Repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
  {
    customerone: "Robert Fox",
    reviewtwo:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet It uses a dictionary of over 200 Latin words, combined with!",
    totalspent: "4.2",
    update: "Delete",
  },
];

export default function ReviewPage() {
  const table1Columns = React.useMemo(() => {
    const table1ColumnHelper = createColumnHelper();
    return [
      table1ColumnHelper.accessor("rowone", {
        cell: (info) => (
          <div className="flex flex-row justify-start">
            <CheckBox name="checkbox_one" label="" className="mt-[33px] mb-2" />
          </div>
        ),
        header: (info) => (
          <div className="flex flex-row justify-start">
            <CheckBox color="blue_A200" name="checkbox" label="" />
          </div>
        ),
        meta: { width: "47px" },
      }),
      table1ColumnHelper.accessor("customerone", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end gap-[13px]">
            <Img
              src="images/img_rectangle_4126.png"
              alt="image_five"
              className="w-[60px] mb-0.5 object-cover rounded-sm"
            />
            <div className="flex flex-col items-start justify-start w-[57%] mt-[25px] mr-[11px] gap-[9px]">
              <Text as="p">{info?.getValue?.()}</Text>
              <Text size="s" as="p" className="!text-blue-A200">
                #C01256
              </Text>
              <Text size="s" as="p" className="!text-blue_gray-400 !font-normal">
                21 June 2020, 12:42 AM
              </Text>
            </div>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Customer Profile
          </Text>
        ),
        meta: { width: "225px" },
      }),
      table1ColumnHelper.accessor("reviewtwo", {
        cell: (info) => (
          <Text size="s" as="p" className="!text-gray-700_a2 !font-normal opacity-0.8 !leading-[22px]">
            {info?.getValue?.()}
          </Text>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Review
          </Text>
        ),
        meta: { width: "451px" },
      }),
      table1ColumnHelper.accessor("totalspent", {
        cell: (info) => (
          <div className="flex flex-col items-start justify-start gap-2.5">
            <Heading as="h1" className="mt-[18px]">
              {info?.getValue?.()}
            </Heading>
            <RatingBar
              value={4}
              isEditable={true}
              activeColor="#438ffe"
              size={12}
              className="flex justify-between w-[96px]"
            />
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Total Spent
          </Text>
        ),
        meta: { width: "210px" },
      }),
      table1ColumnHelper.accessor("update", {
        cell: (info) => (
          <div className="flex flex-row justify-start items-end h-[115px] gap-[29px]">
            <Text as="p" className="mt-7 !text-blue-A200">
              {info?.getValue?.()}
            </Text>
            <Text as="p" className="!text-green-500">
              Publish
            </Text>
          </div>
        ),
        header: (info) => (
          <Text as="p" className="p-px">
            Update
          </Text>
        ),
        meta: { width: "116px" },
      }),
    ];
  }, []);

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
              <div className="flex flex-col items-center justify-start w-full gap-[33px]">
                <div className="flex flex-row justify-between items-center w-full">
                  <div className="flex flex-col items-start justify-start gap-1.5">
                    <Text size="xl" as="p">
                      Review
                    </Text>
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Customer / Review
                    </Text>
                  </div>
                  <div className="flex flex-row justify-start w-[21%] gap-[25px]">
                    <SelectBox
                      indicator={<Img src="images/img_frame_11_white_a700.svg" alt="Frame 11" />}
                      getOptionLabel={(e) => (
                        <>
                          <div className="flex items-center">
                            <Img src="images/img_mifilter.svg" alt="mi:filter" />
                            <span>{e.label}</span>
                          </div>
                        </>
                      )}
                      name="filter"
                      placeholder="Filter"
                      options={dropDownOptions}
                      className="w-[44%] border-blue-A200 border border-solid"
                    />
                    <SelectBox
                      color="blue_50"
                      variant="outline"
                      indicator={<Img src="images/img_frame_11.svg" alt="Frame 11" />}
                      name="newest"
                      placeholder="Newest"
                      options={dropDownOptions}
                      className="w-[46%] gap-px"
                    />
                  </div>
                </div>
                <div className="flex flex-row justify-center w-full p-[30px] bg-white-A700 shadow-md rounded-[15px]">
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "" }}
                    headerProps={{ className: "" }}
                    rowDataProps={{ className: "" }}
                    className="w-[1049px] mt-1.5 mb-1"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
                <div className="flex flex-row justify-between items-center w-full">
                  <Text as="p" className="!font-poppins text-center">
                    Dispalying 10 Out of 250
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
