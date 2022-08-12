const express = require('express');
const app = express();

const { products } = require('./json');

app.get('/', (req, res) => {
    res.send('<a href="/api/products">products</a>')
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return {
            id,
            name,
            image
        };
    });

    res.send(newProducts);
});

app.get('/api/products/:productId', (req, res) => {
    const { productId } = req.params;

    const product = products.find(
        (product) => product.id === Number(productId)
    );

    if (!product) {
        return res.status(404).send('Product Does Not Exist');
    }

    return res.json(product);
});

app.get('/api/products/:productId/reviews/:reviewId', (req, res) => {
    res.send(req.params);
});

app.get('/api/v1/query', (req, res) => {
    const { search, limit } = req.query;
    let sortedProduct = [...products];

    if(search){
        sortedProduct = sortedProduct.filter((product) => {
            return product.name.startsWith(search);
        })
    }

    if(limit){
        sortedProduct = sortedProduct.slice(0, Number(limit))
    }

    if(sortedProduct < 1){
        return res.status(200).json({sucess: true, data: []});
    }

    return res.status(200).json(sortedProduct);
});

app.listen(5000, () => {
    console.log('server is running');
});