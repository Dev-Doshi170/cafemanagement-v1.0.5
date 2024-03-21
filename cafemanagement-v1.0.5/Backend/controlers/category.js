const express = require("express");
const client = require('../db');
const router = express.Router();

router.get('/', async (req, res) => {
    const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
    const currentPage = req.query.currentPage || 1;
    
  
    try {
      const result = await client.query({
        text: 'SELECT * FROM category WHERE isdeleted = false OFFSET $1 LIMIT $2',
        values: [(currentPage - 1) * rowsPerPage, rowsPerPage],
      });
  
      const totalCategoriesCount = await client.query('SELECT COUNT(*) FROM category WHERE isdeleted = false');
  
      const totalPages = Math.ceil(totalCategoriesCount.rows[0].count / rowsPerPage);
  
      res.status(200).json({
        message: 'Categories retrieved successfully',
        data: result.rows,
        pagination: {
          totalPages,
          currentPage,
          count: totalCategoriesCount.rows[0].count,
          rowsPerPage,
        },
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  



router.post('/addcategory', async (req, res) => {
  try {
    const { name } = req.body;
    const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
    const currentPage = req.query.currentPage || 1;
    const sql = 'INSERT INTO category (name) VALUES ($1) RETURNING *';
    const add = await client.query(sql, [name]);

    const totalCategoriesCount = await client.query('SELECT COUNT(*) FROM category WHERE isdeleted = false');

    // Assuming you are using a default of 5 rows per page for newly added data
   
    const totalPages = Math.ceil(totalCategoriesCount.rows[0].count / rowsPerPage);

    const result = await client.query({
      text: 'SELECT * FROM category WHERE isdeleted = false OFFSET $1 LIMIT $2',
      values: [0, rowsPerPage],
    });

    res.status(200).json({
      message: 'Category added successfully',
      data: result.rows,
      pagination: {
        totalPages,
        currentPage,
        count: totalCategoriesCount.rows[0].count,
        rowsPerPage,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// router.delete('/deletecategory/:categoryId', async (req, res) => {
//   const { categoryId } = req.params;
//   const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
//   const currentPage = req.query.currentPage || 1;

//   try {
//     // Check if the category with the given ID exists
//     const checkCategory = await client.query('SELECT * FROM category WHERE id = $1 AND isdeleted = false', [categoryId]);

//     if (checkCategory.rows.length === 0) {
//       return res.status(404).json({ message: 'Category not found' });
//     }

//     // Update isdeleted to true for the specified category ID
//     const result = await client.query('UPDATE category SET isdeleted = true WHERE id = $1', [categoryId]);

//     if (result.rowCount === 1) {
//       // Fetch and send the updated categories after deletion with pagination
//       const totalCategoriesCount = await client.query('SELECT COUNT(*) FROM category WHERE isdeleted = false');
//       const totalPages = Math.ceil(totalCategoriesCount.rows[0].count / rowsPerPage);

//       const updatedCategories = await client.query({
//         text: 'SELECT * FROM category WHERE isdeleted = false OFFSET $1 LIMIT $2',
//         values: [(currentPage - 1) * rowsPerPage, rowsPerPage],
//       });

//       res.status(200).json({
//         message: 'Category deleted successfully',
//         data: updatedCategories.rows,
//         pagination: {
//           totalPages,
//           currentPage,
//           count: totalCategoriesCount.rows[0].count,
//           rowsPerPage,
//         },
//       });
//     } else {
//       res.status(500).json({ message: 'Failed to delete category' });
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });
  
router.delete('/deletecategory/:categoryId', async (req, res) => {
  const { categoryId } = req.params;
  const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
  const currentPage = req.query.currentPage || 1;

  try {
    // Check if the category with the given ID exists
    const checkCategory = await client.query('SELECT * FROM category WHERE id = $1 AND isdeleted = false', [categoryId]);

    if (checkCategory.rows.length === 0) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Update isdeleted to true for the specified category ID
    const result = await client.query('UPDATE category SET isdeleted = true WHERE id = $1', [categoryId]);

    if (result.rowCount === 1) {
      // Fetch and send the updated categories after deletion with pagination
      const totalCategoriesCount = await client.query('SELECT COUNT(*) FROM category WHERE isdeleted = false');
      const totalPages = Math.ceil(totalCategoriesCount.rows[0].count / rowsPerPage);
      const nextPageOffset = (currentPage - 1) * rowsPerPage;

      const updatedCategories = await client.query({
        text: 'SELECT * FROM category WHERE isdeleted = false ORDER BY id OFFSET $1 LIMIT $2',
        values: [nextPageOffset, rowsPerPage],
      });

      console.log(updatedCategories)

      res.status(200).json({
        message: 'Category deleted successfully',
        data: updatedCategories.rows,
        pagination: {
          totalPages,
          currentPage,
          count: totalCategoriesCount.rows[0].count,
          rowsPerPage,
        },
      });
    } else {
      res.status(500).json({ message: 'Failed to delete category' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});
  

  router.put('/editcategory', async (req, res) => {
    const { name, categoryId } = req.body;
    const rowsPerPage = req.query.rowsPerPage || 5; // Default to 5 rows per page
    const currentPage = req.query.currentPage || 1;
  
    try {
      // Check if the category with the updated name already exists
      const checkDuplicate = await client.query('SELECT * FROM category WHERE name = $1 AND isdeleted = false', [name]);
  
      if (checkDuplicate.rows.length > 0) {
        return res.status(400).json({ message: 'Category already exists' });
      }
  
      // Update the category name
      const result = await client.query('UPDATE category SET name = $1 WHERE id = $2', [name, categoryId]);
  
      if (result.rowCount === 1) {
        // Fetch the updated total count and calculate total pages
        const totalCategoriesCount = await client.query('SELECT COUNT(*) FROM category WHERE isdeleted = false');
        const totalPages = Math.ceil(totalCategoriesCount.rows[0].count / rowsPerPage);
  
        // Fetch the updated categories based on pagination parameters
        const updatedCategories = await client.query({
          text: 'SELECT * FROM category WHERE isdeleted = false OFFSET $1 LIMIT $2',
          values: [(currentPage - 1) * rowsPerPage, rowsPerPage],
        });
  
        // Send the response with pagination information
        res.status(200).json({
          message: 'Category edited successfully',
          data: updatedCategories.rows,
          pagination: {
            totalPages,
            currentPage,
            count: totalCategoriesCount.rows[0].count,
            rowsPerPage,
          },
        });
      } else {
        res.status(500).json({ message: 'Failed to edit category' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  

  router.get('/search', async (req, res) => {
    const searchTerm = req.query.name;
  
    try {
      const searchResult = await client.query('SELECT * FROM category WHERE name ILIKE $1 AND isdeleted = false', [`%${searchTerm}%`]);
  
      res.status(200).json({ data: searchResult.rows });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

module.exports = router;



