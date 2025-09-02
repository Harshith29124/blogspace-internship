const express = require('express');
const {
  createPost,
  getAllPosts,
  getPost,
  updatePost,
  deletePost,
  getMyPosts
} = require('../controllers/posts');

const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.route('/').get(getAllPosts);
router.route('/:id').get(getPost);

// Protected routes - Apply middleware to individual routes
router.route('/').post(protect, createPost);
router.route('/user/my-posts').get(protect, getMyPosts);
router.route('/:id').put(protect, updatePost);
router.route('/:id').delete(protect, deletePost);

module.exports = router;
