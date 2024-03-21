// CustomerContext.js
import React, { createContext, useContext } from 'react';
import {  useDispatch,useSelector } from "react-redux";
import {  setCustomerId } from "../slice/oderSlice";
import {useOrderContext} from  "../context/order"

const CustomerContext = createContext();

export const CustomerProvider = ({ children }) => {
    const orderList = useSelector((state) => state.order.orderList);
    const customerid = useSelector((state) => state.order.customerid);
    const dispatch = useDispatch();
    const {addOrder} = useOrderContext();




// const addCustomer = async (customerData) => {
    
//     try {
//         const response = await fetch('http://localhost:8000/customer/addCustomer', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify(customerData),
//         });

//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }

//         const data = await response.json();
//         if (response.ok) {
//             console.log('Customer ID:', data.customerid);
//             dispatch(setCustomerId(data.customerid));
//             if(customerid === data.customerid){
//                 addOrder(orderList ,customerData.paymentMethod)
//             }
            
//         }
//         return { success: true, data };
//     } catch (error) {
//         console.error('Error:', error);
//         return { success: false, error: error.message };
//     }
// };

const addCustomer = async (customerData) => {
    try {
        const response = await fetch('http://localhost:8000/customer/addCustomer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(customerData),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        if (response.ok) {
            console.log('Customer ID:', data.customerid);
            dispatch(setCustomerId(data.customerid));
            console.log("cstid",data.customerid)
            addOrder(orderList,customerData.paymentMethod, data.customerid);      
        }

        return { success: true, data };
    } catch (error) {
        console.error('Error:', error);
        return { success: false, error: error.message };
    }
};







  return (
    <CustomerContext.Provider value={{ addCustomer }}>
      {children}
    </CustomerContext.Provider>
  );
};

export const useCustomerContext = () => {
    return useContext(CustomerContext);
  };