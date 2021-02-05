// $1 Eviroment varibles - dotenv, process.env

// $2 Imports
const express = require('express')
const app = express()
const ejslayouts = require('express-ejs-layouts')

// $3 Middleware
app.set('view engine', 'ejs')
app.use(ejslayouts)
// app.use(() => {
//     console.log('Hello there...')
// })
app.use(express.static(__dirname+'/public'));


// $4 Routes
app.get('/', (req, res) => {
    res.render('index')
})

// $5 Controllers

// Listen
const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`server listening on PORT: ${PORT}`)
})