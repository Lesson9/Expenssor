const models = require('../models');

module.exports = {
  addOneTransaction: (req, res) => {
    models.Transaction.createOne(req.body, (err, result) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(201).send(result);
      }
    });
  }
};
