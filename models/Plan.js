// models/Plan.js
const mongoose = require('mongoose');

const planSchema = new mongoose.Schema({
  name: String,
  price: Number,
  features: [String],
  isFree: Boolean,
});

module.exports = mongoose.model('Plan', planSchema);
