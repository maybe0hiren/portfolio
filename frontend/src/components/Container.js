import AIButton from "./AIButton";
import "./Container.css";


function Container({data, onClick, onAI, type}){
    if (!data) return null;
    return(
        <>
        <div className="container" onClick={onClick}>
            {type === "certificate" && (
                <div className="image-container">
                    <img src={data.image} alt="Not Available" className="image"/>
                </div>
            )}
            <div className="title-row">
                {type === "certificate" && (
                    <>
                    <h2>{data.id}. {data.name}</h2>
                    <AIButton onClick={() => onAI(data)} />
                    </>
                )}
                {type === "project" &&(
                    <h1>{data.id}. {data.name}</h1>
                )}
            </div>
            {type === "project" && (
                <>
                <h3>{data.description}</h3>
                <p><b>Domains: </b> {data.domains}</p>
                <br />
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="link" onClick={(e) => e.stopPropagation()}>More about this</a>
                </>
            )}
        </div>
        </>
    )
}

export default Container;