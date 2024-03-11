import React from "react";
import { Helmet } from "react-helmet";
import { Button, SelectBox, Img, Text, Input } from "../../components";
import Header from "../../components/Header";


const dropDownOptions = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

export default function AddTablePage() {
  return (
    <>
      <Helmet>
        <title>cafemanagement</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-row justify-start items-start w-full gap-px bg-white-A700">
        
        <div className="flex flex-col items-center justify-start w-[83%] gap-[35px]">
          <Header className="flex justify-center items-center w-full p-5 bg-white-A700 shadow-xs" />
          <div className="flex flex-col items-start justify-start w-[94%] gap-[37px]">
            <div className="flex flex-col items-start justify-start gap-1.5">
              <Text size="xl" as="p">
                Add Table
              </Text>
              <Text size="lg" as="p" className="!text-blue_gray-400">
                Table /Add Table
              </Text>
            </div>
            <div className="flex flex-col items-start justify-center w-full gap-[25px] p-5 bg-white-A700 shadow-md rounded-[15px]">
              <Text size="lg" as="p" className="mt-[5px] !font-medium">
                Choose Better Table Type
              </Text>
              <div className="flex flex-row justify-start items-start w-full gap-[30px]">
                <div className="flex flex-col items-center justify-start w-[49%] gap-[18px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Text size="lg" as="p">
                      Table Name
                    </Text>
                    <Input
                      color="gray_50_01"
                      size="sm"
                      type="text"
                      name="name"
                      placeholder="Enter Name "
                      className="w-full border-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <Text size="lg" as="p">
                      Upload
                    </Text>
                    <div className="flex flex-row justify-start w-full">
                      <div className="flex flex-row justify-center w-full p-[37px] border-gray-200 border border-dashed bg-gray-50_01 rounded-[5px]">
                        <div className="flex flex-col items-center justify-start w-[46%] gap-2.5 mx-[120px]">
                          <Img src="images/img_frame_15.svg" alt="image_five" className="h-[32px] w-[32px]" />
                          <Text as="p" className="!text-blue_gray-400 !font-normal">
                            <span className="text-gray-700_01 font-medium">Drop your imges here</span>
                            <span className="text-gray-700_01 font-medium">,</span>
                            <span className="text-blue_gray-400"></span>
                            <span className="text-blue-A200">or browes</span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-center justify-start w-[49%] gap-[18px]">
                  <div className="flex flex-col items-start justify-start w-full gap-2">
                    <Text size="lg" as="p">
                      Table Price
                    </Text>
                    <Input
                      color="gray_50_01"
                      size="sm"
                      name="price"
                      placeholder="Enter Price"
                      className="w-full border-gray-200 rounded-[5px]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start w-full gap-1.5">
                    <Text size="lg" as="p" className="!text-blue_gray-400">
                      Categories
                    </Text>
                    <SelectBox
                      color="gray_50_01"
                      size="sm"
                      indicator={<Img src="images/img_arrowdown.svg" alt="arrow_down" />}
                      name="select"
                      placeholder="Select"
                      options={dropDownOptions}
                      className="w-full gap-px border-gray-200 border border-solid rounded-[5px]"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-start mb-[5px] gap-[21px]">
                <Button size="md" className="font-medium min-w-[112px]">
                  Submit
                </Button>
                <Button size="md" variant="outline" className="font-medium min-w-[112px]">
                  Cencel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
