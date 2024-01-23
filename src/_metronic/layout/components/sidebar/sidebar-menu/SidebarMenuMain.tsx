// import { useIntl } from 'react-intl'
import { SidebarMenuItem } from "./SidebarMenuItem";
import { SidebarMenuItemWithSub } from "./SidebarMenuItemWithSub";

const SidebarMenuMain = () => {
  // const intl = useIntl()

  return (
    <>
      {/* <SidebarMenuItem to="/dashboard" icon="element-11" title={intl.formatMessage({ id: "MENU.DASHBOARD" })} fontIcon="bi-app-indicator" />
      <SidebarMenuItem to="/builder" icon="switch" title="Layout Builder" fontIcon="bi-layers" /> */}

      <SidebarMenuItem
        to="/crafted/pages/console"
        fontIcon="bi-archive"
        icon="element-plus"
        title="Консоль"
        hasBullet={false}
      />

      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">
            Консоль
          </span>
        </div>
      </div>

      <SidebarMenuItemWithSub
        icon="book-open"
        to="/crafted/pages/courses"
        title="Курсы"
        hasBullet={false}
      >
        <SidebarMenuItem
          to="/crafted/pages/courses/list"
          title="Список курсов"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/pages/courses/favorite-courses"
          title="Избранные курсы"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/pages/courses/certificate"
          title="Реестр сертификатов"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/pages/courses/learning"
          title="Обучение"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/crafted/pages/courses/testing"
          title="Тестирование"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to="/training"
        title="Тренировки"
        icon="icon"
        fontIcon="bi-person"
      >
        <SidebarMenuItem
          to="/training/add-training"
          title="Добавить тренировку"
          hasBullet={true}
        />
        <SidebarMenuItem
          to="/training/table"
          title="Таблица"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItemWithSub
        to="/crafted/pages/competitions"
        title="Соревнования"
        icon="ranking"
        hasBullet={false}
      >
        <SidebarMenuItem
          to="/crafted/pages/competitions/list"
          title="Список"
          hasBullet={true}
        />
      </SidebarMenuItemWithSub>

      <SidebarMenuItem
        to="/report"
        icon="chart-simple"
        title="Мои отчёты"
        fontIcon="bi-layers"
      />

      <SidebarMenuItem
        to="/inventory"
        icon="briefcase"
        title="Инвентарь"
        fontIcon="bi-layers"
      />

      <SidebarMenuItem
        to="/profile"
        icon="profile-circle"
        title="Мой Профиль"
        fontIcon="bi-layers"
      />
    </>
  );
};

export { SidebarMenuMain };
