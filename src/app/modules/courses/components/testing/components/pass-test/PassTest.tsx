import { KTIcon, toAbsoluteUrl } from "../../../../../../../_metronic/helpers";

export function PassTest() {
  return (
    <div
      className="w-100 h-100 p-4 card card-flush bgi-no-repeat"
      style={{ backgroundColor: "#95C6FF", gap: "10px" }}
    >
      <div
        className="position-relative w-100 h-100 p-5 border-0 card card-flush bgi-no-repeat"
        style={{ backgroundColor: "#1A5FAF", gap: "50px" }}
      >
        <div
          className="position-relative card-header p-0 border-bottom-0 d-flex flex-column"
          style={{ zIndex: 1 }}
        >
          <div className="card-title d-flex flex-column">
            <span className="fs-2 fw-bold text-white">Тестирование</span>
            <span className="fs-5 fw-normal text-white">
              Пройдите все курсы до начала тестирования
            </span>
          </div>
        </div>

        <div
          className="d-flex align-items-center pb-5"
          style={{ gap: 10, zIndex: 1 }}
        >
          <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <div
              className="bg-primary bg-opacity-25 d-flex justify-content-center align-items-center rounded-circle p-5"
              style={{ height: 50, width: 50 }}
            >
              <KTIcon iconName="abstract-41 fs-2" className="fs-2 text-light" />
            </div>

            <div className="d-flex flex-column">
              <span className="fs-5 fw-bold text-white">16</span>
              <span className="fs-5 fw-normal text-white">курсов</span>
            </div>
          </div>
          <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <div
              className="bg-primary text-light bg-opacity-25 d-flex justify-content-center align-items-center rounded-circle p-5"
              style={{ height: 50, width: 50 }}
            >
              <KTIcon iconName="abstract-26" className="fs-2 text-light" />
            </div>

            <div className="d-flex flex-column">
              <span className="fs-5 fw-bold text-white">72</span>
              <span className="fs-5 fw-normal text-white">
                учебных материала
              </span>
            </div>
          </div>
        </div>

        <div className="d-flex position-relative" style={{ zIndex: 1 }}>
          <a href="#" className="btn btn-color-light bg-primary bg-opacity-50">
            Пройти тестирование
          </a>
        </div>

        <img
          src={toAbsoluteUrl("media/stock/courses/delivery.png")}
          alt="delivery"
          className="p-3 position-absolute m-auto"
          style={{ zIndex: 0, top: 0, right: 0, bottom: 0 }}
        />
      </div>
    </div>
  );
}
