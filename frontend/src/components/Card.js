import { useNavigate } from "react-router-dom";

import "./Card.css"

function Card({title, to}){
    const navigate = useNavigate();

    return(
        <>
        <div className="card" onClick={() => navigate(to)} role="button" tabIndex={0}>
            <h3 align='center'>{title}</h3>
        </div>
        </>
    )
}

export default Card;