const Note = require('../../db/models/note')

class NoteActions {
    saveNote(req, res) {
        const title = req.body.title
        const content = req.body.content
        res.send('Notatka została stworzona. Tytuł: ' + title + '. Treść: ' + content + '.')
    }
    getAllNotes(req, res) {
        //...
        res.send('API działa')
    }
    getSingleNote(req, res) {
        //...
        res.send('pojedyncza notatka')
    }
    updateNote(req, res) {
        //...
        res.send('update')
    }
    deleteNote(req, res) {
        //params.id bo w endpoincie w api.js jest /:id
        const id = req.params.id
        res.send('Usunięto notatkę o Id: ' + id)
    }
}

module.exports = new NoteActions()
