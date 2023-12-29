import { FC } from "react";
import { KTIcon } from "../../../../_metronic/helpers";
import { Dropdown1 } from "../../../../_metronic/partials";

type Props = {
  className: string;
};

const ListsWidget6: FC<Props> = () => {
  return (
    <div className="card card-xl-stretch w-100 mb-5 mb-xl-8">
      {/* begin::Header */}
      <div className="card-header border-0">
        <h3 className="card-title fw-bold text-gray-900">Уведомления</h3>
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
      <div className="card-body pt-0">
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-warning rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className=" text-warning me-5">
            <KTIcon iconName="time" className="text-warning fs-1 me-5" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Ваш курс подходит к концу
            </a>
            <span className="text-muted fw-semibold d-block">Сегодня</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-warning py-1">+28%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-success rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className=" text-success me-5">
            <KTIcon iconName="verify" className="text-success fs-1 me-5" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Вы успешно завершили курс
            </a>
            <span className="text-muted fw-semibold d-block">2 дня назад</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-success py-1">+50%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-danger rounded p-5 mb-7">
          {/* begin::Icon */}
          <span className=" text-danger me-5">
            <KTIcon iconName="ranking" className="text-danger fs-1 me-5" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Вы добавили соревнование
            </a>
            <span className="text-muted fw-semibold d-block">7 дней назад</span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-danger py-1">-27%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className="d-flex align-items-center bg-light-info rounded p-5">
          {/* begin::Icon */}
          <span className=" text-info me-5">
            <KTIcon iconName="badge" className="text-info fs-1 me-5" />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className="flex-grow-1 me-2">
            <a
              href="#"
              className="fw-bold text-gray-800 text-hover-primary fs-6"
            >
              Вы получили сертификат
            </a>
            <span className="text-muted fw-semibold d-block">
              13 дней назад
            </span>
          </div>
          {/* end::Title */}
          {/* begin::Lable */}
          <span className="fw-bold text-info py-1">+8%</span>
          {/* end::Lable */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ListsWidget6 };
