import { createSlice } from "@reduxjs/toolkit";

let nextId = 2;
function getNextId() {
    return nextId++;
}
function getTodayDate() {
    const date = new Date();
    return `${date.getFullYear}-${date.getMonth}-${date.getDay}`;
}

const notesSlice = createSlice({
    name: "notes",
    initialState: [
        { title: "Note 1", body: "This is note 1", date: "12-Jan-2025", id: 0, isBookmarked: true },
        { title: "Note 2", body: "This is note 2", date: "12-Feb-2025", id: 1, isBookmarked: false },
        { title: "Note 3", body: "This is note 3", date: "12-Mac-2025", id: 2, isBookmarked: false },
    ],
    reducers: {
        addNote: (state, action) => {
            // payload: {title, body, isBookmarked}
            const newNote = {...action.payload, date: getTodayDate(), id: getNextId()}
            state.push(newNote);
        },
        deleteNote: (state, action)=> {
            // payload: noteId
            state.splice(action.payload, 1);
        },
        updateNote: (state, action)=>{
            // payload: {title, body, id}
            const {title, body, id} = action.payload;
            const updateNoteID = state.findIndex(note => note.id === id);
            const newNote = { ...state[updateNoteID], title, body};
            state.splice(updateNoteID, 1, newNote);
        },
        bookmarkNote: (state, action) => {
            // payload: noteId
            state[action.payload].isBookmarked = !state[action.payload].isBookmarked
        }
    }
});

export const {addNote, deleteNote, updateNote, bookmarkNote} = notesSlice.actions;
export default notesSlice.reducer;