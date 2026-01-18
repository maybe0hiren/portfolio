import "./Popup.css";

function Popup({isOpen, data, onClose}){
    if(!isOpen || !data) return null;
    return(
        <>
        <div className="popup" onClick={onClose}>
            <div className="container" onClick={(e) => e.stopPropagation()}>
                <img src={data.image} className="image-container" />
                <h1>{data.name}</h1>
                <h3>{data.description}</h3>
                <br />
                <a href={data.link} target="_blank" rel="noopener noreferrer" className="link" onClick={(e) => e.stopPropagation()}>More about this</a>
            </div>
        </div>
        </>
    )
}

export default Popup;