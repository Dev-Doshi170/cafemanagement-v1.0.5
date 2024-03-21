const express = require("express");
const client = require('../db');
const router = express.Router();


router.get('/', async (req, res) => {
    try {
        // Execute the query to select all customers
        const result = await client.query('SELECT * FROM customer');
        
        // Send the query result rows back to the client
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// router.post('/addCustomer', async (req, res) => {
//     const { firstname, lastname, phonenumber, email, amount } = req.body;
    
//     try {
//         const result = await client.query(
//             'INSERT INTO customer (firstname, lastname, phoneno, email, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *;',
//             [firstname, lastname, phonenumber, email, amount]
//         );
        
//         res.status(201).json(result.rows[0]);
//     } catch (error) {
//         console.error(error);
//         console.log("error")
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

// router.post('/addCustomer', async (req, res) => {
//     const { firstname, lastname, phonenumber, email, amount } = req.body;
    
//     try {
//         const result = await client.query(
//             'INSERT INTO customer (firstname, lastname, phoneno, email, amount) VALUES ($1, $2, $3, $4, $5) RETURNING customerid;',
//             [firstname, lastname, phonenumber, email, amount]
//         );
        
//         const newCustomerId = result.rows[0].customerid;
//         res.status(201).json({ customerid: newCustomerId });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// });

router.post('/addCustomer', async (req, res) => {
    const { firstname, lastname, phonenumber, email, amount } = req.body;
    
    try {
        // Insert customer data into the database
        const insertResult = await client.query(
            'INSERT INTO customer (firstname, lastname, phoneno, email, amount) VALUES ($1, $2, $3, $4, $5) RETURNING customerid;',
            [firstname, lastname, phonenumber, email, amount]
        );

        // Retrieve the customer ID based on the phone number
        const selectResult = await client.query(
            'SELECT customerid FROM customer WHERE phoneno = $1;',
            [phonenumber]
        );

        const newCustomerId = selectResult.rows[0].customerid;

        res.status(201).json({ customerid: newCustomerId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});





module.exports = router;