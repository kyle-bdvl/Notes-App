import { Link } from "react-router-dom"
export default function Navbar () {
    const paths = [
        {path: '/', name: "Homepage"},
        {path: '/notes', name: "Notes"},
        {path: '/notes/add', name: "New note"},
    ];
    return(
        <ol className="flex gap-10 font-light text-3xl mb-5">
            {paths.map((page, index)=>{
                return(
                    <li key={index}><Link to={page.path}>{page.name}</Link></li>
                );
            })}
        </ol>
    );
}
