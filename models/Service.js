const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  imageUrl: String,
});

module.exports = mongoose.model('Service', serviceSchema);
