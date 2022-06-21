const router = require('express').Router();
const controllers = require('./controllers');

router.get('/foo', (req, res) => {
  res.send('wOw');
});

router.post('/bar', (req, res) => {
  res.send(req.body);
});

router.post('/transactions', controllers.Transaction.addOneTransaction);

module.exports = router;