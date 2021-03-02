const express = require('express')
const app = express()
const { port } = require('./config')
const apiRouter = require('./routes/api')
const parser = require('body-parser')

//połączenie z bazą
require('./db/mongoose')

//parsery - express musi wiedzieć jak rozumieć pola takie jak title czy content, z jakich skłąda się notatka,
//w tym celu muszę mu powiedzieć nodowi żeby obsłużył content-type, np jako application/json
//Teraz żeby przetestować w postmanie muszę ustawić header na application/json i wysłać nie jako form, ale jako
//raw i stworzyć zwykłego jsona z key i value. Bodyparser będzie wykorzystany przez Reacta
app.use(parser.json())

//routes
app.use('/api/', apiRouter)

//serwer
app.listen(port, function () {
    console.log('serwer słucha = http://localhost:' + port)
})
