// routes/user.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/user'); // Correct path to the controller

router.post('/', userController.createUser);
router.get('/', userController.getUser);
router.get('/:id', userController.getById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;
