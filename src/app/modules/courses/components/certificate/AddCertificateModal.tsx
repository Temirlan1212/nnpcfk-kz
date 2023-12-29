import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import { faCloudDownloadAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface AddCertificateModalProps {
  showModal: boolean;
  handleClose: () => void;
}

interface FormFields {
  [key: string]: string;
}

const AddCertificateModal: React.FC<AddCertificateModalProps> = ({
  showModal,
  handleClose,
}) => {
  const [certificateData, setCertificateData] = useState<FormFields>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCertificateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddCertificate = () => {
    handleClose();
  };

  const formFields = [
    { label: "Выдан * ", name: "field1" },
    { label: "Место", name: "field2" },
    { label: "Язык *", name: "field3" },
    { label: "Номер сертификата *", name: "field4" },
    { label: "Количество часов", name: "field5" },
    { label: "Файл сертификата*", name: "field6" },
  ];

  return (
    <Modal
      show={showModal}
      onHide={handleClose}
      dialogClassName="modal-1070"
      size="xl"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          Добавить сертификат <br /> Заполните данные о сертификате
        </Modal.Title>
        <Button
          variant="outline-secondary"
          onClick={() => console.log("Download")}
          className="me-2 mt-15 mt-md-0"
          style={dowloadStyle}
        >
          <FontAwesomeIcon icon={faCloudDownloadAlt} className="me-2" />
          <span className="d-none d-md-inline">Скачать</span>
        </Button>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {formFields.map((field) => (
            <Form.Group as={Row} key={field.name} className="mb-3">
              <Form.Label column sm="3">
                {field.label.replace(/\*/g, "")}
                {field.label.includes("*") && (
                  <span style={{ color: "red", marginLeft: "2px" }}>*</span>
                )}
              </Form.Label>
              <Col sm="9">
                <Form.Control
                  style={inputStyle}
                  type="text"
                  placeholder={`Введите ${field.label.toLowerCase()}`}
                  name={field.name}
                  value={certificateData[field.name] || ""}
                  onChange={handleChange}
                />
              </Col>
            </Form.Group>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Отменить
        </Button>
        <Button variant="primary" onClick={handleAddCertificate}>
          Добавить сертификат
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

const inputStyle = {
  display: "flex",
  height: "38px",
  padding: "13px 12px",
  alignItems: "center",
  gap: "10px",
  flex: "1 0 0",
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

export default AddCertificateModal;
