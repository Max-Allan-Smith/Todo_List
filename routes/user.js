const express = require('express');
const router = express.Router();

let users = [];

// GET all users
router.get('/', (req, res) => {
  res.json(users);
});

// POST a new user
router.post('/', (req, res) => {
  const userData = req.body;

  // Validation: Check if username and password are provided
  if (!userData.username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  
  if (!userData.password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  // Create a new user object
  const newUser = {
    username: userData.username,
    password: userData.password
  };

  // Add the new user to the users array
  users.push(newUser);

  // Respond with the created user
  res.status(201).json(newUser);
});

module.exports = router;
