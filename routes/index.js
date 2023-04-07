const router = require('express').Router()

router.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname) + '/index.html')
    res.render('index', {
        title: 'My home page'
    });
});

router.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname) + '/about.html')
    res.render('about', {
        title: 'My about page'
    })
});

module.exports = router