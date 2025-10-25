const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service' },
  status: { type: String, default: 'pending' },
  notes: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', orderSchema);
