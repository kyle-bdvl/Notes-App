import { useState } from "react";
import { addNote } from "../store/notesSlice";
import { useDispatch } from "react-redux";
export default function NewNotespage(){
    const dispatch = useDispatch();
    const [newNoteContent, setNewNoteContent] = useState({title: '', body: ''});
    const buttonCss = "w-auto h-auto pl-3 pr-3 cursor-pointer bg-gray-700 rounded-2xl hover:bg-gray-400 hover:border-b-gray-400 text-amber-500 hover:text-amber-50";
    const handleSetNewNoteContent = (newContent, type) => {
        setNewNoteContent(prevContent => ({
            ...prevContent,
            [type]: newContent,
        }));
    };
    const cancelEditMode = () => {
        setNewNoteContent({title: '', body: ''});
        setIsAdding(false);
    }
    const addNewNote = () => {
        dispatch(addNote({title: newNoteContent.title, body: newNoteContent.body, isBookmarked: false}));
    }
    return(
        <div>
            <form onSubmit={addNewNote}>
                <label htmlFor="title">Title</label>
                <input className="border-b-1 text-3xl text-amber-500 pl-4 pt-1"
                    value={newNoteContent.title}
                    onChange={(e) => handleSetNewNoteContent(e.target.value, "title")}
                />
                <label htmlFor="body">Body</label>
                <input className="text-blue-50 font-medium pl-4 pr-4 pt-2"
                    value={newNoteContent.body}
                    onChange={(e) => handleSetNewNoteContent(e.target.value, "body")}
                />
                <button type="submit" className={buttonCss}>Save Changes</button>
                <button type="reset" className={buttonCss} onClick={cancelEditMode}>Cancel Edit</button>
            </form>
        </div>
    );
}