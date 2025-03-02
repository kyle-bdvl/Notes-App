export default function Overlay({title,icon,children,close}){ 
  const imgCssClasses = "w-6 h-6 rounded-md";
  let mainCssClasses = "flex flex-row gap-4";
  let buttonCssClasses = "bg-red-500 text-white font-bold py-0.5 px-0.5"

 
  return (
    <div>
      <div className={mainCssClasses}>
        <h1>{title}</h1>
        <img className={imgCssClasses} src={icon}/>
        <button onClick={close} className={buttonCssClasses}> X </button>
      </div>
      <div className="h-80 w-20 ">
        {children}
      </div>
      

    </div>
  );
}