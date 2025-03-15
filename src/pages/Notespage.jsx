import { useSelector} from "react-redux";
import { Link } from "react-router-dom";
import Note from "../Components/Note";

export default function Notespage() {
    const notes = useSelector((state) => state.notes);
    return (
        <ul className="flex flex-wrap gap-3 mt-3">
            {notes.map((noteItem) => {
                return (
                    <li>
                        <Note
                            noteItem={noteItem}
                            key={noteItem.id}
                        />
                    </li>
                );
            })}
            {/* <li>
                <button className="w-auto h-auto pl-3 pr-3 cursor-pointer bg-gray-700 rounded-2xl hover:bg-gray-400 hover:border-b-gray-400 text-amber-500 hover:text-amber-50">
                    <Link to='add'>Here</Link>
                </button>
            </li> */}
        </ul>
    );
}