import React, { FC, useState } from "react";
import Certificate from "./Certificate";
import { KTIcon } from "../../../../../_metronic/helpers";
import AddCertificateModal from "./AddCertificateModal";

const CertificateWrapper: FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div
        className="card-title justify-content-between d-flex flex-column flex-md-row"
        style={{ marginBottom: "28px" }}
      >
        <div>
          <h3 className="fw-bolder fs-2 m-0 mb-1">Мои сертификаты</h3>
          <p className="text-gray-600 fs-5 fw-normal">
            Список ваших сертификатов
          </p>
        </div>
        <button
          type="button"
          className="btn btn-primary btn-sm my-3 my-md-auto"
          style={{ height: "38px" }}
          onClick={handleShow}
        >
          <KTIcon iconName="plus-square" className="fs-3 pr-4" />
          Добавить сертификат
        </button>
        <AddCertificateModal showModal={showModal} handleClose={handleClose} />
      </div>
      <Certificate />;
    </>
  );
};

export default CertificateWrapper;
