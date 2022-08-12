const express = require('express');
const app = express();

// req -> middleware -> res

const authorize = (req, res, next) => {
    const {user} = req.query;

    if(user === 'john'){
        req.user = {name: 'john'};
        next();
    } else {
        res.status(401).send('unauthorized');
    }
}

// app.use([logger, authorize]);

app.get('/', [authorize], (req, res) => {
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