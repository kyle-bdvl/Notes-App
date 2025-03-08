import { useState, useCallback } from "react";
export default function NewNote(handleAddNote){
    const [isAdding, setIsAdding] = useState(false);
    const [newNoteContent, setNewNoteContent] = useState({title: '', body: ''});
    const editContent = useCallback((newContent, type)=>{
        setEditModeContent(prevContent => ({
            ...prevContent,
            [type]: newContent,
        }));
    }, [setEditModeContent]);
    return(
        <div>
            {isAdding && <>
                <form action="POST">
                    <label value="Title"/>
                    <input type="text" />
                    <label value="Body"/>
                    <input type="text" />
                    <button type="Submit">Create new note</button>
                </form>
            </>}
            {!isAdding && <button> + New Content</button>}
        </div>
    );
}