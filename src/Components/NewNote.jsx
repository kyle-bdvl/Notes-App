import { useState} from "react";
export default function NewNote(handleAddNote){
    const [isAdding, setIsAdding] = useState(false);
    const [newNoteContent, setNewNoteContent] = useState({title: '', body: ''});
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
    return(
        <div>
            {isAdding && <>
                <form onSubmit={()=>handleAddNote(newNoteContent.title, newNoteContent.body)}>
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
            </>}
            {!isAdding && <button onClick={()=>setIsAdding(true)}> + New Content</button>}
        </div>
    );
}