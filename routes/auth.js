const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup
router.post('/signup', async (req, res) => {
  res.send('Signup route placeholder');
});

// Login
router.post('/login', async (req, res) => {
  res.send('Login route placeholder');
});

module.exports = router;
