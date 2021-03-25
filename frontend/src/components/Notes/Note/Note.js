import React from 'react'

const Note = (props) => {
    return (
        <div className="note">
            <p>{props.title}</p>
            <div className="description">{props.content}</div>
            <button>edytuj</button>
            <button className="delete">usuń</button>
        </div>
    )
}

export default Note
