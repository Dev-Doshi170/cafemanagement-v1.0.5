// OrderContext.js
import React, { createContext, useContext } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';


const OrderContext = createContext();

export const OrderProvider = ({ children }) => {
    const dispatch = useDispatch();
    //const customerid = useSelector((state) => state.order.customerid);

    const addOrder = async (orderData ,paymentmode,customerid) => {
        try {
            const response = await fetch('http://localhost:8000/order/addOrder', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({orderData,customerid,paymentmode}),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            if (response.ok) {
                console.log('Order ID:', data.orderid);
                // Dispatch an action to update Redux store with the new order ID
                
            }
            return { success: true, data };
        } catch (error) {
            console.error('Error:', error);
            return { success: false, error: error.message };
        }
    };

    return (
        <OrderContext.Provider value={{ addOrder }}>
            {children}
        </OrderContext.Provider>
    );
};

// export const useOrderContext = () => useContext(OrderContext);

export const useOrderContext = () => {
    return useContext(OrderContext);
  };
