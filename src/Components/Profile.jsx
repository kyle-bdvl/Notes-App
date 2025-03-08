export default function Profile({name,date}){ 
  return ( 
    <div className="flex flex-col gap-4 w-60">
      <div className="flex items-center gap-2">
        <p >Name : {name}</p>
      </div>
      <div>
        <p>birthday :{date} </p>
      </div>
    </div>

  );  
}