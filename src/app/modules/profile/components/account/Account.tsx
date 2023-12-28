import { useState } from 'react'
import { toAbsoluteUrl } from '../../../../../_metronic/helpers'
import { defaultAccount, IAccount } from './AccountModel'

export function Account() {
	const [data, setData] = useState<IAccount>(defaultAccount)
	//const [hasError, setHasError] = useState(false);

	const updateData = (fieldsToUpdate: Partial<IAccount>) => {
		const updatedData = { ...data, ...fieldsToUpdate }
		setData(updatedData)
	}

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
					<h3 className='fw-bold m-0'>Информация о профиле</h3>
				</div>
			</div>

			{/* begin::Form */}
			<form className='form d-flex flex-center '>
				<div className='card-body  card-body border-top p-9'>
					{/* Avatar */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							Аватар
						</label>

						<div className='col-lg-8'>
							<div
								className='image-input image-input-outline'
								data-kt-image-input='true'
							>
								<img
									className='image-input-wrapper w-125px h-125px'
									src={toAbsoluteUrl('media/avatars/300-1.jpg')}
									alt='profile-image'
								/>

								<label
									className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
									data-kt-image-input-action='change'
									data-bs-toggle='tooltip'
									title='Change avatar'
								>
									<i className='ki-duotone ki-pencil fs-7'>
										<span className='path1'></span>
										<span className='path2'></span>
									</i>
									<input type='file' name='avatar' accept='.png, .jpg, .jpeg' />
									<input type='hidden' name='avatar_remove' />
								</label>
								<span
									className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
									data-kt-image-input-action='cancel'
									data-bs-toggle='tooltip'
									title='Cancel avatar'
								>
									<i className='ki-duotone ki-cross fs-2'>
										<span className='path1'></span>
										<span className='path2'></span>
									</i>
								</span>
								<span
									className='btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-body shadow'
									data-kt-image-input-action='remove'
									data-bs-toggle='tooltip'
									title='Remove avatar'
								>
									<i className='ki-duotone ki-cross fs-2'>
										<span className='path1'></span>
										<span className='path2'></span>
									</i>
								</span>
							</div>
							<div className='form-text'>
								Поддерживаемые типы: png, jpg, jpeg.
							</div>
						</div>
					</div>
					{/* begin::Form row */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-semibold fs-6'>
							Полное имя
						</label>
						<div className='col-lg-8'>
							<div className='row'>
								<div className='col-lg-6 fv-row'>
									<input
										type='text'
										name='fname'
										className='form-control form-control-lg form-control-solid'
										placeholder='Батырхан'
										value={data.firstName}
										onChange={e => updateData({ firstName: e.target.value })}
									/>
								</div>
								<div className='col-lg-6 fv-row'>
									<input
										type='text'
										name='lname'
										className='form-control form-control-lg form-control-solid mb-3 mb-lg-0'
										placeholder='Омирбеков'
										value={data.lastName}
										onChange={e => updateData({ lastName: e.target.value })}
									/>
								</div>
							</div>
						</div>
					</div>
					{/* end::Form row */}

					{/* begin::Form row */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label required fw-semibold fs-6'>
							Школа
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='text'
								name='school'
								className='form-control form-control-lg form-control-solid'
								placeholder='ТОО “Спортивные дети”'
								value={data.school}
								onChange={e => updateData({ school: e.target.value })}
							/>
						</div>
					</div>
					{/* end::Form row */}

					{/* begin::Form row */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Телефон</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<input
								type='tel'
								name='phone'
								className='form-control form-control-lg form-control-solid'
								placeholder='Phone number'
								value={data.phone}
								onChange={e => updateData({ phone: e.target.value })}
							/>
						</div>
					</div>
					{/* end::Form row */}

					{/* begin::Form row */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span>Город</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='cities'
								aria-label='Select a city'
								data-control='select2'
								data-placeholder='Select a city...'
								className='form-select form-select-solid form-select-lg fw-semibold'
								value={data.cities}
								onChange={e => updateData({ cities: e.target.value })}
								defaultValue={data.cities}
							>
								<option value='almaty'>Алматы</option>
								<option value='kostanay'>Костанай</option>
								<option value='shym'>Шымкент</option>
							</select>
						</div>
					</div>
					{/* end::Form row */}

					{/* begin::Form row */}
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Судейская категория</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='category'
								aria-label='Select a category'
								data-control='select3'
								data-placeholder='Select a category...'
								className='form-select form-select-solid form-select-lg fw-semibold'
								value={data.category}
								onChange={e => updateData({ category: e.target.value })}
								defaultValue={data.category}
							>
								<option value='football'>Футбол</option>
								<option value='basketball'>Баскетбол</option>
								<option value='golf'>Гольф</option>
							</select>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Классы</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='class'
								aria-label='Select a class'
								data-control='select3'
								data-placeholder='Select a class...'
								className='form-select form-select-solid form-select-lg fw-semibold'
								value={data.class}
								onChange={e => updateData({ class: e.target.value })}
								defaultValue={data.class}
							>
								<option value='4'>4 класс</option>
								<option value='5'>5 класс</option>
								<option value='6'>6 класс</option>
							</select>
						</div>
					</div>
					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Квалификационный уровень</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='levels'
								aria-label='Select a levels'
								data-control='select4'
								data-placeholder='Select a levels...'
								className='form-select form-select-solid form-select-lg fw-semibold'
								value={data.level}
								onChange={e => updateData({ level: e.target.value })}
								defaultValue={data.level}
							>
								<option value='pedagog'>Педагог-Модератор</option>
								<option value='trainer'>Тренер</option>
							</select>
						</div>
					</div>

					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Язык обучения</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='language'
								aria-label='Select a language'
								data-control='select5'
								data-placeholder='Select a language...'
								className='form-select form-select-solid form-select-lg fw-semibold multiple-checkboxes'
								value={data.language}
								onChange={e => updateData({ language: e.target.value })}
								defaultValue={data.language}
							>
								<option value='id'>Казак</option>
								<option value='msa'>Русский</option>
								<option value='en'>English</option>
							</select>
						</div>
					</div>

					<div className='row mb-6'>
						<label className='col-lg-4 col-form-label fw-semibold fs-6'>
							<span className='required'>Стаж работы</span>
						</label>
						<div className='col-lg-8 fv-row'>
							<select
								name='experience'
								aria-label='Select a experience'
								data-control='select6'
								data-placeholder='Select a experience...'
								className='form-select form-select-solid form-select-lg fw-semibold'
								value={data.staj}
								onChange={e => updateData({ staj: e.target.value })}
								defaultValue={data.language}
							>
								<option value='1'>1</option>
								<option value='2'>2</option>
								<option value='3'>3</option>
								<option value='4'>4</option>
								<option value='5'>5</option>
								<option value='10'>10</option>
							</select>
						</div>
					</div>
					{/* end::Form row */}

					<div className='separator separator-solid my-10'></div>

					<div className='card-title m-0'>
						<h3 className='fw-bold my-8'>
							Научные и учебно-методические разработки{' '}
							<span className='fs-7 text-muted' style={{ fontStyle: 'italic' }}>
								*за последние 5 лет
							</span>
						</h3>
					</div>

					<div className='row mb-6 d-flex align-items-start gap-5'>
						<p className='col-lg-auto col-form-label'>1</p>
						<div className='col-lg'>
							<label className='col-form-label required fw-semibold fs-6'>
								Название разработки
							</label>
							<div className='fv-row'>
								<input
									type='text'
									name='fname'
									className='form-control form-control-lg form-control-solid'
									placeholder='Развитие у учащихся понимания физики'
								/>
							</div>
						</div>

						<div className='col-lg'>
							<label className='col-form-label required fw-semibold fs-6'>
								Место публикации
							</label>
							<div className='fv-row'>
								<input
									type='text'
									name='address'
									className='form-control form-control-lg form-control-solid'
									placeholder='г. Алматы'
								/>
							</div>
						</div>

						<div className='col-lg'>
							<label className='col-form-label required fw-semibold fs-6'>
								Дата
							</label>
							<div className='fv-row'>
								<input
									type='text'
									name='date'
									className='form-control form-control-lg form-control-solid'
									placeholder='13.09.2024'
								/>
							</div>
						</div>
					</div>
					<button
						className='btn btn-light btn-active-light-primary text-muted py-5 px-10 mb-10  me-2'
						style={{ fontSize: 16 }}
					>
						Добавить методическую разработку
					</button>

					<div className='card-footer d-flex justify-content-end py-6 px-9'>
						<button className='btn btn-light btn-active-light-primary text-muted me-2'>
							Отменить
						</button>
						<button className='btn btn-primary'>Сохранить изменения</button>
					</div>
				</div>
			</form>
			{/* end::Form */}
		</div>
	)
}
