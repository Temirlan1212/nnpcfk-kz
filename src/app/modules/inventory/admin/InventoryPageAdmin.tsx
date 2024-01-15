import { FC } from 'react'
import { KTIcon } from '../../../../_metronic/helpers'

interface Props {
	isEdit: boolean
}

const InventoryPageAdmin: FC<Props> = ({ isEdit }) => {
	return (
		<div className='card mb-5 mb-xl-10'>
			<div
				className='card-header border-0 cursor-pointer'
				role='button'
				data-bs-toggle='collapse'
				data-bs-target='#kt_account_profile_details'
				aria-expanded='true'
				aria-controls='kt_account_profile_details'
			>
				<div className='card-title m-0'>
					<h3 className='fw-bolder m-0'>Сдать отчёт</h3>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Паспорт школы</h3>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							БИН
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='111111111111'
								name='bin'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Наименование школы
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								name='bin'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Проектная мощность
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='1000'
								name='bin'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Фактическое количество учащихся
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='671'
								name='bin'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6'>
							<span className='required'>Тип</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								className='form-select form-select-solid form-select-lg'
								name='type'
								disabled={!isEdit}
							>
								<option value=''>Основная</option>
								<option value='1'>Малогабаритная</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Спортивный зал</h3>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6'>
							<span className='required'>Тип</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								className='form-select form-select-solid form-select-lg'
								name='type'
								disabled={!isEdit}
							>
								<option value=''>Стандартный</option>
								<option value='1'>Приспособленный</option>
							</select>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Площадь, кв.м.{' '}
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='45,3'
								name='area'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6 align-items-center required d-flex gap-2'>
							Пропускная способность
							<KTIcon iconName='information-5' className='fs-2' />
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								name='50'
								disabled={!isEdit}
							/>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Тренажерный зал</h3>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6 align-items-center d-flex gap-2'>
							Количество <KTIcon iconName='information-5' className='fs-2' />
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='1'
								name='area'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Площадь, кв.м.
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								name='26,3'
								disabled={!isEdit}
							/>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Бассейн</h3>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6 align-items-center d-flex gap-2'>
							Дорожка, м<KTIcon iconName='information-5' className='fs-2' />
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='10'
								name='area'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Площадь, кв.м.
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								name='20,5'
								disabled={!isEdit}
							/>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Легко атлетическое ядро</h3>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Дорожка, м
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='10'
								name='area'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-bold fs-6'>
							Площадь, кв.м.
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								name='20,5'
								disabled={!isEdit}
							/>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-bold fs-6'>
							<span className='required'>Покрытие</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								className='form-select form-select-solid form-select-lg'
								name='type'
								disabled={!isEdit}
							>
								<option value=''>Резиновое</option>
							</select>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<div className='mb-6'>
						<h3 className='fw-bolder fs-5 m-0 mb-5'>Спортивные площадки</h3>
						<div className='row mb-6'>
							<div className='col-lg-2'>
								<p className='fw-bolder fs-5 m-0 mb-5'>1</p>
							</div>
							<div className='col-lg-5'>
								<label className='col-lg-8 col-form-label required fw-bold fs-6'>
									Тип площадки
								</label>
								<div className='col-lg-12 fv-row'>
									<input
										type='text'
										className='form-control form-control-lg form-control-solid'
										placeholder='10'
										name='area'
										disabled={!isEdit}
									/>
								</div>
							</div>
							<div className='col-lg-5'>
								<label className='col-lg-8 col-form-label required fw-bold fs-6'>
									Размер
								</label>
								<div className='col-lg-12 fv-row'>
									<select
										className='form-select form-select-solid form-select-lg'
										name='type'
										disabled={!isEdit}
									>
										<option value=''>50,2</option>
										<option value='1'>48,4</option>
										<option value='2'>40,8</option>
									</select>
								</div>
							</div>
						</div>
						<div className='row mb-6'>
							<div className='col-lg-2'>
								<p className='fw-bolder fs-5 m-0 mb-5'>2</p>
							</div>
							<div className='col-lg-5'>
								<label className='col-lg-8 col-form-label required fw-bold fs-6'>
									Размер
								</label>
								<div className='col-lg-12 fv-row'>
									<input
										type='text'
										className='form-control form-control-lg form-control-solid'
										placeholder='10'
										name='area'
										disabled={!isEdit}
									/>
								</div>
							</div>
							<div className='col-lg-5'>
								<label className='col-lg-8 col-form-label required fw-bold fs-6'>
									Тип площадки
								</label>
								<div className='col-lg-12 fv-row'>
									<select
										className='form-select form-select-solid form-select-lg'
										name='type'
										disabled={!isEdit}
									>
										<option value=''>50,2</option>
										<option value='1'>48,4</option>
										<option value='2'>40,8</option>
									</select>
								</div>
							</div>
						</div>
						<button
							type='submit'
							className='btn btn-secondary mt-3'
							disabled={!isEdit}
						>
							Добавить площадку
						</button>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<div className='d-flex justify-content-between align-items-center mb-2'>
						<h3 className='fw-bolder fs-5 m-0 mb-5'>Преподаватели школы</h3>
						<div className='d-flex gap-4 align-items-center'>
							<button
								type='button'
								className='btn btn-light btn-sm'
								style={{ height: '43.59px' }}
								disabled={!isEdit}
							>
								Экспорт из Excel
							</button>
							<button
								type='button'
								className='btn btn-primary btn-sm'
								style={{ height: '43.59px' }}
								disabled={!isEdit}
							>
								Добавить преподавателя
							</button>
						</div>
					</div>

					<div className='card mb-5 mb-xl-8'>
						<div
							className='d-flex justify-content-between align-items-center flex-wrap mb-2'
							style={{
								minHeight: '70px',
								padding: '0 2.25rem',
							}}
						>
							<div className='d-flex'>
								<h3 className='card-title align-items-start flex-column'>
									<span className='card-label fw-bold fs-3 mb-1'>
										Преподаватели школы
									</span>
								</h3>
							</div>

							<div className='d-flex gap-4 align-items-center'>
								{/*<button type="button" className="btn btn-secondary btn-sm"*/}
								{/*        style={{height: '43.59px'}}>Экспорт из Excel*/}
								{/*</button>*/}

								<div className='d-flex align-items-center position-relative my-1'>
									<i className='ki-duotone ki-magnifier fs-1 position-absolute ms-6'>
										<span className='path1'></span>
										<span className='path2'></span>
									</i>
									<input
										type='text'
										data-kt-user-table-filter='search'
										className='form-control form-control-fluid w-350px ps-16'
										placeholder='Добавить преподавателя'
										value=''
										disabled={!isEdit}
									/>
									<div
										className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
										data-kt-menu='true'
									>
										<div className='menu-item px-3'>
											<a href='#' className='menu-link px-3'>
												Изменить
											</a>
										</div>
										<div className='menu-item px-3'>
											<a href='#' className='menu-link px-3'>
												Удалить
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='card-body py-3'>
							<div className='table-responsive'>
								<table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
									<thead>
										<tr className='fw-bold text-muted'>
											<th>ФИО</th>
											<th>Телефон</th>
											<th>Email</th>
											<th>Основной предмет</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Айдар Нурмагамбетов
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													+7 777 777 7778
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													a.amangeldievich@center.nnpcfk.kz
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Физика</div>
											</td>
											<td>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Айдар Нурмагамбетов
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													+7 777 777 7778
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													a.amangeldievich@center.nnpcfk.kz
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Физика</div>
											</td>
											<td>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Айдар Нурмагамбетов
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													+7 777 777 7778
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													a.amangeldievich@center.nnpcfk.kz
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Физика</div>
											</td>
											<td>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Айдар Нурмагамбетов
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													+7 777 777 7778
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													a.amangeldievich@center.nnpcfk.kz
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Физика</div>
											</td>
											<td>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Айдар Нурмагамбетов
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													+7 777 777 7778
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													a.amangeldievich@center.nnpcfk.kz
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Физика</div>
											</td>
											<td>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<div className='d-flex flex-stack flex-wrap pt-10 justify-content-end'>
									<ul className='pagination'>
										<li className='page-item previous'>
											<a href='#' className='page-link'>
												<i className='previous'></i>
											</a>
										</li>
										<li className='page-item active'>
											<a href='#' className='page-link'>
												1
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												2
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												3
											</a>
										</li>
										<li className='page-item next'>
											<a href='#' className='page-link'>
												<i className='next'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Спортивные секции</h3>
					<div className='card mb-5 mb-xl-8'>
						<div
							className='d-flex justify-content-between align-items-center flex-wrap mb-2'
							style={{
								minHeight: '70px',
								padding: '0 2.25rem',
							}}
						>
							<div className='d-flex'>
								<h3 className='card-title align-items-start flex-column'>
									<span className='card-label fw-bold fs-3 mb-1'>
										Секции школы
									</span>
								</h3>
							</div>
							<div className='d-flex gap-4 align-items-center'>
								<button
									type='button'
									className='btn btn-light btn-sm'
									style={{ height: '43.59px' }}
									disabled={!isEdit}
								>
									Экспорт из Excel
								</button>
								<button
									type='button'
									className='btn btn-primary btn-sm'
									style={{ height: '43.59px' }}
									disabled={!isEdit}
								>
									Добавить секцию
								</button>
							</div>
						</div>
						<div className='card-body py-3'>
							<div className='table-responsive'>
								<table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
									<thead>
										<tr className='fw-bold text-muted'>
											<th>Наименование</th>
											<th>Количество</th>
											<th>Вид секции</th>
											<th>Учащиеся, с ООП</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Футбол</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>21</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>ДЮШС</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>0</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Баскетбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>12</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Дворовой клуб
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>1</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Баскетбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>12</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Дворовой клуб
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>1</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Баскетбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>12</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Дворовой клуб
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>1</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Баскетбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>12</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Дворовой клуб
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>1</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<div className='d-flex flex-stack flex-wrap pt-10 justify-content-end'>
									<ul className='pagination'>
										<li className='page-item previous'>
											<a href='#' className='page-link'>
												<i className='previous'></i>
											</a>
										</li>
										<li className='page-item active'>
											<a href='#' className='page-link'>
												1
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												2
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												3
											</a>
										</li>
										<li className='page-item next'>
											<a href='#' className='page-link'>
												<i className='next'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<div className='mb-6'>
						<h3 className='fw-bolder fs-5 m-0 mb-5'>Спортивные площадки</h3>
						<div className='row mb-6'>
							<div className='col-lg-1'>
								<p className='fw-bolder fs-5 m-0 mb-5'>1</p>
							</div>
							<div className='col-lg-11 row'>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Вид спорта
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='Футбол'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Класс
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='10'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Количество
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='10'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Победители
									</label>
									<div className='col-lg-12 fv-row'>
										<input
											type='text'
											className='form-control form-control-lg form-control-solid'
											placeholder='Грозные лисы'
											name='area'
											disabled={!isEdit}
										/>
									</div>
								</div>
							</div>
						</div>
						<div className='row mb-6'>
							<div className='col-lg-1'>
								<p className='fw-bolder fs-5 m-0 mb-5'>1</p>
							</div>
							<div className='col-lg-11 row'>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Вид спорта
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='Футбол'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Класс
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='10'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Количество
									</label>
									<div className='col-lg-12 fv-row'>
										<div className='col-lg-12 fv-row'>
											<input
												type='text'
												className='form-control form-control-lg form-control-solid'
												placeholder='10'
												name='area'
												disabled={!isEdit}
											/>
										</div>
									</div>
								</div>
								<div className='col-lg-3'>
									<label className='col-lg-8 pt-0 col-form-label required fw-bold fs-6'>
										Победители
									</label>
									<div className='col-lg-12 fv-row'>
										<input
											type='text'
											className='form-control form-control-lg form-control-solid'
											placeholder='Грозные лисы'
											name='area'
											disabled={!isEdit}
										/>
									</div>
								</div>
							</div>
						</div>
						<button
							type='submit'
							className='btn btn-secondary mt-3'
							disabled={!isEdit}
						>
							Добавить школьную лигу
						</button>
					</div>
				</div>
			</div>
			<div id='kt_account_profile_details' className='collapse show'>
				<div className='card-body border-top p-9'>
					<h3 className='fw-bolder fs-5 m-0 mb-5'>Контингент учащихся</h3>
					<div className='card mb-5 mb-xl-8'>
						<div
							className='d-flex justify-content-between align-items-center flex-wrap mb-2'
							style={{
								minHeight: '70px',
								padding: '0 2.25rem',
							}}
						>
							<div className='d-flex'>
								<h3 className='card-title align-items-start flex-column'>
									<span className='card-label fw-bold fs-3 mb-1'>
										Учащиеся школы
									</span>
								</h3>
							</div>
							<div className='d-flex gap-4 align-items-center'>
								<button
									type='button'
									className='btn btn-light btn-sm'
									style={{ height: '43.59px' }}
									disabled={!isEdit}
								>
									Экспорт из Excel
								</button>
								<button
									type='button'
									className='btn btn-primary btn-sm'
									style={{ height: '43.59px' }}
									disabled={!isEdit}
								>
									Добавить ученика
								</button>
							</div>
						</div>
						<div className='card-body py-3'>
							<div className='table-responsive'>
								<table className='table table-row-bordered table-row-gray-100 align-middle gs-0 gy-3'>
									<thead>
										<tr className='fw-bold text-muted'>
											<th>ФИО</th>
											<th>Класс</th>
											<th>Секция</th>
											<th>Разряд</th>
											<th>Участие в респ., межд. соревн.</th>
											<th></th>
										</tr>
									</thead>
									<tbody>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Исаева Алия
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>9А</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Волейбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													2-й юношеский разряд
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Да</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Исаева Алия
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>9А</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Волейбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													2-й юношеский разряд
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Да</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Исаева Алия
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>9А</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Волейбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													2-й юношеский разряд
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Да</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
										<tr>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Исаева Алия
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>9А</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													Волейбол
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>
													2-й юношеский разряд
												</div>
											</td>
											<td>
												<div className='text-gray-600 fw-bold fs-6'>Да</div>
											</td>
											<td align='right'>
												<button
													type='button'
													className='btn btn-secondary btn-active-light-primary'
													data-kt-menu-trigger='click'
													data-kt-menu-placement='bottom-end'
													data-kt-menu-flip='top-end'
													disabled={!isEdit}
												>
													<p className='text-gray-600 fw-bold fs-6 m-0 p-0'>
														Действия
													</p>
												</button>
												<div
													className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-semibold w-200px'
													data-kt-menu='true'
												>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Изменить
														</a>
													</div>
													<div className='menu-item px-3'>
														<a href='#' className='menu-link px-3'>
															Удалить
														</a>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								<div className='d-flex flex-stack flex-wrap pt-10 justify-content-end'>
									<ul className='pagination'>
										<li className='page-item previous'>
											<a href='#' className='page-link'>
												<i className='previous'></i>
											</a>
										</li>
										<li className='page-item active'>
											<a href='#' className='page-link'>
												1
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												2
											</a>
										</li>
										<li className='page-item'>
											<a href='#' className='page-link'>
												3
											</a>
										</li>
										<li className='page-item next'>
											<a href='#' className='page-link'>
												<i className='next'></i>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='card-footer d-flex justify-content-end py-6 px-9'>
				<button
					className='btn btn-light btn-active-light-primary me-2'
					disabled={!isEdit}
				>
					Отменить
				</button>
				<button className='btn btn-primary' disabled={!isEdit}>
					Сохранить изменения
				</button>
			</div>
		</div>
	)
}

export default InventoryPageAdmin
