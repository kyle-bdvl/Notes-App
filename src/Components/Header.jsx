import Logo from '../assets/transparent-icon-notebook-pencil-open-notebook-ruled-paper-notebook-with-pencil-poised-on-open-1710956153261.png'
export default function Header (){
  const imgCssClasses = "w-10 h-10 rounded-md mx-4";
  return (
    <div className="bg-neutral-500 flex justify-center items-center ">
      <img className={imgCssClasses} src={Logo}></img>
      <h1>Best notes App</h1>
    </div>
  );
}