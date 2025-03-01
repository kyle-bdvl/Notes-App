export default function Sidebar(){ 
 
  return (
    <div>
      <div>
        <svg src="src\assets\account.svg"/>
        <p className="bg-stone-500">Profile</p>
      </div>
      <div>
        <svg/>
        <p>Settings</p>
      </div>
      <div>
        <p>+ Add Note</p>
      </div>
      <div>
        <svg></svg>
        <p>Bookmarked</p>
      </div>
    </div>
  )
}