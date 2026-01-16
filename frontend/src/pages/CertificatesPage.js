import React from "react";
import Chatbot from "../components/Chatbot";
import CertificateContainer from "../components/CertificateContainer";


import "./CertificatePage.css";

function CertificatesPage(){
    // const sampleData = {
    //                 name: "MERN",
    //                 description: "MERN Stack Course",
    //                 link: "youtube.com",
    //                 image: ""
    //             }
    return(
        <>
        <div className="certificatePage-container">
            <div className="left-panel">
                <h1>Certificates</h1>
                <CertificateContainer />
                <CertificateContainer />
                <CertificateContainer />
                <CertificateContainer />

            </div>
            <div className="right-panel">
                <Chatbot />
            </div>
        </div>
        </>
    );
}

export default CertificatesPage;