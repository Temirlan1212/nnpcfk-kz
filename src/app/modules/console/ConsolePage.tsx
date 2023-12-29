import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ActionReseearchCard } from "./components/ActionResearchCard";
import { ChartsWidget3 } from "./components/ChartsWidget3";
import { FeedsWidget6 } from "./components/FeedsWidget6";
import { ListsWidget3 } from "./components/ListsWidget3";
import { ListsWidget6 } from "./components/ListsWidget6";
import { MixedWidget2 } from "./components/MixedWidget2";
import { TrainingReminder } from "./components/TrainingReminder";
import { TrainingsProgressCard } from "./components/TrainingsProgressCard";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Узнайте, что нового в системе",
    path: "/crafted/pages/console",
    isSeparator: false,
    isActive: false,
  },
];

export function ConsolePage() {
  return (
    <div>
      <PageTitle breadcrumbs={profileBreadCrumbs}>Консоль</PageTitle>

      <div className="d-flex flex-column" style={{ gap: "30px" }}>
        <div
          className="d-flex justify-content-between flex-column flex-lg-row"
          style={{ gap: "20px" }}
        >
          <ActionReseearchCard />
          <ListsWidget3 className="card-xl-stretch w-100 w-xl-auto" />
        </div>
        <div
          className="d-flex justify-content-between flex-column flex-lg-row"
          style={{ gap: "20px" }}
        >
          <TrainingReminder />
          <TrainingsProgressCard />
        </div>

        <div
          className="d-flex justify-content-between flex-column flex-lg-row"
          style={{ gap: "20px" }}
        >
          <MixedWidget2
            className="card-xl-stretch mb-xl-8 w-100"
            chartColor="primary"
            chartHeight="150px"
            strokeColor={""}
          />
          <ChartsWidget3 className="card-xl-stretch mb-xl-8 w-100" />
        </div>

        <div
          className="d-flex justify-content-between flex-column flex-lg-row"
          style={{ gap: "20px" }}
        >
          <FeedsWidget6 className="mb-5 mb-xxl-8 w-100" />
          <ListsWidget6 className="mb-xl-8 w-100" />
        </div>
      </div>
    </div>
  );
}
