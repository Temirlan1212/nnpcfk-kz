import { FC, Suspense, lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import CompetitionsPage from "../modules/competitions/CompetitionsPage";
import { ConsolePage } from "../modules/console/ConsolePage";
import CoursesPage from "../modules/courses/CoursesPage";
import LearningSchedule from "../modules/courses/components/learning/LearningSchedule.tsx";
import ViewReport from "../modules/inventory/ViewReport.tsx";
import ReportPageWrapper from "../modules/report/ReportWrapper.tsx";
import SubmitReport from "../modules/report/SubmitReport.tsx";
import TrainingPage from "../modules/training/TrainingPage.tsx";
import { MenuTestPage } from "../pages/MenuTestPage";
import { DashboardWrapper } from "../pages/dashboard/DashboardWrapper";
import BuilderPageWrapper from "../pages/layout-builder/BuilderPageWrapper";

const PrivateRoutes = () => {
  const ProfilePage = lazy(() => import("../modules/profile/ProfilePage"));
  const LearningPage = lazy(
    () => import("../modules/courses/components/learning/LearningPage.tsx")
  );
  const WizardsPage = lazy(() => import("../modules/wizards/WizardsPage"));
  const AccountPage = lazy(() => import("../modules/accounts/AccountPage"));
  const WidgetsPage = lazy(() => import("../modules/widgets/WidgetsPage"));
  const ChatPage = lazy(() => import("../modules/apps/chat/ChatPage"));
  const UsersPage = lazy(
    () => import("../modules/apps/user-management/UsersPage")
  );
  const InventoryPageWrapper = lazy(
    () => import("../modules/inventory/InventoryPageWrapper.tsx")
  );

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardWrapper />} />
        <Route path="builder" element={<BuilderPageWrapper />} />
        <Route path="menu-test" element={<MenuTestPage />} />
        {/* Lazy Modules */}
        <Route
          path="crafted/pages/console/*"
          element={
            <SuspensedView>
              <ConsolePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/profile/*"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/competitions/*"
          element={
            <SuspensedView>
              <CompetitionsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/courses/*"
          element={
            <SuspensedView>
              <CoursesPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/pages/wizards/*"
          element={
            <SuspensedView>
              <WizardsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/widgets/*"
          element={
            <SuspensedView>
              <WidgetsPage />
            </SuspensedView>
          }
        />
        <Route
          path="crafted/account/*"
          element={
            <SuspensedView>
              <AccountPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/chat/*"
          element={
            <SuspensedView>
              <ChatPage />
            </SuspensedView>
          }
        />
        <Route
          path="apps/user-management/*"
          element={
            <SuspensedView>
              <UsersPage />
            </SuspensedView>
          }
        />
        <Route
          path="training/*"
          element={
            <SuspensedView>
              <TrainingPage />
            </SuspensedView>
          }
        />
        <Route
          path="profile"
          element={
            <SuspensedView>
              <ProfilePage />
            </SuspensedView>
          }
        />
        <Route
          path="/crafted/pages/courses/learning"
          element={
            <SuspensedView>
              <LearningPage />
            </SuspensedView>
          }
        ></Route>
        <Route path="schedule" element={<LearningSchedule />} />
        <Route path="report" element={<ReportPageWrapper />} />
        <Route path="submit-report" element={<SubmitReport />} />
        <Route path="view-report" element={<ViewReport />} />
        <Route path="inventory" element={<InventoryPageWrapper />} />

        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export { PrivateRoutes };
