import { useState } from "react";
// note: the note class instance as defined in note.js
export default function Note({ note, handleEditNote, handleDeleteNote }){
    const [title, body, date, id] = useState(note.getAll());
    return (
        <div key={id}>
            <h3>{title}</h3>
            <p>{date}</p>
            <p>{body}</p>
            <div className="note-buttons">
                <button onClick={handleEditNote}>Edit Note</button>
                <button onClick={handleDeleteNote}>Delete Note</button>
            </div>
        </div>
    );
}