const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')

//połączenie z bazą
require('./db/mongoose')

//routes
app.use('/', apiRouter)

//serwer
app.listen(port, function () {
    console.log('serwer słucha = http://localhost:' + port)
})
