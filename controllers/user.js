const Bcrypt = require('bcrypt');
const User = require('../models/user');
const saltRounds = 10;

exports.createUser = async (req, res) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName
    } = req.body;

    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'User Already Exists' });
    }

    Bcrypt.hash(password, saltRounds, async function (err, hash) {
      if (err) {
        return res.status(500).json({ message: 'Error hashing password', error: err.message });
      }

      user = new User({
        username,
        password: hash,
        firstName,
        lastName
      });

      try {
        await user.save();
        res.status(201).json(user);
      } catch (err) {
        res.status(500).json({ message: 'Error saving user', error: err.message });
      }
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName
    } = req.body;

    console.log("Request Body:", req.body);

    let user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    user.username = username || user.username;
    user.firstName = firstName || user.firstName;
    user.lastName = lastName || user.lastName;
    if (password) {
      user.password = await Bcrypt.hash(password, saltRounds);
    }

    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log("Error:", err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    await user.deleteOne(); // Correct method to use
    res.status(200).json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};


