import { Outlet, Route, Routes } from 'react-router-dom'
import { PageLink, PageTitle } from '../../../_metronic/layout/core'
import CertificateWrapper from './components/certificate/CertificateWrapper'
import { Course } from './components/course/Course'
import { Courses } from './components/courses/Courses'
import { FavoriteCourses } from './components/favorite-courses/FavoriteCourses'
import LearningPage from './components/learning/LearningPage'
import { Testing } from './components/testing/Testing'

const profileBreadCrumbs: Array<PageLink> = [
	{
		title: 'Курсы',
		path: '/crafted/pages/courses/list',
		isSeparator: false,
		isActive: false,
	},
	{
		title: '',
		path: '',
		isSeparator: true,
		isActive: false,
	},
]

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
				path='list'
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
				path='/list/:id'
				element={
					<>
						<PageTitle breadcrumbs={profileBreadCrumbs}>Курс</PageTitle>
						<Course />
					</>
				}
			/>
			<Route
				path='certificate'
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
				path='favorite-courses'
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
				path='testing'
				element={
					<>
						<PageTitle breadcrumbs={profileBreadCrumbs}>Тестирование</PageTitle>
						<Testing />
					</>
				}
			/>
			<Route
				path='learning'
				element={
					<>
						<PageTitle breadcrumbs={profileBreadCrumbs}>Обучение</PageTitle>
						<LearningPage />
					</>
				}
			/>
		</Route>
	</Routes>
)

export default CoursesPage
