import { Link, useNavigate } from "react-router-dom";
import { KTIcon, toAbsoluteUrl } from "../../../../../_metronic/helpers";

export function Header() {
  const navigate = useNavigate();
  const back = () => navigate(-1);
  return (
    <div
      className={`card card-flush bgi-no-repeat p-5 h-100 d-flex flex-column`}
      style={{
        gap: "100px",
        backgroundSize: "cover",
        backgroundImage: `url('${toAbsoluteUrl(
          "media/stock/console/bg-1.png"
        )}')`,
      }}
    >
      <div className="card-header pt-5 cursor-pointer" onClick={back}>
        <KTIcon iconName="arrow-left" className="fs-1 text-light" />
      </div>

      <div className="card-body d-flex flex-column">
        <span className="fs-2hx fw-semibold text-white me-2 mb-4 lh-1 ls-n2">
          Курс по CLIL
        </span>
      </div>
    </div>
  );
}
