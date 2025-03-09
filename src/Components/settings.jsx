import { useState } from 'react';

export default function Settings({name,date, changeName, changeDate, Delete}) {
  
  //to activate the input bar
  const [input, setInput] = useState(false);
  const [dateButton,setDateButton] = useState(false);

  
  function toggleInput() {
    setInput(!input);
  }

  function toggleDate(){
    setDateButton(!dateButton);
  }

  
  return (
    <div className="flex flex-col gap-4 w-60">
      <div className="flex items-center gap-2">
        {input ? <input type="text" value={name} onChange={changeName} /> : <p >Name : {name}</p>}
        <button onClick={toggleInput} className="hover:cursor-pointer">{input ? "Save" : "Edit"} </button>
      </div>
      <div>
        {dateButton ? <input type="date" value={date} onChange={changeDate} /> :<p>birthday :{date} </p>}
        <button onClick={toggleDate}>{dateButton ? "save" :"Edit"}</button>
      </div>
      <button onClick={Delete} className="bg-red-500 caret-blue-50 shadow-red-200 hover:bg-red-700">Delete Account</button>
    </div>
  );
}