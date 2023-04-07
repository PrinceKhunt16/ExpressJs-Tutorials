const express = require('express')
const mainRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json());
app.use(mainRouter)
app.use(productsRouter)

app.listen(3000, () => {
    console.log('server running')
})