import { KTSVG } from "../../../../../../_metronic/helpers";
import { CourseProgram } from "./CourseProgram";
import { Requirements } from "./Requirements";

export function InfoBlock1() {
  return (
    <>
      <div
        className="d-flex flex-column px-5 py-5 rounded bg-white"
        style={{
          gap: "30px",
        }}
      >
        {/* description starts */}
        <div className="d-flex flex-column" style={{ gap: "10px" }}>
          <h2 className="fw-bold text-dark me-2 mb-4 lh-1">Описание</h2>
          <span className="fw-light text-dark fs-3">
            Курс по CLIL предназначен для учителей, стремящихся интегрировать
            изучение иностранного языка с обучением конкретному предмету. Он
            помогает учителям разрабатывать учебные программы, где язык является
            как инструментом, так и целью обучения, способствуя более глубокому
            пониманию предмета и повышению языковой компетенции учащихся.
          </span>
        </div>
        {/* description ends */}

        {/* program course starts */}
        <CourseProgram />
        {/* program course ends */}

        {/* requirements course starts */}
        <Requirements />
        {/* requirements course ends */}
      </div>
    </>
  );
}
