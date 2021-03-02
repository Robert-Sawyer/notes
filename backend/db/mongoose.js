const mongoose = require('mongoose')
const {database} = require('../config')

//połączenie z bazą danych mongo - po slashu wpisuję nazwe bazy która ma się utworzyć po uruchomieniu
mongoose.connect(database, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
