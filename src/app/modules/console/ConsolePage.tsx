import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { ActionReseearchCard } from "./components/ActionResearchCard";

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

      <ActionReseearchCard />
    </div>
  );
}
