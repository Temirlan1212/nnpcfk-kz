import { toAbsoluteUrl } from "../../../../_metronic/helpers";
import { CardsWidget20, ListsWidget3 } from "../../../../_metronic/partials/widgets";
import { PageLink, PageTitle } from "../../../_metronic/layout/core";

export function ActionReseearchCard() {
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap" style={{ gap: "10px" }}>
        <div className="col-xl-7">
          <div
            className={`card card-flush bgi-no-repeat p-5`}
            style={{
              backgroundImage: `url('${toAbsoluteUrl("media/demo/1600x1200/2.jpg")}')`,
            }}
          >
            <div className="card-header pt-5">
              <div className="card-title d-flex flex-column">
                <span className="fs-2hx fw-semibold text-white me-2 lh-1 ls-n2">Курс по Action Research</span>

                <span className="text-white opacity-75 pt-1 fw-semibold fs-6">от Батырханова М.К.</span>
              </div>

              <div className="card-title d-flex gap-2">
                <span className="text-white opacity-75 pt-1 fw-light fs-7">14.5 часов обучения</span>
                <span className="text-white opacity-75 pt-1 fw-light fs-7">26 учебных материалов</span>
              </div>
            </div>
            <div className="card-body d-flex align-items-end pt-0 mt-5">
              <div className="d-flex align-items-center flex-column mt-5 w-100">
                <div className="d-flex fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                  <a href="#" className="btn btn-primary">
                    Записаться
                  </a>
                  <a className="btn btn-light ms-2">Сохранить в избранное</a>
                </div>
              </div>
            </div>
          </div>
          {/* <CardsWidget20 className="h-md-50 mb-5 mb-xl-10" description="Active Projects" img={t} /> */}
        </div>

        <ListsWidget3 className="card-xl-stretch mb-5 mb-xl-8" />
      </div>
      <div>
        <div className="col-xl-6" style={{ height: "400px" }}>
          <div
            className={`card card-flush bgi-no-repeat`}
            style={{
              backgroundColor: "#5014D0",
            }}
          >
            <div className="card-header pt-5">
              <div className="card-title d-flex flex-column">
                <span className="fs-2hx fw-bold text-white me-2 lh-1 ls-n2">69</span>

                <span className="text-white opacity-75 pt-1 fw-semibold fs-6">Тренировок добавлено за 7 дней</span>
              </div>
            </div>
            <div className="card-body d-flex align-items-end pt-0">
              <div className="d-flex align-items-center flex-column mt-3 w-100">
                <div className="d-flex justify-content-between fw-bold fs-6 text-white opacity-75 w-100 mt-auto mb-2">
                  <span>Сегодня 21</span>
                  <span>72%</span>
                </div>

                <div className="h-8px mx-3 w-100 bg-white bg-opacity-50 rounded">
                  <div
                    className="bg-white rounded h-8px"
                    role="progressbar"
                    style={{ width: "72%" }}
                    aria-valuenow={50}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bonus">
        <div className="d-flex flex-column justify-content-between align-items-start">
          <div className="d-flex">
            <div className="me-3">
              {/* <Button variant="danger" size="md">
                Добавить тренировку
              </Button> */}
            </div>
            <div>
              {/* <Button variant="dark" size="md">
                Напомнить позже
              </Button> */}
            </div>
          </div>
          <div className="overlap-group">
            <div className="rec" />
            <div className="text">
              <p className="text-wrapper">
                Провели тренировку?
                <br />
                Не забудьте добавить ее на платформу!
              </p>
            </div>
          </div>
        </div>
        <img className="rectangle" alt="Rectangle" src="rectangle-633.png" />
      </div>
    </div>
  );
}
