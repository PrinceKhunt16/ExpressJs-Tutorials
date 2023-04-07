const express = require('express')
const ErrorHandler = require('./error/ErrorHandler')
const mainRouter = require('./routes/index')
const productsRouter = require('./routes/products')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json());
app.use(mainRouter)
app.use(productsRouter)
app.use((req, res, next) => {
    return res.json({
        message: 'Page Not Found'
    })
})

app.use((err, req, res, next) => {
    if(err instanceof ErrorHandler){
        res.status(err.status).json({
            error: {
                message: err.msg,
                status: err.status
            }
        })
    } else {
        res.status(500).json({
            error: {
                message: err.message,
                status: err.status
            }
        })
    }
})

app.listen(3000, () => {
    console.log('server running')
})