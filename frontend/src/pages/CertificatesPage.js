import React, { useEffect, useState } from "react";

import Popup from "../components/Popup";
import Chatbot from "../components/Chatbot";
import Container from "../components/Container";

import "./CertificatesPage.css";

function CertificatesPage() {
  const [certificates, setCertificates] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState(null);
  const [activeCertificate, setActiveCertificate] = useState(null);

  useEffect(() => {
    async function fetchCertificates() {
      try {
        const res = await fetch("http://localhost:5000/certificates");
        const data = await res.json();

        setCertificates(data);
      } catch (err) {
        console.error("Failed to fetch certificates:", err);
      }
    }

    fetchCertificates();
  }, []);

  function openPopup(certificate) {
    setPopupData(certificate);
    setPopupOpen(true);
  }

  function closePopup() {
    setPopupOpen(false);
    setPopupData(null);
  }

  function handleAI(cert) {
  setActiveCertificate(cert);
  }

  return (
    <>
      <div className="certificatePage-container">
        <div className="left-panel">
          <h1>Certificates</h1>
          {certificates.map((cert) => (
            <Container
              data={{
                ...cert,
                image: `http://localhost:5000/${cert.image}`
              }}
              onClick={() => openPopup(cert)}
              onAI={() => handleAI(cert)}
              type={"certificate"}
            />
          ))}
        </div>

        <div className="right-panel">
          <Chatbot mode="Certificates" content={activeCertificate} />
        </div>
      </div>

      <Popup isOpen={popupOpen} data={popupData} onClose={closePopup} type={"certificate"} />
    </>
  );
}

export default CertificatesPage;
