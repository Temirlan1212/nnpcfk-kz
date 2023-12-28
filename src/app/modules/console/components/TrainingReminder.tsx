import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";

export function TrainingReminder() {
  return (
    <div
      className="w-100 h-100 p-5 card card-flush bgi-no-repeat"
      style={{ backgroundColor: "#50CD89", gap: "10px" }}
    >
      <div
        className="position-relative w-100 h-100 p-5 border-0 card card-flush bgi-no-repeat"
        style={{ backgroundColor: "#181C32", gap: "10px" }}
      >
        <div>
          <div
            className="position-relative card-header p-0 border-bottom-0"
            style={{ zIndex: 1 }}
          >
            <div className="card-title d-flex flex-column">
              <span className="fs-2 fw-bold text-white">
                Провели тренировку?
              </span>
              <span className="fs-2 fw-bold text-white">
                Не забудьте добавить ее на платформу!
              </span>

              {/* <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
              Тренировок добавлено за 7 дней
            </span> */}
            </div>
          </div>
        </div>

        <div className="d-flex position-relative" style={{ zIndex: 1 }}>
          <a href="#" className="btn btn-primary">
            Записаться
          </a>

          <a className="btn btn-light ms-2">Сохранить в избранное</a>
        </div>

        <img
          src={toAbsoluteUrl("media/stock/console/football-illustration.png")}
          alt="football-illustration"
          className="p-3 position-absolute h-150px"
          style={{ zIndex: 0, right: 0, bottom: 0 }}
        />
      </div>
    </div>
  );
}
