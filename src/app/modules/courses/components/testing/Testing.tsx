import { Courses } from "../courses/Courses";
import { PassTest } from "./components/pass-test/PassTest";
import { ProgressStatistic } from "./components/progress-block/ProgressStatistic";

export function Testing() {
  return (
    <div className="d-flex flex-column" style={{ gap: 20 }}>
      <div className="d-flex flex-column flex-lg-row" style={{ gap: 20 }}>
        <ProgressStatistic />
        <PassTest />
      </div>
      <Courses />
    </div>
  );
}
