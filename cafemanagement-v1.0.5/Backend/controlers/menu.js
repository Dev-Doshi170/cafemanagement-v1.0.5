const express = require("express");
const client = require('../db');
const router = express.Router();




router.get('/getmenu', async (req, res) => {
    try {
      const result = await client.query('SELECT menu.*, category.name FROM menu JOIN category ON menu.categoryid = category.id');
      const categories = result.rows;
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });










module.exports = router;