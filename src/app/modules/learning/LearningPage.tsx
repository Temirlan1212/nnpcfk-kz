import { Link } from 'react-router-dom'

const LearningPage = () => {
	return (
		<div className='app-main flex-column flex-row-fluid' id='kt_app_main'>
			<div className='d-flex flex-column flex-column-fluid'>
				<div id='kt_app_toolbar' className='app-toolbar py-3 py-lg-6'>
					<div className='page-title d-flex flex-column justify-content-center flex-wrap me-3'>
						<h1 className='page-heading d-flex text-gray-900 fw-bold fs-3 flex-column justify-content-center my-0'>
							Моё обучение
						</h1>
						<p className='text-muted text-hover-primary'>
							Список ваших текущих курсов
						</p>
					</div>
				</div>
				<div className='row'>
					<div className='col-xl-8'>
						<div className='card h-xl-100'>
							<div className='card-header position-relative py-0 border-bottom-2'>
								<ul className='nav nav-stretch nav-pills nav-pills-custom d-flex mt-3'>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_1'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Пн</span>

											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_2'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Вт</span>

											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0 show active'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_3'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Ср</span>
											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_4'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Чт</span>
											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_5'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Пт</span>
											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_6'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Сб</span>
											<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
										</a>
									</li>
									<li className='nav-item p-0 ms-0 me-16'>
										<a
											className='nav-link btn btn-color-muted px-0'
											data-bs-toggle='tab'
											href='#kt_table_widget_7_tab_content_7'
										>
											<span className='nav-text fw-semibold fs-4 mb-3'>Вс</span>
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
											9 Янв 2024- 7 Фев 2024
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
							<div className='card-body'>
								<div className='tab-content mb-2'>
									<div
										className='tab-pane fade'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_2'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_3'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_4'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_5'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_6'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<div
										className='tab-pane fade'
										id='kt_table_widget_7_tab_content_7'
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
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															08:30-09:15
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 1:
															<span className='text-gray-800'>Основы CLIL</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>45</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															09:30-10:50
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 2:
															<span className='text-gray-800'>
																Принципе CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет: <span className='text-gray-800'>12</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															10:35-11:20
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 3:
															<span className='text-gray-800'>
																Методики CLIL
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>5</span>
														</td>
													</tr>
													<tr>
														<td
															className='bg-light rounded text-gray-600 fs-8 fw-bold px-3 py-2'
															colSpan={4}
														>
															Перерыв 15 мин
														</td>
													</tr>
													<tr>
														<td className='fs-6 fw-bold text-gray-800'>
															12:40-13:25
														</td>
														<td className='fs-6 fw-bold text-gray-500'>
															Урок 4:
															<span className='text-gray-800'>
																Планирование урока
															</span>
														</td>
														<td className='fs-6 fw-bold text-gray-500 text-end'>
															Кабинет:
															<span className='text-gray-800'>19</span>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
								</div>
								<div className='float-end'>
									<a
										href='#'
										className='btn btn-xl btn-danger mt-7'
										data-bs-toggle='modal'
										data-bs-target='#kt_modal_create_app'
									>
										Смотреть всё расписание
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='col-xl-4'>
						<div className='card bg-primary h-xl-100'>
							<div className='card-body d-flex flex-column pt-13 pb-14'>
								<div className='m-0 d-flex align-items-center justify-content-center flex-column'>
									<h1 className='fw-semibold text-white text-center lh-lg mb-9'>
										Как проходит ваше обучение?
										<span className='fw-bolder'>Нужна ли вам помощь?</span>
									</h1>
									<img
										className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 mb-lg-12 '
										src={'/public/media/illustrations/easy/service.svg'}
									></img>
								</div>
								<div className='text-center'>
									<a
										className='btn btn-sm btn-success btn-color-white me-2'
										data-bs-target='#kt_modal_invite_friends'
										data-bs-toggle='modal'
									>
										У меня есть вопрос
									</a>
								</div>
							</div>
						</div>
					</div>

					<div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
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
												<span className='nav-text fw-semibold fs-4 mb-3'>
													Обзор
												</span>

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
															<span className='text-gray-900 fw-bolder fs-2x'>
																73
															</span>
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
															<span className='text-gray-900 fw-bolder fs-2x'>
																207
															</span>
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
															<span className='text-gray-900 fw-bolder fs-2x'>
																27
															</span>
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
											<div className='d-flex flex-wrap flex-md-nowrap'>
												<div className='me-md-5 w-100 h-100'>
													<img
														src='/public/media/illustrations/easy/activity-learn.svg'
														alt='chart'
													/>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

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

											<img
												src='/public/media/illustrations/easy/chart.svg'
												alt='chart'
												className='w-100 mt-14 px-4'
											/>
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
														style={{ height: '330px' }}
													></div>
												</div>
												<span className='text-gray-500 fw-bold fs-4'>73%</span>
											</div>

											<img
												src='/public/media/illustrations/easy/chart.svg'
												alt='chart'
												className='w-100 mt-14 px-4'
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='row g-5 g-xl-10'>
						<div className='col-xxl-8'>
							<div className='card h-xl-100' id='kt_timeline_widget_2_card'>
								<div className='card-header position-relative py-0 border-bottom-2'>
									<ul className='nav nav-stretch nav-pills nav-pills-custom d-flex mt-3'>
										<li className='nav-item p-0 ms-0 me-8'>
											<a
												className='nav-link btn btn-color-muted active px-0'
												data-bs-toggle='pill'
												href='#kt_timeline_widget_2_tab_1'
											>
												<span className='nav-text fw-semibold fs-4 mb-3'>
													Домашние задания
												</span>
												<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
											</a>
										</li>
										<li className='nav-item p-0 ms-0 me-8'>
											<a
												className='nav-link btn btn-color-muted px-0'
												data-bs-toggle='pill'
												href='#kt_timeline_widget_2_tab_2'
											>
												<span className='nav-text fw-semibold fs-4 mb-3'>
													Недавнее
												</span>
												<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
											</a>
										</li>
										<li className='nav-item p-0 ms-0'>
											<a
												className='nav-link btn btn-color-muted px-0'
												data-bs-toggle='pill'
												href='#kt_timeline_widget_2_tab_3'
											>
												<span className='nav-text fw-semibold fs-4 mb-3'>
													Законченные
												</span>
												<span className='bullet-custom position-absolute z-index-2 w-100 h-2px top-100 bottom-n100 bg-primary rounded'></span>
											</a>
										</li>
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Книга на стр. 77-85, задания 1-6 на стр. 85
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Рабочая тетрадь, стр. 17, задания 1-6
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Выучите параграф стр. 99, упражнение 1,2,3
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Межкультурная коммуникация в классе
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Написать эссе на тему “CLIL”
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Разработать план урока
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Обучение через игровые методы
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
													</tbody>
												</table>
											</div>
										</div>
										<div
											className='tab-pane fade'
											id='kt_timeline_widget_2_tab_2'
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Книга на стр. 77-85, задания 1-6 на стр. 85
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Рабочая тетрадь, стр. 17, задания 1-6
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Выучите параграф стр. 99, упражнение 1,2,3
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Межкультурная коммуникация в классе
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Написать эссе на тему “CLIL”
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-primary'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Разработать план урока
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Обучение через игровые методы
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-primary'
																>
																	В процессе
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
													</tbody>
												</table>
											</div>
										</div>

										<div
											className='tab-pane fade'
											id='kt_timeline_widget_2_tab_3'
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
														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Книга на стр. 77-85, задания 1-6 на стр. 85
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Курс по CLIL
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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

														<tr>
															<td>
																<span
																	data-kt-element='bullet'
																	className='bullet bullet-vertical d-flex align-items-center h-40px bg-success'
																></span>
															</td>
															<td className='ps-0'>
																<div className='form-check form-check-custom form-check-success form-check-solid'>
																	<input
																		className='form-check-input'
																		type='checkbox'
																		value=''
																		checked
																		data-kt-element='checkbox'
																	/>
																</div>
															</td>
															<td>
																<a
																	href='#'
																	className='text-gray-800 text-hover-primary fw-bold fs-6'
																>
																	Выучите параграф стр. 99, упражнение 1,2,3
																</a>
																<span className='text-gray-500 fw-bold fs-7 d-block'>
																	Межкультурная коммуникация в классе
																</span>
															</td>
															<td className='text-end'>
																<span
																	data-kt-element='status'
																	className='badge badge-light-success'
																>
																	Сделано
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
													</tbody>
												</table>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
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
									<div className='d-flex flex-stack'>
										<div className='symbol symbol-40px me-4'>
											<div className='symbol-label fs-2 fw-semibold bg-danger text-inverse-danger'>
												И
											</div>
										</div>
										<div className='d-flex align-items-center flex-row-fluid flex-wrap'>
											<div className='flex-grow-1 me-2'>
												<a
													href='pages/user-profile/overview.html'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Инновационные методики обучения
												</a>
												<span className='text-muted fw-semibold d-block fs-7'>
													40 часов
												</span>
											</div>
											<a
												href='#'
												className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px'
											>
												<i className='ki-duotone ki-arrow-right fs-2'>
													<span className='path1'></span>
													<span className='path2'></span>
												</i>
											</a>
										</div>
									</div>
									<div className='separator separator-dashed my-4'></div>
									<div className='d-flex flex-stack'>
										<div className='symbol symbol-40px me-4'>
											<div className='symbol-label fs-2 fw-semibold bg-success text-inverse-success'>
												Р
											</div>
										</div>
										<div className='d-flex align-items-center flex-row-fluid flex-wrap'>
											<div className='flex-grow-1 me-2'>
												<a
													href='pages/user-profile/overview.html'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Развитие критического мышления
												</a>
												<span className='text-muted fw-semibold d-block fs-7'>
													18 часов
												</span>
											</div>
											<a
												href='#'
												className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px'
											>
												<i className='ki-duotone ki-arrow-right fs-2'>
													<span className='path1'></span>
													<span className='path2'></span>
												</i>
											</a>
										</div>
									</div>
									<div className='separator separator-dashed my-4'></div>
									<div className='d-flex flex-stack'>
										<div className='symbol symbol-40px me-4'>
											<div className='symbol-label fs-2 fw-semibold bg-info text-inverse-info'>
												Э
											</div>
										</div>
										<div className='d-flex align-items-center flex-row-fluid flex-wrap'>
											<div className='flex-grow-1 me-2'>
												<a
													href='pages/user-profile/overview.html'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Эффективное классное управление
												</a>
												<span className='text-muted fw-semibold d-block fs-7'>
													120 часов
												</span>
											</div>
											<a
												href='#'
												className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px'
											>
												<i className='ki-duotone ki-arrow-right fs-2'>
													<span className='path1'></span>
													<span className='path2'></span>
												</i>
											</a>
										</div>
									</div>
									<div className='separator separator-dashed my-4'></div>
									<div className='d-flex flex-stack'>
										<div className='symbol symbol-40px me-4'>
											<div className='symbol-label fs-2 fw-semibold bg-primary text-inverse-primary'>
												П
											</div>
										</div>
										<div className='d-flex align-items-center flex-row-fluid flex-wrap'>
											<div className='flex-grow-1 me-2'>
												<a
													href='pages/user-profile/overview.html'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
												>
													Применение технологий в образ...
												</a>
												<span className='text-muted fw-semibold d-block fs-7'>
													50 часов
												</span>
											</div>
											<a
												href='#'
												className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px'
											>
												<i className='ki-duotone ki-arrow-right fs-2'>
													<span className='path1'></span>
													<span className='path2'></span>
												</i>
											</a>
										</div>
									</div>
									<div className='separator separator-dashed my-4'></div>
									<div className='d-flex flex-stack'>
										<div className='symbol symbol-40px me-4'>
											<div className='symbol-label fs-2 fw-semibold bg-warning text-inverse-warning'>
												M
											</div>
										</div>
										<div className='d-flex align-items-center flex-row-fluid flex-wrap'>
											<div className='flex-grow-1 me-2'>
												<a
													href='pages/user-profile/overview.html'
													className='text-gray-800 text-hover-primary fs-6 fw-bold'
													style={{ textOverflow: 'ellipsis' }}
												>
													Межкультурная коммуникация в ...
												</a>
												<span className='text-muted fw-semibold d-block fs-7'>
													24 часов
												</span>
											</div>
											<a
												href='#'
												className='btn btn-sm btn-icon btn-bg-light btn-active-color-primary w-30px h-30px'
											>
												<i className='ki-duotone ki-arrow-right fs-2'>
													<span className='path1'></span>
													<span className='path2'></span>
												</i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default LearningPage
