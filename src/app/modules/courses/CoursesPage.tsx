import { PageLink, PageTitle } from "../../../_metronic/layout/core";
import { Routes, Route, Outlet } from "react-router-dom";
import { Courses } from "./components/courses/Courses";
import CertificateWrapper from "./components/certificate/CertificateWrapper";
import { FavoriteCourses } from "./components/favorite-courses/FavoriteCourses";
import { Testing } from "./components/testing/Testing";
import { Learning } from "./components/learning/Learning";

const profileBreadCrumbs: Array<PageLink> = [
  {
    title: "Курсы",
    path: "/crafted/pages/courses/list",
    isSeparator: false,
    isActive: false,
  },
  {
    title: "",
    path: "",
    isSeparator: true,
    isActive: false,
  },
];

const CoursesPage = () => (
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
            <PageTitle breadcrumbs={profileBreadCrumbs}>
              Список курсов
            </PageTitle>
            <Courses />
          </>
        }
      />
      <Route
        path="certificate"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>
              Реестр сертификатов
            </PageTitle>
            <CertificateWrapper />
          </>
        }
      />
      <Route
        path="favorite-courses"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>
              Избранные курсы
            </PageTitle>
            <FavoriteCourses />
          </>
        }
      />
      <Route
        path="testing"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Тестирование</PageTitle>
            <Testing />
          </>
        }
      />
      <Route
        path="learning"
        element={
          <>
            <PageTitle breadcrumbs={profileBreadCrumbs}>Обучение</PageTitle>
            <Learning />
          </>
        }
      />
    </Route>
  </Routes>
);

export default CoursesPage;
