import { useState,useEffect } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
// import noteData from '../noteData';
let initialNotes = [
    { title: "Note 1", body: "This is note 1", date: "12-Jan-2025", id: 0, isBookmarked: true },
    { title: "Note 2", body: "This is note 2", date: "12-Feb-2025", id: 1, isBookmarked: false },
    { title: "Note 3", body: "This is note 3", date: "12-Mac-2025", id: 2, isBookmarked: false },
];

function getTodayDate() {
    const date = new Date();
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDay()}`;
}

export default function RenderNotes() {
    const [notes, setNotes] = useState(initialNotes);
    // const [notesID, setNotesId] = useState(initialNotes.length ? initialNotes.length-1 :0);
    let id =notes.length;
    function getNextId() {
        return id;
    }
    // function getNextID2(){
    //     let newId = notesID+1
    //     setNotesId(newId)
    //     return newId
    // }

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
    function handleAddNote(title, body) {
        // push the new note to noteData
        // cause a rerender
        const newNote ={title,body, date:getTodayDate(), id:getNextId(),isBookmarked:false};
        
        setNotes(prevNotes => [...prevNotes, newNote]);
        //unnecessary code
        initialNotes.push(newNote);
        
        
    }
    function handleBookmarkNote(id) {
        const updateNoteID = notes.findIndex(note => note.id === id);
        const newNote = { ...notes[updateNoteID], isBookmarked: !notes[updateNoteID].isBookmarked };
        setNotes(notes.toSpliced(updateNoteID, 1, newNote))
    }

    useEffect(() => {
        console.log("Notes updated:", notes);
    }, [notes]);
    //we are using this as an example
    return (
        <ul className="flex flex-wrap gap-3 mt-3">
            {notes.map((noteItem) => {
                return (
                    <li key={noteItem.id}>
                        <Note
                            noteItem={noteItem}
                            handleUpdateNote={handleUpdateNote}
                            handleDeleteNote={handleDeleteNote}
                            handleBookmarkNote={handleBookmarkNote}
                        />
                    </li>
                );
            })}
            <li>
                <NewNote addNote={handleAddNote} />
            </li>
        </ul>
    );
}