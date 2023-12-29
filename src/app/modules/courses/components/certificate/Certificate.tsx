import React, { FC, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import PreviewCertificate from "./PreviewCertificate";

const Certificate: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <Row xs={1} md={2} lg={4} className="g-4">
      {[...Array(8)].map((_, index) => (
        <Col key={index}>
          <Card className="p-4">
            <Card.Img
              variant="top"
              src="https://marketplace.canva.com/EAFIEvneNCM/1/0/1600w/canva-golden-elegant-certificate-of-appreciation-0bN-aLORS9U.jpg"
              alt={`Certificate Image ${index + 1}`}
              className="rounded-3"
            />

            <Card.Body>
              <Card.Text
                className="text-center font-inter font-weight-600 text-gray-800 text-base mb-2"
                style={{ fontSize: "16px", lineHeight: "20px" }}
              >
                Инновационные методики в обучении{" "}
              </Card.Text>
              <div
                className="text-center font-inter font-weight-600 text-gray-500 text-sm"
                style={{ lineHeight: "14px" }}
              >
                25.06.2023{" "}
              </div>
              <div className="d-flex justify-content-between mt-10">
                <div>
                  25 <br /> часов
                </div>
                <div>
                  Астана <br />
                  Страна
                </div>
              </div>
              <div className="d-flex align-items-center gap-2 justify-content-center mt-15 mb-3">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleShow}
                  style={{
                    display: "flex",
                    padding: "9px 12px",
                    alignItems: "center",
                    gap: "5px",
                    borderRadius: "6px",
                    background: "var(--Primary-Primary-Light, #EEF6FF)",
                    color: "var(--Primary-Primary, #3E97FF)",
                    fontFamily: "Inter",
                    fontSize: "13px",
                    fontWeight: 700,
                    lineHeight: "14px",
                  }}
                >
                  Посмотреть
                </button>
                <PreviewCertificate
                  showModal={showModal}
                  handleClose={handleClose}
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Certificate;
