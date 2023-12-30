import { KTSVG } from "../../../../../../_metronic/helpers";
import { CourseProgram } from "./CourseProgram";

export function InfoBlock2() {
  return (
    <>
      <div
        className="d-flex flex-column px-5 py-5 rounded bg-white min-w-25 max-w-25"
        style={{ gap: "30px" }}
      >
        {/* title starts */}
        <div className="d-flex flex-column" style={{ gap: "40px" }}>
          <h2 className="fw-bold text-dark me-2 mb-4 lh-1">
            Информация о курсе
          </h2>

          <span className="fw-normal text-dark fs-4">
            Курс по CLIL (Content and Language Integrated Learning)
          </span>
        </div>
        {/* title ends */}

        <CourseProgram />
      </div>
    </>
  );
}
