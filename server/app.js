require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const router = require('./routes.js');
const db = require('./db');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use('/', router);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
