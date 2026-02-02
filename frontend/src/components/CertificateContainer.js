import AIButton from "./AIButton";
import "./CertificateContainer.css";


function CertificateContainer({data, onClick, onAI}){
    if (!data) return null;
    return(
        <>
        <div className="container" onClick={onClick}>
            {true && (
                <div className="image-container">
                    <img src={data.image} alt="Not Available" className="image"/>
                </div>
            )}
            <div className="title-row">
                <h2>{data.id}. {data.name}</h2>
                <AIButton onClick={() => onAI(data)} />
            </div>
        </div>
        </>
    )
}

export default CertificateContainer;