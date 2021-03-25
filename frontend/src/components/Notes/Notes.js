import React from 'react'
import './Notes.css'
import Note from "./Note/Note";

class Notes extends React.Component {

    constructor(props) {
        super(props);

        this.notes = [
            {
                id: '22432',
                title: 'wykąpać psa',
                content: 'treść o tym, żeby wykąpać psa'
            },
            {
                id: '2432',
                title: 'zrobić zakupy',
                content: 'mleko, ciasto, chleb itd',
            }
        ]
    }

    render() {
        return (
            <div>
                <p>Moje notatki</p>
                {this.notes.map(note =>
                    <Note title={note.title} content={note.content} id={note.id}/>
                )}
            </div>
        )
    }
}

export default Notes
