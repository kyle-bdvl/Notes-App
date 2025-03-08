import { useState } from "react";
import Note from "./Note";
import NewNote from "./NewNote";
import noteData from '../noteData';
export default function RenderNotes(){
    function handleUpdateNote (newContent, id){
        // retrieve the note based on id
        // update that note with the newContent
        // cause a rerender
    }
    function handleDeleteNote(id){
        // splice noteData based on id
        // cause a rerender
    }
    function handleAddNote(newNoteContent){
        // destructure newNoteContent
        // create the new note via note class contructor
        // push the new note to noteData
        // cause a rerender
    }
    return(
        <ul className="flex flex-wrap">
            {noteData.map((noteItem)=>{
                <li>
                    <Note note={noteItem} handleUpdateNote={handleUpdateNote} handleDeleteNote={handleDeleteNote} key={noteItem.getId()}/>
                </li>
            })}
            <li>
                <NewNote handleAddNote={handleAddNote}/>
            </li>
        </ul>
    );
}