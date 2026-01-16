import "./CertificateContainer.css";
function CertificateContainer({ data }){
    // if (!data) return null;

    
    // const sampleData = {
    //                 name: "MERN",
    //                 description: "MERN Stack Course",
    //                 link: "youtube.com",
    //                 image: ""
    //             }
    return(
        <>
        <div className="container">
            {true && (
                <div className="image-container">
                    <img src="/temp.jpg" alt="Not Available" className="image"/>
                </div>
            )}
            <h2>MERN Stack Course</h2>
        </div>
        </>
    )
}

export default CertificateContainer;