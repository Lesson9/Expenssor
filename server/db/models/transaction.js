const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    default: 'transaction'
  },
  date: {
    type: Date,
    default: Date.now
  },
  amount: {
    type: Number,
    required: [true, 'You forgot to input an amount']
  },
  category: {
    type: String,
    default: 'Food'
  },
  note: {
    type: String,
    default: '',
  }
});

module.exports = mongoose.model('Transaction', transactionSchema);
