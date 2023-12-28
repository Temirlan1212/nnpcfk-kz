import React from "react";
import { Modal, Button } from "react-bootstrap";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PreviewCertificateModalProps {
  showModal: boolean;
  handleClose: () => void;
}

const PreviewCertificate: React.FC<PreviewCertificateModalProps> = ({
  showModal,
  handleClose,
}) => {
  const handleDownload = () => {
    console.log("Download");
  };

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName="modal-1070"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Поддержка эмоционального интеллекта учеников <br /> Выдан от
          15.02.2023 г.
          <div className="d-flex flex-column flex-md-row gap-2 mt-0.5rem">
            <div>
              25 <br /> часов
            </div>
            <span>
              <br />
            </span>
            <span>
              Астана <br />
              Страна
            </span>
            <span>
              <br />
            </span>
            <span>
              Русский <br />
              Язык
            </span>
            <span>
              <br />
            </span>
            <span>
              1/N-05150 <br />
              Номер
            </span>
          </div>
        </Modal.Title>
        <Button
          variant="outline-secondary"
          onClick={handleDownload}
          className="mt-3 mt-md-0"
          style={dowloadStyle}
        >
          <FontAwesomeIcon icon={faCloudDownloadAlt} className="me-2" />
          Скачать
        </Button>
      </Modal.Header>
      <Modal.Body>
        <img
          src="https://marketplace.canva.com/EAFIEvneNCM/1/0/1600w/canva-golden-elegant-certificate-of-appreciation-0bN-aLORS9U.jpg"
          alt="Certificate"
          style={{ maxWidth: "100%", maxHeight: "400px", margin: "0 auto", display: "flex" }}
        />
      </Modal.Body>
    </Modal>
  );
};

const dowloadStyle: React.CSSProperties = {
  borderRadius: "6px",
  background: "var(--Gray-Gray-200, #F1F1F2)",
  display: "flex",
  padding: "9px 12px",
  alignItems: "center",
  gap: "5px",
  position: "absolute",
  right: "75px",
};

export default PreviewCertificate;
