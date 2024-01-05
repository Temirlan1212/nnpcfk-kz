import { Link } from 'react-router-dom'

const options = [
	{
		title: 'Основы CLIL',
		time: '08:30-09:15',
		shortTime: 'Перерыв 15 мин',
		cabinet: '45',
	},
	{
		title: 'Принципе CLIL',
		time: '09:30-10:50',
		shortTime: 'Перерыв 15 мин',
		cabinet: '12',
	},
	{
		title: 'Методики CLIL',
		time: '10:35-11:20',
		shortTime: 'Перерыв 15 мин',
		cabinet: '5',
	},
	{
		title: 'Планирование урока',
		time: '12:40-13:25',
		cabinet: '19',
	},
]

const LearningSchedule = () => {
	return (
		<>
			<div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
				<h1 className='page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0'>
					Расписание
				</h1>
				<p className='text-muted text-hover-primary'>Ваше расписание занятий</p>
			</div>
			<div className='card h-xl-100'>
				<div className='card-header position-relative py-0 border-bottom-2'>
					<div className='card-toolbar gap-5'>
						С
						<div
							data-kt-daterangepicker='true'
							data-kt-daterangepicker-opens='left'
							className='btn btn-sm btn-light d-flex align-items-center px-4'
						>
							<div className='text-gray-600 fw-bold'>9 Янв 2024</div>
							<i className='ki-duotone ki-calendar-8 fs-1 ms-2 me-0'>
								<span className='path1'></span>
								<span className='path2'></span>
								<span className='path3'></span>
								<span className='path4'></span>
								<span className='path5'></span>
								<span className='path6'></span>
							</i>
						</div>
						До
						<div
							data-kt-daterangepicker='true'
							data-kt-daterangepicker-opens='left'
							className='btn btn-sm btn-light d-flex align-items-center px-4'
						>
							<div className='text-gray-600 fw-bold'>18 Янв 2024</div>
							<i className='ki-duotone ki-calendar-8 fs-1 ms-2 me-0'>
								<span className='path1'></span>
								<span className='path2'></span>
								<span className='path3'></span>
								<span className='path4'></span>
								<span className='path5'></span>
								<span className='path6'></span>
							</i>
						</div>
					</div>
				</div>
				<div className='card-body'>
					<div className='tab-content mb-2'>
						<div
							className='tab-pane fade show active'
							id='kt_table_widget_7_tab_content_1'
						>
							<div className='table-responsive'>
								<table className='table align-middle'>
									<thead>
										<tr>
											<th className='min-w-150px p-0'></th>
											<th className='min-w-200px p-0'></th>
											<th className='min-w-100px p-0'></th>
										</tr>
									</thead>
									<tbody>
										{options.map((item, i) => (
											<>
												<tr>
													<td className='fs-6 fw-bold text-gray-800'>
														{item.time}
													</td>
													<td className='fs-6 fw-bold text-gray-500'>
														Урок {i + 1}:
														<span className='text-gray-800'>{item.title}</span>
													</td>
													<td className='fs-6 fw-bold text-gray-500 text-end'>
														Кабинет:
														<span className='text-gray-800'>
															{item.cabinet}
														</span>
													</td>
												</tr>
												{item.shortTime && (
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															{item.shortTime}
														</td>
													</tr>
												)}
											</>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
					<div className='float-end'>
						<Link to='/schedule' className='btn btn-xl btn-danger mt-7'>
							Смотреть всё расписание
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default LearningSchedule
