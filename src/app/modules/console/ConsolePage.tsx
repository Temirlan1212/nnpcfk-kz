import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ListsWidget3 } from "../../../_metronic/partials/widgets";
import { ActionReseearchCard } from "./components/ActionResearchCard";
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
          className="d-flex justify-content-between flex-wrap"
          style={{ gap: "15px" }}
        >
          <ActionReseearchCard />
          <ListsWidget3 className="card-xl-stretch w-100 w-xl-auto" />
        </div>
        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <TrainingReminder />
          <TrainingsProgressCard />
        </div>
      </div>
    </div>
  );
}
