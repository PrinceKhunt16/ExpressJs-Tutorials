const apiKeyMiddleware = require('../middlewares/apikey');
const router = require('express').Router()

// router.use(apiKeyMiddleware)

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

// router.get('/api/products', (req, res) => {
// router.get('/api/products', apiKeyMiddleware,(req, res) => {
//     res.json([
//         {
//             id: '123',
//             name: 'Chrome'
//         },
//         {
//             id: '124',
//             name: 'Firefox'
//         }
//     ])
// });

module.exports = router