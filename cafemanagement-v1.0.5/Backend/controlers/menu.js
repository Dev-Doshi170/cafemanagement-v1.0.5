const express = require("express");
const client = require('../db');
const router = express.Router();




router.get('/getmenu', async (req, res) => {
    try {
      const result = await client.query('SELECT menu.*, category.name FROM menu JOIN category ON menu.categoryid = category.id WHERE menu.isDeleted = false');
      const menu = result.rows;
      res.json(menu);
    } catch (error) {
      console.error('Error fetching Menu:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/getCatgorylist', async (req, res) => {
    try {
      const result = await client.query('SELECT name , id  FROM category WHERE isdeleted = false ',);
      const categories = result.rows;
      res.json(categories);
    } catch (error) {
      console.error('Error fetching categories:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  // router.put('/updatemenu', async (req, res) => {
    
  //   const { categoryid, productname, quantity, price ,id} = req.body;
  
  //   try {
  //     // Check if the menu item with the given ID exists and is not deleted
  //     const checkMenuItem = await client.query('SELECT * FROM menu WHERE id = $1 AND isdeleted = false', [id]);
  
  //     if (checkMenuItem.rows.length === 0) {
  //       return res.status(404).json({ message: 'Menu item not found or already deleted' });
  //     }
  
  //     // Update the menu details
  //     const updateResult = await client.query(
  //       'UPDATE menu SET categoryId = $1, productName = $2, quantity = $3, price = $4 WHERE id = $5',
  //       [categoryid, productname, quantity, price, id]
  //     );
  
  //     if (updateResult.rowCount === 1) {
  //       // Fetch and send the updated menu details
  //       const updatedMenuItem = await client.query('SELECT * FROM menu WHERE id = $1', [id]);
  //       return res.status(200).json({ message: 'Menu item updated successfully', data: updatedMenuItem.rows[0] });
  //     } else {
  //       return res.status(500).json({ message: 'Failed to update menu item' });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // });


  router.put('/updatemenu', async (req, res) => {
    const { categoryid, productname, quantity, price, id } = req.body;
  
    try {
      // Check if the menu item with the given ID exists and is not deleted
      const checkMenuItem = await client.query('SELECT * FROM menu WHERE id = $1 AND isdeleted = false', [id]);
  
      if (checkMenuItem.rows.length === 0) {
        return res.status(404).json({ message: 'Menu item not found or already deleted' });
      }
  
      // Update the menu details
      const updateResult = await client.query(
        'UPDATE menu SET categoryId = $1, productName = $2, quantity = $3, price = $4 WHERE id = $5',
        [categoryid, productname, quantity, price, id]
      );
  
      if (updateResult.rowCount === 1) {
        // Fetch the updated menu details with category name using a join
        const updatedMenuItem = await client.query(`
          SELECT m.*, c.name
          FROM menu m
          JOIN category c ON m.categoryid = c.id
          WHERE m.id = $1
        `, [id]);

        console.log(updatedMenuItem.rows[0])
  
        return res.status(200).json({ message: 'Menu item updated successfully', data: updatedMenuItem.rows[0] });
      } else {
        return res.status(500).json({ message: 'Failed to update menu item' });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  });










module.exports = router;