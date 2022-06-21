const dbModel = require('../db/models');

module.exports = {
  createOne: (entryObj, callback) => {
    dbModel.Transaction.create(entryObj, (err, result) => {
      if (err) {
        callback(err);
      } else {
        callback(null, result);
      }
    });
  }
};
