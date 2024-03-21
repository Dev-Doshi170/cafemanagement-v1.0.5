import React, { useState } from 'react';
import { Helmet } from "react-helmet";
import { Button, Text,  Input, Img, Heading } from "../../components";
import {Radio} from "../../components/Radio"
import {TextArea} from "../../components/TextArea"
import {  deleteItem } from "../../slice/oderSlice";
import { useSelector, useDispatch } from "react-redux";
import { Trash2 } from "lucide-react";
import { useCustomerContext } from "../../context/customer";
import {useOrderContext} from  "../../context/order"



export default function CheckoutPage() {
  const dispatch = useDispatch();

  const {addCustomer} = useCustomerContext();
  const {addOrder} = useOrderContext();

  const orderList = useSelector((state) => state.order.orderList);
  const subtotal = useSelector((state) => state.order.subtotal);

  const [customerData, setCustomerData] = useState({
    firstname: '',
    lastname: '',
    phonenumber: '',
    email: '',
    message: '',
    paymentMethod: '',
  });

  const deltefromoderlist = (id) => {
    dispatch(deleteItem(id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleRadioChange = (value) => {
    setCustomerData((prevData) => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  const placeOrder = async() => {
    // console.log('Customer Data:', customerData);
    console.log('Order List:', orderList);
    await addCustomer(customerData);
    //addOrder(orderList ,customerData.paymentMethod)

    
    // Here you would typically send this data to your backend or process it further
  }

  const taxFee = subtotal * 0.18;
  const total = subtotal + taxFee;
  return (
    <>
      <Helmet>
        <title>Dev's Application1</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full pt-[51px] gap-[120px] md:pt-5 bg-gray-50">
        <div className="flex flex-col items-start justify-start w-full gap-[100px] md:px-5 max-w-[1112px]">
          
          <div className="flex flex-row md:flex-col justify-between items-start w-[87%] md:w-full md:gap-10">
            
            <div className="flex flex-col items-center justify-start w-[85%] md:w-full">
              <div className="flex flex-col items-center justify-start w-full p-[45px] md:p-5 bg-white-A700 shadow-xs rounded-[16px]">
              <div className="flex flex-col items-center justify-center w-full gap-[53px] py-[45px] md:py-5 bg-white-A700 shadow-xs rounded-[20px]">
                      <div className="flex flex-col items-center justify-start w-full gap-[46px]">
                        <Heading size="lg" as="h3">
                          Order list
                        </Heading>
                        <div className="h-px w-full bg-blue_gray-100" />
                      </div>
                      <div className="flex flex-col w-[83%] gap-16 md:gap-10 ">
                        {orderList.map((item) => (
                          <div className="flex flex-col items-center justify-start w-full gap-[31px]">
                            <div className="flex flex-row justify-between items-start w-full">
                              <Heading as="h4" className="!text-black-900">
                                {item.productname}
                              </Heading>
                              <Trash2
                                color="rgb(250, 0, 0)"
                                onClick={() => deltefromoderlist(item.id)}
                                className="cursor-pointer"
                              />
                            </div>
                            <div className="flex flex-row justify-between items-center w-full">
                              <div className="flex flex-row justify-center w-[42%]">
                                <div className="flex flex-row justify-between items-center w-full bg-gray-50_01 rounded-[16px]">
                                  <Text
                                    as="p"
                                    className="!text-gray-900 !text-[16.62px]"
                                  >
                                    Quantity: {item.orderedQuantity}
                                  </Text>
                                </div>
                              </div>
                              <Text size="lg" as="p" className="!text-gray-900">
                                ${item.price}
                              </Text>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="flex flex-row justify-center w-full"></div>
                      <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[26px]">
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Subtotal
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {subtotal.toFixed(2)}
                          </Text>
                        </div>
                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Tax fee
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {taxFee.toFixed(2)}
                          </Text>
                        </div>

                        <div className="flex flex-row justify-between w-full">
                          <Heading as="h4" className="mb-px !text-black-900">
                            Total
                          </Heading>
                          <Text size="lg" as="p" className="!text-gray-900">
                            {total.toFixed(0)}
                          </Text>
                        </div>
                      </div>
                      
                    </div>
                <div className="flex flex-col items-center justify-start w-full gap-[29px] m-4">
                  <Heading size="s" as="h1" className="!text-gray-900 !font-opensans text-center">
                    Checkout
                  </Heading>
                  <div className="flex flex-col items-center justify-start h-[721px] w-[722px] md:w-full gap-[30px]">
                    
                    <div className="flex flex-col items-start justify-start w-full gap-[11px]">
                      <Text size="s" as="p" className="!text-gray-900">
                        Order data
                      </Text>
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-col items-center justify-start w-full gap-6">
                          <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                            <Input
                              shape="round"
                              type="text"
                              name="firstname"
                              placeholder="First name"
                              className="w-[49%] sm:w-full"
                              value={customerData.firstname}
                              onChange={handleInputChange}
                            />
                             <Input
                              shape="round"
                              type="text"
                              name="lastname"
                              placeholder="Last name"
                              className="w-[49%] sm:w-full"
                              value={customerData.lastname}
                              onChange={handleInputChange}
                            />
                            
                          </div>
                          <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                            <Input
                              shape="round"
                              type="number"
                              name="phonenumber"
                              placeholder="Phone number"
                              className="w-[49%] sm:w-full"
                              value={customerData.phonenumber}
                              onChange={handleInputChange}
                            />
                            <Input
                              shape="round"
                              type="email"
                              name="email"
                              placeholder="Email address"
                              className="w-[49%] sm:w-full"
                              value={customerData.email}
                              onChange={handleInputChange}
                            />
                          </div>
                          <textarea
                            shape="round"
                            name="message"
                            placeholder="Message"
                            className="w-full sm:pb-5 sm:pr-5 text-gray-500 h-52 border-2 border-slate-800 rounded-lg p-2"
                            value={customerData.message}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start w-full gap-2">
                      <div className="flex flex-row justify-start">
                        <Text size="s" as="p" className="!text-gray-900">
                          Payment method
                        </Text>
                      </div>
                      <div className="flex flex-col w-full gap-6">
                        <div className="flex flex-row sm:flex-col justify-start w-full gap-4 sm:gap-5">
                        <Radio
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                            value="cash"
                            name="paymentMethod"
                            label="Cash"
                            checked={customerData.paymentMethod === 'cash'}
                            onChange={() => handleRadioChange('cash')}
                          />
                          <Radio
                            value="UPI"
                            name="paymentmode"
                            label="UPI"
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                            checked={customerData.paymentMethod === 'UPI'}
                            onChange={() => handleRadioChange('UPI')}
                          />
                          <Radio
                            value="Card"
                            name="paymentmode"
                            label="Card"
                            className="flex w-[49%] pl-2 pr-[35px] gap-2 py-3 text-gray-900 text-lg bg-blue_gray-100_01 rounded-lg"
                            checked={customerData.paymentMethod === 'Card'}
                            onChange={() => handleRadioChange('Card')}
                          />
                        </div>
                        
                      </div>
                    </div>
                    <Button size="4xl" className="w-full sm:px-5 font-medium rounded-[12px]" onClick={placeOrder}>
                      Order now
                    </Button>
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
