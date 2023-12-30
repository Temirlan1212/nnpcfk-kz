import { Header } from "./Header";
import { InfoBlock1 } from "./info-block-1/InfoBlock1";
import { InfoBlock2 } from "./info-block-2/InfoBlock2";

export function Course() {
  return (
    <div className="d-flex flex-column" style={{ gap: "40px" }}>
      <Header />
      <div className="d-flex" style={{ gap: "30px" }}>
        <InfoBlock1 />
        <InfoBlock2 />
      </div>
    </div>
  );
}
