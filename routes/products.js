const router = require('express').Router();
let products = require('../productsData.js')

router.get('/products', (req, res) => {
    res.render('products', {
        title: 'My Product page'
    });
});

router.get('/api/products', (req, res) => {
    res.json(products);
})

router.post('/api/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || !price) {
        return res.status(422).json({ error: 'All fields are required.'});
    }
    const product = {
        name,
        price,
        id: new Date().getTime().toString()
    }

    products.push(product);
    res.json(product);
});

router.delete('/api/products/:productId', (req, res) => {
    products = products.filter((product) => req.params.productId !== product.id);
    res.json({ status: 'OK' });
});

module.exports = router