const express = require('express');
const app = express();

// req -> middleware -> res

const authorize = (req, res, next) => {
    const { user } = req.query;
    console.log(user);
    next();
}

app.get('/', authorize, (req, res) => {
    res.send('Home');
});

app.get('/about', authorize, (req, res) => {
    res.send('About');
});

app.listen(5000, () => {
    console.log('server is running');
})