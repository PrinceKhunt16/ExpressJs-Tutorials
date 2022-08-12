const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan(':method :url'));

app.get('/', (req, res) => {
    res.send('Home');
});

app.get('/about', (req, res) => {
    res.send('About');
});

app.get('/api/products', (req, res) => {
    res.send('Products');
});

app.listen(5000, () => {
    console.log('server is running');
});