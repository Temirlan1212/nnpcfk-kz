export function Requirements() {
  const requirements = [
    "Опыт работы в образовательной среде, желательно в качестве учителя или преподавателя.",
    "Высокий уровень владения как минимум одним иностранным языком (английский, французский, немецкий и т.д.), на уровне B2 и выше по общеевропейской системе оценки уровня языка.",
  ];

  return (
    <div
      className="d-flex flex-column px-5 py-5 rounded bg-white"
      style={{
        gap: "30px",
      }}
    >
      <div className="d-flex flex-column" style={{ gap: "10px" }}>
        <h2 className="fw-bold text-dark me-2 mb-4 lh-1">Описание</h2>

        {requirements.map((text, index) => (
          <div className="d-flex" key={index}>
            <div className="fw-mormal timeline-content text-muted ps-3">-</div>
            <div className="fw-mormal timeline-content text-muted ps-3">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
