import { useState, useCallback, useMemo } from "react";
// note: the note class instance as defined in note.js
// handleUpdateNote: Takes in a key-value pair object containing title and body as keys and the id (separately)
export default function Note({ note, handleUpdateNote, handleDeleteNote}){
    const {title, body, date, id} = useMemo(()=>note.getAll(), [note]);
    const [mode, setMode] = useState("Read");
    const [editModeContent, setEditModeContent] = useState({title, body});
    const buttonCss = "w-auto h-auto pl-3 pr-3 cursor-pointer bg-gray-700 rounded-2xl hover:bg-gray-400 hover:border-b-gray-400 text-amber-500 hover:text-amber-50";
    const editContent = useCallback((newContent, type)=>{
        setEditModeContent(prevContent => ({
            ...prevContent,
            [type]: newContent,
        }));
    }, [setEditModeContent]);
    return (
        <div key={id} className="rounded-2xl bg-black w-100 h-auto">
            {mode==="Read" && <h3 className="border-b-1 text-3xl text-amber-500 pl-4 pt-1">{title}</h3>}
            {mode==="Edit" && <input className="border-b-1 text-3xl text-amber-500 pl-4 pt-1"
            value={editModeContent.title} 
            onChange={(e)=>editContent(e.target.value, "title")}
            />}
            <p className="text-amber-500 font-thin pl-4">{date}</p>
            {mode==="Read" && <p className="text-blue-50 font-medium pl-4 pr-4 pt-2">{body}</p>}
            {mode==="Edit" && <input className="text-blue-50 font-medium pl-4 pr-4 pt-2" 
            value={editModeContent.body} 
            onChange={(e)=>editContent(e.target.value, "body")}
            />}
            <div className="flex flex-row justify-end pr-3 pb-3 gap-1">
                {mode==="Read" && <button className={buttonCss} onClick={()=>setMode("Edit")}>Edit Note</button>}
                {mode==="Edit" && <button className={buttonCss} onClick={()=>handleUpdateNote(editModeContent, id)}>Save Changes</button>}
                <button className={buttonCss} onClick={()=>handleDeleteNote(id)}>Delete Note</button>
            </div>
        </div>
    );
}