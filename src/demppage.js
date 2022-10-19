import {useParams} from "react-router-dom"

export default function Demopage(){
    const val=useParams()
    return (
        <div>{val}</div>
    );
}