import React from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { Dropdown1 } from "../../../../_metronic/partials";

type Props = {
  className: string;
};

const ListsWidget3: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-gray-900">Мои курсы</h3>
        <div className="card-toolbar">
          {/* begin::Menu */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTIcon iconName="category" className="fs-2" />
          </button>
          <Dropdown1 />
          {/* end::Menu */}
        </div>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className="card-body pt-2">
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-success"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Инклюзивное обучение
            </a>
            <span className="text-muted fw-semibold d-block">
              Добавлен 13.12.23
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-success fs-8 fw-bold">
            Завершен
          </span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-primary"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Class Management PRO
            </a>
            <span className="text-muted fw-semibold d-block">
              Добавлен 11.12.23
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-primary fs-8 fw-bold">Новый</span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center mb-8">
          {/* begin::Bullet */}
          <span className="bullet bullet-vertical h-40px bg-warning"></span>
          {/* end::Bullet */}
          {/* begin::Checkbox */}
          <div className="form-check form-check-custom form-check-solid mx-5">
            <input className="form-check-input" type="checkbox" value="" />
          </div>
          {/* end::Checkbox */}
          {/* begin::Description */}
          <div className="flex-grow-1">
            <a
              href="#"
              className="text-gray-800 text-hover-primary fw-bold fs-6"
            >
              Как правильно оцени...
            </a>
            <span className="text-muted fw-semibold d-block">
              Добавлен 29.10.23
            </span>
          </div>
          {/* end::Description */}
          <span className="badge badge-light-warning fs-8 fw-bold">
            На проверке
          </span>
        </div>
        {/* end:Item */}
        {/* begin::Item */}

        {/* end:Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget3 };
