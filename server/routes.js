const router = require('express').Router();
const controllers = require('./controllers');

router.get('/foo', (req, res) => {
  res.send('wOw');
});

router.post('/bar', (req, res) => {
  res.send(req.body);
});

// TRANSACTIONS API
router.post('/transactions', controllers.Transaction.addOneTransaction);

router.get('/transactions', controllers.Transaction.getTransactions);

module.exports = router;