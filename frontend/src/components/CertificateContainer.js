import "./CertificateContainer.css";


function CertificateContainer({data, onClick}){
    if (!data) return null;
    return(
        <>
        <div className="container" onClick={onClick}>
            {true && (
                <div className="image-container">
                    <img src={data.image} alt="Not Available" className="image"/>
                </div>
            )}
            <h2>{data.name}</h2>
        </div>
        </>
    )
}

export default CertificateContainer;