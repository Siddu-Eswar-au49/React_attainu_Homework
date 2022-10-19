import { Link } from "react-router-dom";

export default function NavBar({weeks}){
    return (
        <div className="navbar nav">
            {weeks.map((val)=>(
            <Link to={val}></Link>
            ))}
        </div>
    );
}