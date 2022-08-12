const express = require('express');
const app = express();
let { people } = require('./json');

app.get('/api/people', (req, res) => {
    res.status(200).json({
        success: true,
        data: people
    });
});

app.listen(5000, () => {
    console.log('server is running');
});