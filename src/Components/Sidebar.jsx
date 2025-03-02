import accountIcon from "../assets/account.svg"
import bookmark from "../assets/bookmark-outline.svg"
import tools from "../assets/tools.svg";
import note from "../assets/note-plus.svg";
import {useState, useRef} from 'react';
import Overlay from './Overlay'
export default function Sidebar(){ 
  const imgCssClasses = "w-6 h-6 rounded-md";
  const [overlay,setOverlay]= useState(null);
  const [Username, setUserame] = useState('');
  
  const name = useRef(null);
  
  
  function handleClose (){ 
    setOverlay (null);

  }

  function handleName(){
    setUserame(name.current.value);
  }

  

  function handleClick(value){
    
    if(value === 'profile'){
      setOverlay(
      <Overlay title="Profile" icon={accountIcon} close={handleClose}>
        <div className="flex flex-col">
          <p>Name : {Username}</p>
          <p>Birthday : 16/12/2004</p>
          <p>Date Joined : --</p>
        </div>
      </Overlay>
      );
      
    }
    else if(value === 'settings'){
      setOverlay(
      <Overlay title="Settings" icon={tools} close={handleClose}children>
        <div className="flex flex-col">
          <p>Name : {Username}</p>
           <input ref={name} type="text" placeholder="Enter Name" className="border-amber-600 w-20"/> 
          <button onClick={handleName} className="hover:cursor-pointer">Edit</button>
        </div>
        <div>
          <p>Birthday</p>
          <button>Edit</button>
        </div>
        <button className="bg-red-500 caret-blue-50 shadow-red-200 hover:bg-red-700">Delete Account</button>
      </Overlay>
      );
    }
  }
  return (
    <>
    <aside className="flex flex-col gap-5 bg-neutral-300">
      <div className="flex flex-row items-center gap-2">
        <img className={imgCssClasses} src={accountIcon}/>
        <button onClick={()=>handleClick('profile')} className="hover:cursor-pointer">Profile</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className={imgCssClasses} src={tools} />
        <button onClick={()=>handleClick('settings')} className="hover:cursor-pointer">Settings</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className={imgCssClasses} src={note} />
        <button onClick={()=>{handleClick('note')}} className="hover:cursor-pointer">Add Note</button>
      </div>
      <div className="flex flex-row items-center gap-2">
        <img className={imgCssClasses} src={bookmark}/>
        <button className="hover:cursor-pointer">Bookmarked</button>
      </div>
    </aside>

    {overlay && (
      <div>
        {overlay}
      </div>
    )}
    </>
  )
}