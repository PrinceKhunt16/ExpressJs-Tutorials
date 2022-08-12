const express = require('express');
const app = express();
const { products } = require('./json');

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log('server is running');
});