import { DonutChart } from "./DonutChart";

export function ProgressStatistic() {
  return (
    <>
      <div className="w-100">
        <div className="card p-5">
          <div className="card-body p-0"></div>

          <div className="d-flex justify-content-between">
            <h3 className="card-title align-items-start d-flex flex-column">
              <span className="card-label fw-bold fs-3 mb-1">Прогресс</span>
              <span className="text-muted mt-1 fw-semibold fs-7">
                15 курсов пройдено
              </span>
            </h3>

            <div>
              <span className={`badge badge-light-danger`}>↓ 7.4%</span>
            </div>
          </div>
          <DonutChart className="" />
        </div>
      </div>
    </>
  );
}
