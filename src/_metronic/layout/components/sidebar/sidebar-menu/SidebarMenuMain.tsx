// import { useIntl } from 'react-intl'
import { SidebarMenuItem } from './SidebarMenuItem'
import { SidebarMenuItemWithSub } from './SidebarMenuItemWithSub'

const SidebarMenuMain = () => {
	// const intl = useIntl()

	return (
		<>
			{/* <SidebarMenuItem to="/dashboard" icon="element-11" title={intl.formatMessage({ id: "MENU.DASHBOARD" })} fontIcon="bi-app-indicator" />
      <SidebarMenuItem to="/builder" icon="switch" title="Layout Builder" fontIcon="bi-layers" /> */}

			<SidebarMenuItem
				to='/crafted/pages/console'
				fontIcon='bi-archive'
				icon='element-plus'
				title='Консоль'
				hasBullet={false}
			/>

			<div className='menu-item'>
				<div className='menu-content pt-8 pb-2'>
					<span className='menu-section text-muted text-uppercase fs-8 ls-1'>
						Консоль
					</span>
				</div>
			</div>

			<SidebarMenuItemWithSub
				to='/crafted/pages/courses'
				title='Курсы'
				hasBullet={false}
			>
				<SidebarMenuItem
					to='/crafted/pages/courses/list'
					title='Список курсов'
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
			<SidebarMenuItem
				to='/report'
				icon='chart-simple'
				title='Мои отчёты'
				fontIcon='bi-layers'
			/>
			<SidebarMenuItem
				to='/inventory'
				icon='briefcase'
				title='Инвентарь'
				fontIcon='bi-layers'
			/>

			<SidebarMenuItemWithSub
				to='/crafted/pages/courses'
				title='Курсы'
				hasBullet={false}
			>
				<SidebarMenuItem
					to='/crafted/pages/courses/list'
					title='Список курсов'
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
			<SidebarMenuItemWithSub
				to='/training'
				title='Тренировки'
				icon='icon'
				fontIcon='bi-person'
			>
				<SidebarMenuItem
					to='/training/add-training'
					title='Добавить тренировку'
					hasBullet={true}
				/>
				<SidebarMenuItem
					to='/training/table'
					title='Таблица'
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
			<SidebarMenuItemWithSub
				to='/crafted/pages/competitions'
				title='Соревнования'
				hasBullet={false}
			>
				<SidebarMenuItem
					to='/crafted/pages/competitions/list'
					title='Список'
					hasBullet={true}
				/>
			</SidebarMenuItemWithSub>
			<SidebarMenuItem
				to='certificate'
				icon='briefcase'
				title='Сертификаты'
				fontIcon='bi-layers'
			/>
			<SidebarMenuItem
				to='/profile'
				icon='profile-circle'
				title='Мой Профиль'
				fontIcon='bi-layers'
			/>
			{/* <SidebarMenuItemWithSub to="/crafted/pages/wizards" title="Wizards" hasBullet={true}>
          <SidebarMenuItem to="/crafted/pages/wizards/horizontal" title="Horizontal" hasBullet={true} />
          <SidebarMenuItem to="/crafted/pages/wizards/vertical" title="Vertical" hasBullet={true} />
        </SidebarMenuItemWithSub> */}
			{/* <SidebarMenuItemWithSub to="/crafted/accounts" title="Accounts" icon="profile-circle" fontIcon="bi-person">
        <SidebarMenuItem to="/crafted/account/overview" title="Overview" hasBullet={true} />
        <SidebarMenuItem to="/crafted/account/settings" title="Settings" hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to="/error" title="Errors" fontIcon="bi-sticky" icon="cross-circle">
        <SidebarMenuItem to="/error/404" title="Error 404" hasBullet={true} />
        <SidebarMenuItem to="/error/500" title="Error 500" hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItemWithSub to="/crafted/widgets" title="Widgets" icon="element-7" fontIcon="bi-layers">
        <SidebarMenuItem to="/crafted/widgets/lists" title="Lists" hasBullet={true} />
        <SidebarMenuItem to="/crafted/widgets/statistics" title="Statistics" hasBullet={true} />
        <SidebarMenuItem to="/crafted/widgets/charts" title="Charts" hasBullet={true} />
        <SidebarMenuItem to="/crafted/widgets/mixed" title="Mixed" hasBullet={true} />
        <SidebarMenuItem to="/crafted/widgets/tables" title="Tables" hasBullet={true} />
        <SidebarMenuItem to="/crafted/widgets/feeds" title="Feeds" hasBullet={true} />
      </SidebarMenuItemWithSub>
      <div className="menu-item">
        <div className="menu-content pt-8 pb-2">
          <span className="menu-section text-muted text-uppercase fs-8 ls-1">Apps</span>
        </div>
      </div> */}
			{/* <SidebarMenuItemWithSub to="/apps/chat" title="Chat" fontIcon="bi-chat-left" icon="message-text-2">
        <SidebarMenuItem to="/apps/chat/private-chat" title="Private Chat" hasBullet={true} />
        <SidebarMenuItem to="/apps/chat/group-chat" title="Group Chart" hasBullet={true} />
        <SidebarMenuItem to="/apps/chat/drawer-chat" title="Drawer Chart" hasBullet={true} />
      </SidebarMenuItemWithSub>
      <SidebarMenuItem to="/apps/user-management/users" icon="abstract-28" title="User management" fontIcon="bi-layers" /> */}
		</>
	)
}

export { SidebarMenuMain }
