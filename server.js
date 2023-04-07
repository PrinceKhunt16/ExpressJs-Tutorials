const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
    // res.sendFile(path.resolve(__dirname) + '/index.html')
    res.render('index', {
        title: 'Homepage'
    })
})

app.get('/about', (req, res) => {
    // res.sendFile(path.resolve(__dirname) + '/about.html')
    res.render('about', {
        title: 'Aboutpage'
    })
})

app.listen(3000, () => {
    console.log('server running')
})