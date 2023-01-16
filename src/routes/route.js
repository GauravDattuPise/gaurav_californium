const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');
const blogController = require('../controllers/blogController');
const authAndAuth = require('../middleware/authAndAuth')

// CREATING AUTHOR
router.post("/authors", authorController.createAuthor);

// CREATING BLOGS
router.post('/blogs', authAndAuth.AuthMidd,blogController.createBlog)

// GET BLOGS
router.get("/blogs", authAndAuth.AuthMidd, blogController.getBlogs)

// UPDATE BLOGS
router.put("/blogs/:blogId",authAndAuth.AuthMidd, authAndAuth.authoMidd, blogController.updateBlog)

// DELETE BLOGS BY ID
router.delete("/blogs/:blogId",authAndAuth.AuthMidd, authAndAuth.authoMidd, blogController.deleteBlog)

// DELETE BLOGS BY PARAMS
router.delete("/blogs",authAndAuth.AuthMidd, authAndAuth.authoMidd, blogController.deleteByQueryP)

// AUTHOR LOGIN
router.post('/login',authorController.login)


module.exports = router