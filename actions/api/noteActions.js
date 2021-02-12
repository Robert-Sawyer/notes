const Note = require('../../db/models/note')

class NoteActions {

    //zapisywanie notatki
    async saveNote(req, res) {
        const title = req.body.title
        const content = req.body.content

        const note = new Note({title, content})

        await note.save()

        res.status(201).json(note)
    }

    //pobieranie wzystkich notatek
    async getAllNotes(req, res) {
        //find zwraca promisa więc żeby zapis był ładniejszy można go zapisać właśnie z użyciem async await,
        //ponieważ getAllNotes jest funkcja asynchroniczną
        //można też dodać obsługe błędów blokiem try catch, ale w przypadku tak prostych operacji to
        //niepotrzebne
        let doc
        try {
            doc = await Note.find({})
        } catch (err) {
            return res.status(500).json({message: err.message})
        }

        res.status(200).json(doc)
    }

    //pobieranie pojedynczej notatki
    async getSingleNote(req, res) {
        const id = req.params.id
        //używam podkreslnika przed id bo takie jest pole w bazie danych
        const note = await Note.findOne({_id: id})
        res.status(200).json(note)
    }

    //aktualizacja notatki
    async updateNote(req, res) {
        const id = req.params.id
        const title = req.body.title
        const content = req.body.content

        const note = await Note.findOne({_id: id})
        note.title = title
        note.content = content
        await note.save()

        res.status(201).json(note)
    }

    //usunięcie notatki
    async deleteNote(req, res) {
        //params.id bo w endpoincie w api.js jest /:id
        const id = req.params.id
        await Note.deleteOne({_id: id})
        res.sendStatus(204)
    }
}

module.exports = new NoteActions()
