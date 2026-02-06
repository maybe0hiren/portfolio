import "./Popup.css";

function Popup({isOpen, data, onClose, type}){
    if(!isOpen || !data) return null;
    let height;
    if (type === "certificate") {
        height = "85%";
    } else {
        height = "40%";
    }
    return(
        <>
        <div className="popup" onClick={onClose}>
            <div className="container" onClick={(e) => e.stopPropagation()} style={{ height: height }}>
                {type === "certificate" &&
                <img src={`http://localhost:5000/${data.image}`} className="image-container" alt={data.name}/>
                }
                <h1>{data.name}</h1>
                <h3>{data.description}</h3>
                <br />
                {type === "project" &&(
                    <p><b>Domains: </b> {data.domains}</p>
                )}
                <br />
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="link" onClick={(e) => e.stopPropagation()}>More about this</a>
            </div>
        </div>
        </>
    )
}

export default Popup;