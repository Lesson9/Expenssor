const dbModel = require('../db/models');

module.exports = {
  addTransaction: (entry, callback) => {
    dbModel.Transaction.create(entry, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  readTransactions: (filter, callback) => {
    dbModel.Transaction.find(filter, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  updateTransaction: (filter, update, callback) => {
    dbModel.Transaction.updateOne(filter, update, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  },

  deleteTransaction: (filter, callback) => {
    dbModel.Transaction.deleteOne(filter, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
