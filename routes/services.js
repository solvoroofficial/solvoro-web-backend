const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Add routes here
router.get('/', (req, res) => {
  res.send('Get all services placeholder');
});

module.exports = router;
