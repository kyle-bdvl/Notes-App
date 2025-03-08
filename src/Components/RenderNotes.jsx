import { useState } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
// import noteData from '../noteData';
const initialNotes = [
    { title: "Note 1", body: "This is note 1", date: "12-Jan-2025", id: 0, isBookmarked: true },
    { title: "Note 2", body: "This is note 2", date: "12-Feb-2025", id: 1, isBookmarked: false },
    { title: "Note 3", body: "This is note 3", date: "12-Mac-2025", id: 2, isBookmarked: false },
];
let nextId = 2;
function getNextId() {
    return nextId++;
}
function getTodayDate() {
    const date = new Date();
    return `${date.getFullYear}-${date.getMonth}-${date.getDay}`;
}

export default function RenderNotes() {
    const [notes, setNotes] = useState(initialNotes);

    function handleUpdateNote(title, body, id) {
        const updateNoteID = notes.findIndex(note => note.id === id);
        const newNote = { ...notes[updateNoteID], title, body };
        setNotes(notes.toSpliced(updateNoteID, 1, newNote));
    }
    function handleDeleteNote(id) {
        // splice noteData based on id
        // cause a rerender
        const deleteNoteID = notes.findIndex(note => note.id === id);
        setNotes(notes.toSpliced(deleteNoteID, 1));
    }
    function handleAddNote(title, body, isBookmarked) {
        // push the new note to noteData
        // cause a rerender
        setNotes(prevNotes => [...prevNotes, { title, body, date: getTodayDate(), id: getNextId(), isBookmarked }]);
    }
    function handleBookmarkNote(id) {
        const updateNoteID = notes.findIndex(note => note.id === id);
        const newNote = { ...notes[updateNoteID], isBookmarked: !notes[updateNoteID].isBookmarked };
        setNotes(notes.toSpliced(updateNoteID, 1, newNote))
    }
    return (
        <ul className="flex flex-wrap gap-3 mt-3">
            {notes.map((noteItem) => {
                return (
                    <li>
                        <Note
                            noteItem={noteItem}
                            handleUpdateNote={handleUpdateNote}
                            handleDeleteNote={handleDeleteNote}
                            key={noteItem.id}
                            handleBookmarkNote={handleBookmarkNote}
                        />
                    </li>
                );
            })}
            <li>
                <NewNote handleAddNote={handleAddNote} />
            </li>
        </ul>
    );
}