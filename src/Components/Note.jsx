import { updateNote, deleteNote, bookmarkNote } from "../store/notesSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
export default function Note({ noteItem }) {
    const { title, body, date, id, isBookmarked } = noteItem;
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [editModeContent, setEditModeContent] = useState({ title, body });
    const buttonPanelCss = "flex flex-row justify-end pr-3 pb-3 gap-1 mt-2";
    const buttonCss = "w-auto h-auto pl-3 pr-3 cursor-pointer bg-gray-700 rounded-2xl hover:bg-gray-400 hover:border-b-gray-400 text-amber-500 hover:text-amber-50";
    const isBookmarkedCss = buttonCss + (isBookmarked && " bg-green-400");
    const editContent = (newContent, type) => {
        setEditModeContent(prevContent => ({
            ...prevContent,
            [type]: newContent,
        }));
    };

    function handleDeleteNote(){
        dispatch(deleteNote(id));
    }

    function handleBookmarkNote(){
        dispatch(bookmarkNote(id));
    }

    const updateContent = (event) => {
        event.preventDefault();
        dispatch(updateNote({title: editModeContent.title, body: editModeContent.body, id}));
        setIsEditing(false);
    }
    const cancelEditMode = () => {
        setEditModeContent({title, body});
        setIsEditing(false);
    }
    return (
        <div key={id} className="rounded-2xl bg-black w-100 h-auto">
            {isEditing ?
                <form onSubmit={(event)=>updateContent(event)}>
                    <label htmlFor="title">Title</label>
                    <input className="border-b-1 text-3xl text-amber-500 pl-4 pt-1"
                        value={editModeContent.title}
                        onChange={(e) => editContent(e.target.value, "title")}
                    />
                    <label htmlFor="body">Body</label>
                    <input className="text-blue-50 font-medium pl-4 pr-4 pt-2"
                        value={editModeContent.body}
                        onChange={(e) => editContent(e.target.value, "body")}
                    />
                    <div className={buttonPanelCss}>
                        <button type="submit" className={buttonCss}>Save Changes</button>
                        <button type="reset" className={buttonCss} onClick={cancelEditMode}>Cancel Edit</button>
                    </div>
                </form>
                :
                <>
                    <h3 className="border-b-1 text-3xl text-amber-500 pl-4 pt-1">{title}</h3>
                    <p className="text-amber-500 font-thin pl-4">{date}</p>
                    <p className="text-blue-50 font-medium pl-4 pr-4 pt-2">{body}</p>
                </>
            }

            <div className={buttonPanelCss}>
                {!isEditing && <button className={buttonCss} onClick={() => setIsEditing(true)}>Edit Note</button>}
                <button className={isBookmarkedCss} onClick={()=>{handleBookmarkNote(id)}}>Bookmark Me!</button>
                <button className={buttonCss} onClick={() => handleDeleteNote(id)}>Delete Note</button>
            </div>
        </div>
    );
}