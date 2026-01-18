import React from "react";
import { useState } from "react";

import Popup from "../components/Popup";
import Chatbot from "../components/Chatbot";
import CertificateContainer from "../components/CertificateContainer";


import "./CertificatePage.css";

function CertificatesPage(){
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupData, setPopupData] = useState(null);
    const data = {
                    name: "MERN",
                    description: "MERN Stack Course",
                    link: "https://www.udemy.com/course/react-nodejs-express-mongodb-the-mern-fullstack-guide/learn/lecture/16833312#overview",
                    image: "/temp.jpg"
                }   
    function openPopup(){
        setPopupData(data);
        setPopupOpen(true);
    }

    function closePopup(){
        setPopupOpen(false);
        setPopupData(null);
    }
    return(
        <>
        <div className="certificatePage-container">
            <div className="left-panel">
                <h1>Certificates</h1>
                <CertificateContainer data={data} onClick={openPopup}/>
                <CertificateContainer />
                <CertificateContainer />
                <CertificateContainer />

            </div>
            <div className="right-panel">
                <Chatbot />
            </div>
        </div>
        <Popup isOpen={popupOpen} data={popupData} onClose={closePopup} />
        </>
    );
}

export default CertificatesPage;