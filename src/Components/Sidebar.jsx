import accountIcon from "../assets/account.svg"
import bookmark from "../assets/bookmark-outline.svg"
import tools from "../assets/tools.svg";
import note from "../assets/note-plus.svg";
export default function Sidebar(){ 
  
  function handleClick(value){
    if(value === 'profile'){
      
    }
    else if(value === 'settings'){

    }
    else if (value === 'note'){
      
    }
  }

  
  return (
    <aside className="flex flex-col gap-5 bg-stone-500">
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md" src={accountIcon}/>
        <button onClick={()=>handleClick('profile')}className="hover:cursor-pointer">Profile</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md " src={tools} />
        <button onClick={()=>handleClick('settings')} className="hover:cursor-pointer">Settings</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md " src={note} />
        <button onClick={()=>{handleClick('note')}} className="hover:cursor-pointer">Add Note</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className="w-6 h-6 rounded-md" src={bookmark}/>
        <button className="hover:cursor-pointer">Bookmarked</button>
      </div>
    </aside>
  )
}