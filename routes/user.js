// routes/user.js
const express = require('express');
const router = express.Router();
const {
  createUser,
  loginUser,
  getUser,
  getById,
  updateUser,
  deleteUser,
} = require('../controllers/user');

// Public routes
router.post('/', createUser);
router.post('/login', loginUser);

// Protected routes
router.get('/', getUser);
router.get('/:id', getById);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
