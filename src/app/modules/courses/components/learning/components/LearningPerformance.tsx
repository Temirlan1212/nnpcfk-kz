import { LineChart } from './chart/LineChart'

const LearningPerformance = () => {
	return (
		<div className='col-xxl-4'>
			<div
				id='kt_sliders_widget_3_slider'
				className='card card-flush carousel slide h-xl-100'
				data-bs-ride='carousel'
				data-bs-interval='5000'
			>
				<div className='card-header pt-5 mb-5'>
					<h3 className='card-title align-items-start flex-column'>
						<span className='card-label fw-bold text-gray-900'>
							Ваша успеваемость
						</span>
						<span className='text-gray-500 mt-1 fw-semibold fs-7'>
							Вы сдали 72% ваших заданий
						</span>
					</h3>

					<div className='card-toolbar'>
						<div className='d-flex justify-content-end'>
							<a
								href='#kt_sliders_widget_3_slider'
								className='carousel-control-prev position-relative me-5 active'
								role='button'
								data-bs-slide='prev'
							>
								<i className='ki-duotone ki-left-square fs-2x text-gray-500'>
									<span className='path1'></span>
									<span className='path2'></span>
								</i>
							</a>
							<a
								href='#kt_sliders_widget_3_slider'
								className='carousel-control-next position-relative me-1'
								role='button'
								data-bs-slide='next'
							>
								<i className='ki-duotone ki-right-square fs-2x text-gray-500'>
									<span className='path1'></span>
									<span className='path2'></span>
								</i>
							</a>
						</div>
					</div>
				</div>
				<div className='card-body p-0'>
					<div className='carousel-inner'>
						<div className='carousel-item active show'>
							<span className='text-gray-800 fw-bold fs-4 mb-3 px-8'>
								Курс по CLIL
							</span>

							<div className='d-flex align-items-center w-100 px-8'>
								<span className='fs-2qx text-gray-800 fw-bold'>6</span>

								<div className='progress h-6px w-100 mx-3 bg-light-primary'>
									<div
										className='progress-bar bg-primary'
										role='progressbar'
										style={{ width: '62%' }}
									></div>
								</div>
								<span className='text-gray-500 fw-bold fs-4'>62%</span>
							</div>

							<LineChart className='' />
						</div>
						<div className='carousel-item'>
							<span className='text-gray-800 fw-bold fs-4 mb-3 px-8'>
								Домашние задания
							</span>
							<div className='d-flex align-items-center w-100 px-8'>
								<span className='fs-2qx text-gray-800 fw-bold'>4</span>
								<div className='progress h-6px w-100 mx-3 bg-light-danger'>
									<div
										className='progress-bar bg-danger'
										role='progressbar'
										style={{ width: '73%' }}
									></div>
								</div>
								<span className='text-gray-500 fw-bold fs-4'>73%</span>
							</div>

							<img
								src='/public/media/illustrations/easy/chart.svg'
								alt='chart'
								className='w-100 mt-10 px-10'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearningPerformance
