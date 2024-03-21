const express = require("express");
const client = require('../db');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        // Execute the query to select all customers
        const result = await client.query('SELECT * FROM orders');
        
        // Send the query result rows back to the client
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// router.post('/addOrder', async (req, res) => {
//     const { amount,  id , quantity } = req.body.orderData;
//     const  paymentmode  = req.body.paymentmode;
//     const customerid = req.body.customerid
//     console.log(amount,  id , quantity,paymentmode,customerid)
    

//     try {
//         const result = await client.query(
//             'INSERT INTO orders (Amount,customerid, productid, quantity, paymentmode) VALUES ($1, $2, $3, $4,$5) RETURNING *;',
//             [amount,customerid, id, quantity, paymentmode]
//         );

//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.post('/addOrder', async (req, res) => {
    const { orderData, paymentmode, customerid } = req.body;
    console.log("paymentmode", paymentmode,"customerid", customerid)
    try {
        const insertedOrders = [];

        // Loop through each order in orderData
        for (const order of orderData) {
            const { price, id, orderedQuantity } = order;
            //console.log(price, id, quantity);
            // Perform the insert operation for the current order
            const result = await client.query(
                'INSERT INTO orders (amount, customerid, productid, quantity, paymentmode) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
                [price, customerid, id, orderedQuantity, paymentmode]
            );

            // Push the inserted order to the insertedOrders array
            insertedOrders.push(result.rows[0]);
        }

        res.status(201).json(insertedOrders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});


module.exports = router;