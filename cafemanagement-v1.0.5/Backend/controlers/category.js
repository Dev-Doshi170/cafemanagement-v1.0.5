const express = require("express");
const client = require('../db');
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        
        const result = await client.query("select * from category");
        res.status(200).json({ message: 'Categories retrieved successfully', data: result.rows });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/addcategory', async (req, res) => {
    try {
        console.log("add")
        const { name } = req.body;
        const sql = 'INSERT INTO category (name) VALUES ($1) RETURNING *';
        const add = await client.query(sql, [name]);

        const result = await client.query("select * from category");
        res.status(200).json({ message: 'Categories retrieved successfully', data: result.rows });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});




module.exports = router;



