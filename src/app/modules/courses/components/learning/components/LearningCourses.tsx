import { Link } from 'react-router-dom'

const options = [
	{
		title: 'Инновационные методики обучения',
		courseAmount: '40 часов',
		imgPath: '',
		bgColor: 'danger',
	},
	{
		title: 'Развитие критического мышления',
		courseAmount: '18 часов',
		imgPath: '',
		bgColor: 'success',
	},
	{
		title: 'Эффективное классное управление',
		courseAmount: '120 часов',
		imgPath: '',
		bgColor: 'info',
	},
	{
		title: 'Применение технологий в образовании',
		courseAmount: '50 часов',
		imgPath: '',
		bgColor: 'primary',
	},
	{
		title: 'Межкультурная коммуникация в классе',
		courseAmount: '24 часов',
		imgPath: '',
		bgColor: 'warning',
	},
]

const LearningCourses = () => {
	return (
		<div className='col-xxl-4'>
			<div className='card h-xl-100'>
				<div className='card-header border-0 pt-5'>
					<h3 className='card-title align-items-start flex-column'>
						<span className='card-label fw-bold text-gray-900'>
							Курсы для вс
						</span>
						<span className='text-muted mt-1 fw-semibold fs-7'>
							Вам будет интересно
						</span>
					</h3>
					<div className='card-toolbar'>
						<Link
							to={'/crafted/pages/courses/list'}
							className='btn btn-sm btn-light'
						>
							Все курсы
						</Link>
					</div>
				</div>
				<div className='card-body pt-6'>
					{options.map(item => (
						<>
							<div className='d-flex flex-stack'>
								<div className='symbol symbol-40px me-4'>
									<div
										className={`symbol-label fs-2 fw-semibold bg-${item.bgColor} text-inverse-${item.bgColor}`}
									>
										{item.imgPath ? (
											<img src={item.imgPath} alt={item.title} />
										) : (
											item.title[0]
										)}
									</div>
								</div>
								<div className='d-flex align-items-center flex-row-fluid flex-nowrap '>
									<div className='flex-grow-1 me-2 w-100 w-xl-50 w-xxl-75'>
										<a
											href='pages/user-profile/overview.html'
											className='text-gray-800 text-hover-primary fs-6 fw-bold d-inline-block text-truncate w-100 w-xl-50 w-xxl-75'
										>
											{item.title}
										</a>
										<span className='text-muted fw-semibold d-block fs-7 '>
											{item.courseAmount}
										</span>
									</div>
									<a
										href='#'
										className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px '
									>
										<i className='ki-duotone ki-arrow-right fs-2'>
											<span className='path1'></span>
											<span className='path2'></span>
										</i>
									</a>
								</div>
							</div>
							{options[options.length - 1] && (
								<div className='separator separator-dashed my-4'></div>
							)}
						</>
					))}
				</div>
			</div>
		</div>
	)
}

export default LearningCourses
