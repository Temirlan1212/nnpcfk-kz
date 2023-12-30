import { KTSVG } from "../../../../../../_metronic/helpers";

export function CourseProgram() {
  const accordionItems = [
    {
      title: "В этом курсе вы научитесь",
      content: [
        "Введение в CLIL",
        "Планирование Урока в CLIL",
        "Методы и Стратегии Преподавания в CLIL",
        "Оценка в CLIL",
      ],
    },
    {
      title: "Формат курса",
      content: [
        "Онлайн",
        "Старт: 25 сентября 2023",
        "25 часов обучения",
        "Категория: Среднее образование",
        "Язык: Казахский",
      ],
    },
  ];

  return (
    <div className="d-flex flex-column" style={{ gap: "10px" }}>
      <div className="accordion accordion-icon-toggle" id="kt_accordion_2">
        {accordionItems.map((item, index) => (
          <div className="mb-5" key={index}>
            <div
              className="accordion-header py-3 d-flex"
              data-bs-toggle="collapse"
              data-bs-target={`#kt_accordion_3_item_${index + 1}`}
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
              id={`kt_accordion_3_item_${index + 1}`}
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

        <a href="#" className="btn btn-light-primary">
          Записаться
        </a>
      </div>
    </div>
  );
}
