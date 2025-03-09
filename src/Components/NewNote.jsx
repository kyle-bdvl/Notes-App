import { useState} from "react";
export default function NewNote({addNote}){
    const buttonCss = "w-auto h-auto pl-3 pr-3 cursor-pointer bg-gray-700 rounded-2xl hover:bg-gray-400 hover:border-b-gray-400 text-amber-500 hover:text-amber-50";
    const [isAdding, setIsAdding] = useState(false);
    const [newNoteContent, setNewNoteContent] = useState({title: '', body: ''});

    function handleAddingNote(){
        setIsAdding(!isAdding)
    }

    function handleSubmit(e){
        e.preventDefault();
        if  (newNoteContent.body.trim()=== "" || newNoteContent.title.trim()==="" ){
            alert('Enter something in the title or body !');
            return;
        }
        addNote(newNoteContent.title, newNoteContent.body);
        cancelEditMode();
        
    }
    const handleSetNewNoteContent = (newContent, type,) => {
        setNewNoteContent(prevContent => ({
            ...prevContent,
            [type]: newContent,
        }));
    };
    const cancelEditMode = () => {
        setNewNoteContent({title: '', body: ''});
        handleAddingNote();
    }
    return(
        <div>
            {isAdding && <>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input className="border-b-1 text-3xl text-amber-500 pl-4 pt-1"
                        value={newNoteContent.title}
                        onChange={(e) => handleSetNewNoteContent(e.target.value, "title")}
                    />
                    <label htmlFor="body">Body</label>
                    <input className="text-blue-500 font-medium pl-4 pr-4 pt-2"
                        value={newNoteContent.body}
                        onChange={(e) => handleSetNewNoteContent(e.target.value, "body")}
                    />
                    <button type="submit" className={buttonCss}>Save Changes</button>
                    <button type="reset" className={buttonCss} onClick={cancelEditMode}>Cancel Edit</button>
                </form>
            </>}
            {!isAdding && <button onClick={handleAddingNote}> + New Content</button>}
        </div>
    );
}