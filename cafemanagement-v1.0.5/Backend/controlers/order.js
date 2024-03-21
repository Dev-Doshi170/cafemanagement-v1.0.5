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

// router.get('/orderlist', async (req, res) => {
//     try {
//         // Execute SQL query to join orders and customers table
//         const result = await client.query(`
//             SELECT o.orderid, o."Date", CONCAT(c.firstname, ' ', c.lastname) AS customername, o.amount
//             FROM orders o
//             JOIN customer c ON o.customerid = c.customerid
//         `);

//         // Send the result as JSON response
//         res.json(result.rows);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.get('/orderlist', async (req, res) => {
    try {
        // Execute SQL query to join orders, customers, and menu tables
        const result = await client.query(`
        SELECT 
                o.*, 
                CONCAT(c.firstname, ' ', c.lastname) AS customername, 
                m.productname
            FROM 
                orders o
            JOIN 
                customer c ON o.customerid = c.customerid
            JOIN 
                menu m ON o.productid = m.id
            ORDER BY 
                o.orderid ASC
        `);

        // Send the result as JSON response
        res.json(result.rows);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.put('/updateOrderStatus/:orderId', async (req, res) => {
    const { orderId } = req.params;

    try {
        // Execute SQL query to update the status of the order with the provided order ID
        const result = await client.query(`
            UPDATE orders 
            SET status = true 
            WHERE orderid = $1
            RETURNING *;
        `, [orderId]);

        // Check if the order with the provided ID exists
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'Order not found' });
        }

        // Send the updated order as JSON response
        res.json(result.rows[0]);
    } catch (error) {
        console.error('Error updating order status:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = router;