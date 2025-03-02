export default function Overlay({title,icon,children}){ 
  const imgCssClasses = "w-6 h-6 rounded-md";
  return (
    <div>
      <div className="flex flex-row gap-4">
        <h1>{title}</h1>
        <img className={imgCssClasses} src={icon}/>
      </div>
      <div className="h-80 w-20 ">
        {children}
      </div>
      

    </div>
  );
}