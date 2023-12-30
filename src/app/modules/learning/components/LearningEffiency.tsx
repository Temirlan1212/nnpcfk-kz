const LearningEffiency = () => {
	return (
		<div className='col-xxl-8'>
			<div className='card h-xl-100'>
				<div className='card-header position-relative py-0 border-bottom-2'>
					<ul className='nav nav-stretch nav-pills nav-pills-custom d-flex mt-3'>
						<li className='nav-item p-0 ms-0 me-8'>
							<a
								className='nav-link btn btn-color-muted active px-0'
								data-bs-toggle='tab'
								id='kt_chart_widgets_22_tab_1'
								href='#kt_chart_widgets_22_tab_content_1'
							>
								<span className='nav-text fw-semibold fs-4 mb-3'>Обзор</span>

								<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
							</a>
						</li>

						<li className='nav-item p-0 ms-0'>
							<a
								className='nav-link btn btn-color-muted px-0'
								data-bs-toggle='tab'
								id='kt_chart_widgets_22_tab_2'
								href='#kt_chart_widgets_22_tab_content_2'
							>
								<span className='nav-text fw-semibold fs-4 mb-3'>
									Эффективность
								</span>

								<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
							</a>
						</li>
					</ul>
					<div className='card-toolbar'>
						<div
							data-kt-daterangepicker='true'
							data-kt-daterangepicker-opens='left'
							className='btn btn-sm btn-light d-flex align-items-center px-4'
						>
							<div className='text-gray-600 fw-bold'>
								9 Янв 2023 - 7 Фев 2023
							</div>
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
				<div className='card-body pb-3'>
					<div className='tab-content'>
						<div
							className='tab-pane fade show active'
							id='kt_chart_widgets_22_tab_content_1'
						>
							<div className='d-flex flex-wrap flex-md-nowrap'>
								<div className='me-md-5 w-100'>
									<div className='d-flex border border-gray-300 border-dashed rounded p-6 mb-6'>
										<div className='d-flex align-items-center flex-grow-1 me-2 me-sm-5'>
											<div className='symbol symbol-50px me-4'>
												<span className='symbol-label'>
													<i className='ki-duotone ki-timer fs-2qx text-primary'>
														<span className='path1'></span>
														<span className='path2'></span>
														<span className='path3'></span>
													</i>
												</span>
											</div>
											<div className='me-2'>
												<a
													href='#'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Посещаемость
												</a>
												<span className='text-gray-500 fw-bold d-block fs-7'>
													Вы посетили почти все занятия! Так держать!
												</span>
											</div>
										</div>

										<div className='d-flex align-items-center'>
											<span className='text-gray-900 fw-bolder fs-2x'>73</span>
											<span className='fw-semibold fs-2 text-gray-600 mx-1 pt-1'>
												/
											</span>
											<span className='text-gray-600 fw-semibold fs-2 me-3 pt-2'>
												76
											</span>
											<span className='badge badge-lg badge-light-success align-self-center px-2'>
												95%
											</span>
										</div>
									</div>

									<div className='d-flex border border-gray-300 border-dashed rounded p-6 mb-6'>
										<div className='d-flex align-items-center flex-grow-1 me-2 me-sm-5'>
											<div className='symbol symbol-50px me-4'>
												<span className='symbol-label'>
													<i className='ki-duotone ki-element-11 fs-2qx text-primary'>
														<span className='path1'></span>
														<span className='path2'></span>
														<span className='path3'></span>
														<span className='path4'></span>
													</i>
												</span>
											</div>
											<div className='me-2'>
												<a
													href='#'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Домашнее задание
												</a>
												<span className='text-gray-500 fw-bold d-block fs-7'>
													Не забудьте вовремя выполнять домашнее задание
												</span>
											</div>
										</div>

										<div className='d-flex align-items-center'>
											<span className='text-gray-900 fw-bolder fs-2x'>207</span>
											<span className='fw-semibold fs-2 text-gray-600 mx-1 pt-1'>
												/
											</span>
											<span className='text-gray-600 fw-semibold fs-2 me-3 pt-2'>
												214
											</span>
											<span className='badge badge-lg badge-light-success align-self-center px-2'>
												92%
											</span>
										</div>
									</div>

									<div className='d-flex border border-gray-300 border-dashed rounded p-6 mb-6'>
										<div className='d-flex align-items-center flex-grow-1 me-2 me-sm-5'>
											<div className='symbol symbol-50px me-4'>
												<span className='symbol-label'>
													<i className='ki-duotone ki-abstract-24 fs-2qx text-primary'>
														<span className='path1'></span>
														<span className='path2'></span>
													</i>
												</span>
											</div>
											<div className='me-2'>
												<a
													href='#'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Пробные тесты
												</a>
												<span className='text-gray-500 fw-bold d-block fs-7'>
													Вы прошли 5 пробных тестирования за 7 дней
												</span>
											</div>
										</div>

										<div className='d-flex align-items-center'>
											<span className='text-gray-900 fw-bolder fs-2x'>27</span>
											<span className='fw-semibold fs-2 text-gray-600 mx-1 pt-1'>
												/
											</span>
											<span className='text-gray-600 fw-semibold fs-2 me-3 pt-2'>
												38
											</span>
											<span className='badge badge-lg badge-light-warning align-self-center px-2'>
												80%
											</span>
										</div>
									</div>
								</div>
								<div className='d-flex justify-content-between align-items-center gap-3 flex-column w-225px w-md-600px mx-auto mx-md-0 pt-3 pb-10'>
									<div className='fs-4 fw-bold text-gray-900 text-center mb-5'>
										Ваша посещаемость уроков
									</div>

									<img
										src='/public/media/illustrations/easy/donut-chart.svg'
										alt='donut-chart'
										width={250}
										height={250}
									/>

									<div className='mx-auto'>
										<div className='d-flex align-items-center mb-2'>
											<div className='bullet bullet-dot w-8px h-7px bg-success me-2'></div>

											<div className='fs-8 fw-semibold text-muted'>
												Присутствовал(133)
											</div>
										</div>

										<div className='d-flex align-items-center mb-2'>
											<div className='bullet bullet-dot w-8px h-7px bg-primary me-2'></div>

											<div className='fs-8 fw-semibold text-muted'>
												Отпросился (9)
											</div>
										</div>

										<div className='d-flex align-items-center mb-2'>
											<div className='bullet bullet-dot w-8px h-7px bg-info me-2'></div>

											<div className='fs-8 fw-semibold text-muted'>
												Опоздал(2)
											</div>
										</div>

										<div className='d-flex align-items-center mb-2'>
											<div className='bullet bullet-dot w-8px h-7px bg-danger me-2'></div>

											<div className='fs-8 fw-semibold text-muted'>
												Отсутствовал(3)
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div
							className='tab-pane fade'
							id='kt_chart_widgets_22_tab_content_2'
						>
							<div className='me-md-5 w-100 h-100 d-flex flex-wrap justify-content-center flex-md-nowrap'>
								<img
									src='/media/illustrations/easy/activity-learn.svg'
									alt='chart'
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearningEffiency
