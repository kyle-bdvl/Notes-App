import accountIcon from "../assets/account.svg"
import bookmark from "../assets/bookmark-outline.svg"
import tools from "../assets/tools.svg";
import note from "../assets/note-plus.svg";
import Bookmarked from "./Bookmarked";
import Settings from "./settings"
import Profile from "./Profile";
import { useState, } from 'react';


export default function Sidebar() {
  const imgCssClasses = "w-6 h-6 rounded-md";
  const [setting, setSetting] = useState(false);
  const [profile,setProfile]= useState(false);
  //to set the two-way binding
  const [username, setUsername] = useState("");
  const[date, setDate] = useState(null);
 
  function toggleProfile(){
    setProfile(!profile);
  }
  function toggleSetting() {
    setSetting(!setting);
  }
  function handleDateChange(event){
    setDate(event.target.value);
  }
  function handleNameChange(event) {
    setUsername(event.target.value)
  }



  return (
    <>
      <aside className="flex flex-col gap-5 bg-neutral-300">
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={accountIcon} />
          <button onClick={toggleProfile} className="hover:cursor-pointer">Profile</button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={tools} />
          <button onClick={toggleSetting} className="hover:cursor-pointer">Settings</button>

        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={note} />
          <button onClick={() => { handleClick('note') }} className="hover:cursor-pointer">Add Note</button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={bookmark} />
          <button  className="hover:cursor-pointer">Bookmarked</button>
        </div>
        
      </aside>
      <div>
        {setting && <Settings name={username} date={date} changeName={handleNameChange} changeDate={handleDateChange}/>}
        {profile && <Profile name={username} date={date}/>}
      </div>
    </>
  );
}