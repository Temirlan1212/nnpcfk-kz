import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Routes, Route, Outlet } from "react-router-dom";
import { Competitions } from "./components/Competitions";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Таблица всех доступных соревнований",
    path: "/crafted/pages/profile/overview",
    isSeparator: false,
    isActive: false,
  },
];

const CompetitionsPage = () => (
  <Routes>
    <Route
      element={
        <>
          <></>
          <Outlet />
        </>
      }
    >
      <Route
        path="list"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Соревнования</PageTitle>
            <Competitions />
          </>
        }
      />
    </Route>
  </Routes>
);

export default CompetitionsPage;
