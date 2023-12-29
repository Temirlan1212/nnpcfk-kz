import { KTSVG } from "../../../../../../_metronic/helpers";

export function CourseProgram() {
  const accordionItems = [
    {
      title: "Введение в CLIL:",
      content: [
        "Понимание принципов и методологии CLIL.",
        "Преимущества CLIL для двуязычного и многоязычного образования.",
      ],
    },
    {
      title: "Планирование урока в CLIL:",
      content: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting...",
      ],
    },
    {
      title: "Методы и стратегии преподавания в CLIL:",
      content: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting...",
      ],
    },
    {
      title: "Оценивание в CLIL:",
      content: [
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting...",
      ],
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ gap: "10px" }}>
      <h2 className="fw-bold text-dark me-2 mb-4 lh-1"> Программа курса</h2>

      <div className="accordion accordion-icon-toggle" id="kt_accordion_2">
        {accordionItems.map((item, index) => (
          <div className="mb-5" key={index}>
            <div
              className="accordion-header py-3 d-flex"
              data-bs-toggle="collapse"
              data-bs-target={`#kt_accordion_2_item_${index + 1}`}
            >
              <span className="accordion-icon">
                <KTSVG
                  className="svg-icon svg-icon-4"
                  path="media/icons/duotune/arrows/arr064.svg"
                />
              </span>
              <h3 className="fs-4 text-gray-800 fw-bold mb-0 ms-4">
                {item.title}
              </h3>
            </div>
            <div
              id={`kt_accordion_2_item_${index + 1}`}
              className="collapse fs-6 ps-10"
              data-bs-parent="#kt_accordion_2"
            >
              {item.content.map((text, index) => (
                <div className="d-flex" key={index}>
                  <div className="fw-mormal timeline-content text-muted ps-3">
                    -
                  </div>
                  <div className="fw-mormal timeline-content text-muted ps-3">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
