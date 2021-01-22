const Note = require('../../db/models/note')

module.exports = {
    saveNote(req, res) {
        const newNote = new Note({
            title: 'zakupy',
            body: 'dżem'
        })
        newNote.save().then(() => {
            console.log('zapisano nową notkę')
        })
        res.send('Serwer działa')
    }
}
