import { KTSVG, toAbsoluteUrl } from "../../../../_metronic/helpers";

export function ActionReseearchCard() {
  return (
    <div className="w-xl-75 w-100 h-400px">
      <div
        className={`card card-flush bgi-no-repeat p-5 h-100`}
        style={{
          backgroundSize: "cover",
          backgroundImage: `url('${toAbsoluteUrl(
            "media/stock/console/bg-1.png"
          )}')`,
        }}
      >
        <div className="card-header pt-5">
          <div className="card-title d-flex flex-column">
            <span className="fs-2hx fw-semibold text-white me-2 mb-4 lh-1 ls-n2">
              Курс по Action Research
            </span>

            <span className="text-white opacity-75 pt-1 fw-semibold fs-6">
              от Батырханова М.К.
            </span>

            <div className="card-title d-flex gap-2">
              <KTSVG svgClassName="play" path="media/svg/general/play.svg" />
              <span className="text-white opacity-75 pt-1 fw-light fs-7">
                14.5 часов обучения
              </span>

              <KTSVG
                svgClassName="headset"
                path="media/svg/general/headset.svg"
              />
              <span className="text-white opacity-75 pt-1 fw-light fs-7">
                26 учебных материалов
              </span>
            </div>
          </div>
        </div>
        <div className="card-body d-flex align-items-end pt-0 mt-5">
          <div className="d-flex align-items-center flex-column mt-5 w-100">
            <div
              className="d-flex fw-bold fs-6 text-white flex-wrap w-100 mt-auto mb-2"
              style={{ gap: "10px" }}
            >
              <a href="#" className="btn btn-primary">
                Записаться
              </a>

              <a className="btn btn-light">Сохранить в избранное</a>
            </div>
          </div>
        </div>
      </div>
      {/* <CardsWidget20 className="h-md-50 mb-5 mb-xl-10" description="Active Projects" img={t} /> */}
    </div>
  );
}
