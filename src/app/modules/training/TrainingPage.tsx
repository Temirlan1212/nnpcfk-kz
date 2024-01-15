import { Outlet, Route, Routes } from 'react-router-dom'
import { AddTraining } from './components/AddTraining.tsx'
import { AddTrainingAdmin } from './components/AddTrainingAdmin.tsx'
import { TrainingTable } from './components/TrainingTable.tsx'

const TrainingPage = () => (
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
				path='add-training'
				element={
					<>
						{/*<PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>*/}
						<AddTraining />
					</>
				}
			/>
			<Route
				path='table'
				element={
					<>
						{/*<PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>*/}
						<TrainingTable />
					</>
				}
			/>
			<Route
				path='add-training/admin'
				element={
					<>
						{/*<PageTitle breadcrumbs={profileBreadCrumbs}>List</PageTitle>*/}
						<AddTrainingAdmin />
					</>
				}
			/>
		</Route>
	</Routes>
)

export default TrainingPage
