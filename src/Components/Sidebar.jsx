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
  const [overlay, setOverlay] = useState({ profile: false, settings: false, bookmarked: false, addNote: false });
  //to set the two-way binding
  const [username, setUsername] = useState("");
  const [date, setDate] = useState(null);

  function toggleOverlay(key) {
    setOverlay((prevState,) => ({
      profile: key === "profile" ? !prevState.profile : false,
      settings: key === "settings" ? !prevState.settings : false,
      bookmarked: key === "bookmarked" ? !prevState.bookmarked : false,
      addNote: key==="addNote" ? !prevState.bookmarked:false
    }));
  }

  function handleDateChange(event) {
    setDate(event.target.value);
  }
  function handleNameChange(event) {
    setUsername(event.target.value)
  }
  function handleDelete() {
    setDate('');
    setUsername('');
  }

  return (
    <>
      <aside className="flex flex-col gap-5 bg-neutral-300">
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={accountIcon} />
          <button onClick={() => toggleOverlay("profile")} className="hover:cursor-pointer">Profile</button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={tools} />
          <button onClick={() => toggleOverlay("settings")} className="hover:cursor-pointer">Settings</button>

        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={note} />
          <button onClick={() => { toggleOverlay('addNote') }} className="hover:cursor-pointer">Add Note</button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <img className={imgCssClasses} src={bookmark} />
          <button onClick={() => { toggleOverlay("bookmarked") }} className="hover:cursor-pointer">Bookmarked</button>
        </div>

      </aside>
      <div>
        {overlay.settings && <Settings name={username} date={date} changeName={handleNameChange} changeDate={handleDateChange} Delete={handleDelete} />}
        {overlay.profile && <Profile name={username} date={date} />}
        {overlay.bookmarked && <Bookmarked />}
        

      </div>
    </>
  );
}