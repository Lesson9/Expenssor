const router = require('express').Router();

router.get('/foo', (req, res) => {
  res.send('wOw');
});

router.post('/bar', (req, res) => {
  res.send(req.body);
});

module.exports = router;