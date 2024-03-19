const express = require("express");
const client = require('../db');
const router = express.Router();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });



router.get('/getmenu', async (req, res) => {
  const rowsPerPage = parseInt(req.query.rowsPerPage) || 5; // Default to 5 rows per page
  const currentPage = parseInt(req.query.currentPage) || 1;
  
  console.log(typeof(rowsPerPage,currentPage))

  try {
    const result = await client.query({
      text: `SELECT menu.*, category.name 
             FROM menu 
             JOIN category ON menu.categoryid = category.id 
             WHERE menu.isDeleted = false 
             OFFSET $1 LIMIT $2`,
      values: [(currentPage - 1) * rowsPerPage, rowsPerPage],
    });

    const totalMenuItemsCount = await client.query('SELECT COUNT(*) FROM menu WHERE isDeleted = false');

    const totalPages = Math.ceil(totalMenuItemsCount.rows[0].count / rowsPerPage);

    const menu = result.rows;

    res.status(200).json({
      message: 'Menu items retrieved successfully',
      data: menu,
      pagination: {
        totalPages,
        currentPage,
        count: totalMenuItemsCount.rows[0].count,
        rowsPerPage,
      },
    });
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

  // router.delete('/deletemenu', async (req, res) => {
  //   const { id } = req.body;
  
  //   try {
  //     // Check if the menu item with the given ID exists
  //     const checkMenuItem = await client.query('SELECT * FROM menu WHERE id = $1', [id]);
  
  //     if (checkMenuItem.rows.length === 0) {
  //       return res.status(404).json({ message: 'Menu item not found' });
  //     }
  
  //     // Update isdeleted to true for the specified menu item ID
  //     const result = await client.query('UPDATE menu SET isdeleted = true WHERE id = $1', [id]);
  
  //     if (result.rowCount === 1) {
  //       return res.status(200).json({ message: 'Menu item deleted successfully' });
  //     } else {
  //       return res.status(500).json({ message: 'Failed to delete menu item' });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //     return res.status(500).json({ message: 'Internal server error' });
  //   }
  // });

  router.delete('/deletemenu', async (req, res) => {
    const { menuId } = req.body;
    const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
    const currentPage = req.query.currentPage || 1;
  
    try {
      // Check if the menu item with the given ID exists
      const checkMenuItem = await client.query('SELECT * FROM menu WHERE id = $1', [menuId]);
  
      if (checkMenuItem.rows.length === 0) {
        return res.status(404).json({ message: 'Menu item not found' });
      }
  
      // Update isdeleted to true for the specified menu item ID
      const result = await client.query('UPDATE menu SET isdeleted = true WHERE id = $1', [menuId]);
  
      if (result.rowCount === 1) {
        // Fetch and send the updated menu items after deletion with pagination
        const totalMenuItemsCount = await client.query('SELECT COUNT(*) FROM menu WHERE isdeleted = false');
        const totalPages = Math.ceil(totalMenuItemsCount.rows[0].count / rowsPerPage);
        const nextPageOffset = (currentPage - 1) * rowsPerPage;
  
        const updatedMenuItems = await client.query({
          text: 'SELECT * FROM menu WHERE isdeleted = false ORDER BY id OFFSET $1 LIMIT $2',
          values: [nextPageOffset, rowsPerPage],
        });
  
        res.status(200).json({
          message: 'Menu item deleted successfully',
          data: updatedMenuItems.rows,
          pagination: {
            totalPages,
            currentPage,
            count: totalMenuItemsCount.rows[0].count,
            rowsPerPage,
          },
        });
      } else {
        res.status(500).json({ message: 'Failed to delete menu item' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  router.post('/addmenu', async (req, res) => {
    try {
      const { formdata,link } = req.body;
      const{categoryid, productname, quantity, price } = formdata
      console.log(link)
  
      // Insert the new menu item into the database
      const query = 'INSERT INTO menu (categoryid, productname, quantity, price,image) VALUES ($1, $2, $3, $4,$5) RETURNING *';
      const values = [categoryid, productname, quantity, price,link];
      const result = await client .query(query, values);
  
      // If the insertion was successful, return the newly added menu item
      if (result.rowCount === 1) {
        res.status(201).json({ message: 'Menu item added successfully', data: result.rows[0] });
      } else {
        res.status(500).json({ message: 'Failed to add menu item' });
      }
    } catch (error) {
      console.error('Error adding menu item:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  

  router.get('/searchmenu', async (req, res) => {
    const searchTerm = req.query.name;
  
    try {
      const searchResult = await client.query('SELECT * FROM menu WHERE productname ILIKE $1 AND isdeleted = false', [`%${searchTerm}%`]);
  
      res.status(200).json({ data: searchResult.rows });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });







module.exports = router;