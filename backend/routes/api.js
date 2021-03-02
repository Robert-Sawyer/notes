const express = require('express')
const router = express.Router()

const noteActions = require('../actions/api/noteActions')

//pobieranie notatek
router.get('/notes', noteActions.getAllNotes)
//pobieranie konkretnej notatki
router.get('/notes/:id', noteActions.getSingleNote)
//dodawanie notatki
router.post('/notes', noteActions.saveNote)
//edycja notatki
router.put('/notes/:id', noteActions.updateNote)
//usuwanie notatki
router.delete('/notes/:id', noteActions.deleteNote)

module.exports = router
