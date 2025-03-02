import accountIcon from "../assets/account.svg"
import bookmark from "../assets/bookmark-outline.svg"
import tools from "../assets/tools.svg";
import note from "../assets/note-plus.svg";
export default function Sidebar(){ 
 
  return (
    <aside className="flex flex-col gap-5 bg-stone-500">
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md" src={accountIcon}/>
        <p >Profile</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md " src={tools} />
        <p>Settings</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md " src={note} />
        <p>Add Note</p>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md" src={bookmark}/>
        <p>Bookmarked</p>
      </div>
    </aside>
  )
}