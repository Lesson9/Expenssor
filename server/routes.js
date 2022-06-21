const router = require('express').Router();
const controllers = require('./controllers');

// TRANSACTIONS API
router.post('/transactions', controllers.Transaction.addTransaction);

router.get('/transactions', controllers.Transaction.getTransactions);

router.patch('/transactions/:_id', controllers.Transaction.updateTransaction);

router.delete('/transactions/:_id', controllers.Transaction.deleteTransaction);

module.exports = router;