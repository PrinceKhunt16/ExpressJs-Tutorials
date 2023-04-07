const express = require('express')
const mainRouter = require('./routes/index')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(mainRouter)

app.listen(3000, () => {
    console.log('server running')
})