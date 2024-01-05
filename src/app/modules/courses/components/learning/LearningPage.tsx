import LearningBanner from './components/LearningBanner'
import LearningCourses from './components/LearningCourses'
import LearningEffiency from './components/LearningEffiency'
import LearningHeader from './components/LearningHeader'
import LearningPerformance from './components/LearningPerformance'
import LearningPlan from './components/LearningPlan'
import LearningWork from './components/LearningWork'

const LearningPage = () => {
	return (
		<div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
			<div className='d-flex flex-column flex-column-fluid'>
				<LearningHeader />
				<div className='row g-5 g-xl-10'>
					<LearningPlan />
					<LearningBanner />
					<div className='row g-5 g-xl-10'>
						<LearningEffiency />
						<LearningPerformance />
					</div>
					<div className='row g-5 g-xl-10'>
						<LearningWork />
						<LearningCourses />
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearningPage
