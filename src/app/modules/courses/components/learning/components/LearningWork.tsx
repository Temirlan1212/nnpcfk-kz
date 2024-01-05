const options = [
	{
		title: 'Книга на стр. 77-85, задания 1-6 на стр. 85',
		desc: 'Курс по CLIL',
		status: 'Сделано',
		bgColor: 'success',
	},
	{
		title: 'Рабочая тетрадь, стр. 17, задания 1-6',
		desc: 'Курс по CLIL',
		status: 'В процессе',
		bgColor: 'primary',
	},
	{
		title: 'Выучите параграф стр. 99, упражнение 1,2,3',
		desc: 'Межкультурная коммуникация в классе',
		status: 'Сделано',
		bgColor: 'success',
	},
	{
		title: 'Написать эссе на тему “CLIL”',
		desc: 'Курс по CLIL',
		status: 'В процессе',
		bgColor: 'primary',
	},
	{
		title: 'Разработать план урока',
		desc: 'Обучение через игровые методы',
		status: 'В процессе',
		bgColor: 'primary',
	},
]

const tabOptions = [
	{
		title: 'Домашние задания',
		href: '#kt_timeline_widget_2_tab_1',
	},
	{
		title: 'Недавнее',
		href: '#kt_timeline_widget_2_tab_2',
	},
	{
		title: 'Законченные',
		href: '#kt_timeline_widget_2_tab_3',
	},
]

const LearningWork = () => {
	return (
		<div className='col-xxl-8'>
			<div className='card h-xl-100' id='kt_timeline_widget_2_card'>
				<div className='card-header position-relative py-0 border-bottom-2'>
					<ul className='nav nav-stretch nav-pills nav-pills-custom d-flex mt-3'>
						{tabOptions.map(item => (
							<li className='nav-item p-0 ms-0 me-8'>
								<a
									className={`nav-link btn btn-color-muted ${
										item.href === '#kt_timeline_widget_2_tab_1' && 'active'
									} px-0`}
									data-bs-toggle='pill'
									href={item.href}
								>
									<span className='nav-text fw-semibold fs-4 mb-3'>
										{item.title}
									</span>
									<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
								</a>
							</li>
						))}
					</ul>
				</div>
				<div className='card-body'>
					<div className='tab-content'>
						<div
							className='tab-pane fade show active'
							id='kt_timeline_widget_2_tab_1'
						>
							<div className='table-responsive'>
								<table className='table align-middle gs-0 gy-4'>
									<thead>
										<tr>
											<th className='p-0 w-10px'></th>
											<th className='p-0 w-25px'></th>
											<th className='p-0 min-w-400px'></th>
											<th className='p-0 min-w-100px'></th>
											<th className='p-0 min-w-125px'></th>
										</tr>
									</thead>
									<tbody>
										{options.map(item => (
											<tr>
												<td>
													<span
														data-kt-element='bullet'
														className={`bullet bullet-vertical d-flex align-items-center h-40px bg-${item.bgColor}`}
													></span>
												</td>
												<td className='ps-0'>
													<div
														className={`form-check form-check-custom form-check-${item.bgColor} form-check-solid`}
													>
														<input
															className='form-check-input'
															type='checkbox'
															value=''
															checked={item.status === 'Сделано' ? true : false}
															data-kt-element='checkbox'
														/>
													</div>
												</td>
												<td>
													<a
														href='#'
														className='text-gray-800 text-hover-primary fw-bold fs-6'
													>
														{item.title}
													</a>
													<span className='text-gray-500 fw-bold fs-7 d-block'>
														{item.desc}
													</span>
												</td>
												<td className='text-end'>
													<span
														data-kt-element='status'
														className={`badge badge-light-${item.bgColor}`}
													>
														{item.status}
													</span>
												</td>
												<td className='text-end'>
													<div className='d-flex justify-content-end flex-shrink-0'>
														<a
															href='#'
															className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
														>
															<i className='ki-duotone ki-printer fs-3'>
																<span className='path1'></span>
																<span className='path2'></span>
																<span className='path3'></span>
																<span className='path4'></span>
																<span className='path5'></span>
															</i>
														</a>
														<a
															href='#'
															className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
														>
															<i className='ki-duotone ki-sms fs-3'>
																<span className='path1'></span>
																<span className='path2'></span>
															</i>
														</a>
														<a
															href='#'
															className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm'
														>
															<i className='ki-duotone ki-paper-clip fs-3'></i>
														</a>
													</div>
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
						<div className='tab-pane fade' id='kt_timeline_widget_2_tab_2'>
							<div className='table-responsive'>
								<table className='table align-middle gs-0 gy-4'>
									<thead>
										<tr>
											<th className='p-0 w-10px'></th>
											<th className='p-0 w-25px'></th>
											<th className='p-0 min-w-400px'></th>
											<th className='p-0 min-w-100px'></th>
											<th className='p-0 min-w-125px'></th>
										</tr>
									</thead>
									<tbody>
										{options
											.filter(option => option.status !== 'Сделано')
											.map(item => (
												<tr>
													<td>
														<span
															data-kt-element='bullet'
															className={`bullet bullet-vertical d-flex align-items-center h-40px bg-${item.bgColor}`}
														></span>
													</td>
													<td className='ps-0'>
														<div
															className={`form-check form-check-custom form-check-${item.bgColor} form-check-solid`}
														>
															<input
																className='form-check-input'
																type='checkbox'
																value=''
																checked={
																	item.status === 'Сделано' ? true : false
																}
																data-kt-element='checkbox'
															/>
														</div>
													</td>
													<td>
														<a
															href='#'
															className='text-gray-800 text-hover-primary fw-bold fs-6'
														>
															{item.title}
														</a>
														<span className='text-gray-500 fw-bold fs-7 d-block'>
															{item.desc}
														</span>
													</td>
													<td className='text-end'>
														<span
															data-kt-element='status'
															className={`badge badge-light-${item.bgColor}`}
														>
															{item.status}
														</span>
													</td>
													<td className='text-end'>
														<div className='d-flex justify-content-end flex-shrink-0'>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
															>
																<i className='ki-duotone ki-printer fs-3'>
																	<span className='path1'></span>
																	<span className='path2'></span>
																	<span className='path3'></span>
																	<span className='path4'></span>
																	<span className='path5'></span>
																</i>
															</a>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
															>
																<i className='ki-duotone ki-sms fs-3'>
																	<span className='path1'></span>
																	<span className='path2'></span>
																</i>
															</a>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm'
															>
																<i className='ki-duotone ki-paper-clip fs-3'></i>
															</a>
														</div>
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						</div>

						<div className='tab-pane fade' id='kt_timeline_widget_2_tab_3'>
							<div className='table-responsive'>
								<table className='table align-middle gs-0 gy-4'>
									<thead>
										<tr>
											<th className='p-0 w-10px'></th>
											<th className='p-0 w-25px'></th>
											<th className='p-0 min-w-400px'></th>
											<th className='p-0 min-w-100px'></th>
											<th className='p-0 min-w-125px'></th>
										</tr>
									</thead>
									<tbody>
										{options
											.filter(option => option.status === 'Сделано')
											.map(item => (
												<tr>
													<td>
														<span
															data-kt-element='bullet'
															className={`bullet bullet-vertical d-flex align-items-center h-40px bg-${item.bgColor}`}
														></span>
													</td>
													<td className='ps-0'>
														<div
															className={`form-check form-check-custom form-check-${item.bgColor} form-check-solid`}
														>
															<input
																className='form-check-input'
																type='checkbox'
																value=''
																checked={
																	item.status === 'Сделано' ? true : false
																}
																data-kt-element='checkbox'
															/>
														</div>
													</td>
													<td>
														<a
															href='#'
															className='text-gray-800 text-hover-primary fw-bold fs-6'
														>
															{item.title}
														</a>
														<span className='text-gray-500 fw-bold fs-7 d-block'>
															{item.desc}
														</span>
													</td>
													<td className='text-end'>
														<span
															data-kt-element='status'
															className={`badge badge-light-${item.bgColor}`}
														>
															{item.status}
														</span>
													</td>
													<td className='text-end'>
														<div className='d-flex justify-content-end flex-shrink-0'>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
															>
																<i className='ki-duotone ki-printer fs-3'>
																	<span className='path1'></span>
																	<span className='path2'></span>
																	<span className='path3'></span>
																	<span className='path4'></span>
																	<span className='path5'></span>
																</i>
															</a>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm me-3'
															>
																<i className='ki-duotone ki-sms fs-3'>
																	<span className='path1'></span>
																	<span className='path2'></span>
																</i>
															</a>
															<a
																href='#'
																className='btn btn-icon btn-color-muted btn-bg-light btn-active-color-primary btn-sm'
															>
																<i className='ki-duotone ki-paper-clip fs-3'></i>
															</a>
														</div>
													</td>
												</tr>
											))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearningWork
