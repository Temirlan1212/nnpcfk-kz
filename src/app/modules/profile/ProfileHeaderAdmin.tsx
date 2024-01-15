import { FC } from 'react'
import { KTIcon, toAbsoluteUrl } from '../../../_metronic/helpers'

const ProfileHeaderAdmin: FC = () => {
	return (
		<div className='card mb-5 mb-xl-10'>
			<div className='card-body pt-9 pb-0'>
				<div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
					<div className='me-7 mb-4'>
						<div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
							<img
								src={toAbsoluteUrl('media/avatars/300-1.jpg')}
								alt='profile-image'
							/>
						</div>
					</div>

					<div className='flex-grow-1'>
						<div className='d-flex justify-content-between align-items-center flex-wrap mb-2'>
							<div className='d-flex flex-column'>
								<div className='d-flex align-items-center mb-2'>
									<a
										href='#'
										className='text-gray-800 text-hover-primary fs-2 fw-bolder me-1'
									>
										Батырхан Омирбеков
									</a>
								</div>

								<div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
									<a
										href='#'
										className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'
									>
										<KTIcon iconName='profile-circle' className='fs-4 me-1' />
										Педагог-Модератор
									</a>
									<a
										href='#'
										className='d-flex align-items-center text-gray-500 text-hover-primary me-5 mb-2'
									>
										<KTIcon iconName='geolocation' className='fs-4 me-1' />
										г. Алматы
									</a>
									<a
										href='#'
										className='d-flex align-items-center text-gray-500 text-hover-primary mb-2'
									>
										<KTIcon iconName='sms' className='fs-4 me-1' />
										b.omirbekov@center.nnpcfk.kz
									</a>
								</div>
							</div>
							<button className='btn btn-primary'>
								<a href='/inventory' className='text-white'>
									Просмотреть инвентарь
								</a>
							</button>
						</div>

						<div className='d-flex flex-wrap flex-stack'>
							<div className='d-flex flex-column flex-grow-1 pe-8'>
								<div className='d-flex flex-wrap'>
									<div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
										<div className='d-flex align-items-center'>
											<KTIcon
												iconName='arrow-up'
												className='fs-3 text-success me-2'
											/>
											<div className='fs-2 fw-bolder'>132</div>
										</div>

										<div className='fw-bold fs-6 text-gray-500'>Тренировок</div>
									</div>

									<div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
										<div className='d-flex align-items-center'>
											<KTIcon
												iconName='arrow-down'
												className='fs-3 text-danger me-2'
											/>
											<div className='fs-2 fw-bolder'>2</div>
										</div>

										<div className='fw-bold fs-6 text-gray-500'>
											Соревнований
										</div>
									</div>

									<div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
										<div className='d-flex align-items-center'>
											<KTIcon
												iconName='arrow-up'
												className='fs-3 text-success me-2'
											/>
											<div className='fs-2 fw-bolder'>6</div>
										</div>

										<div className='fw-bold fs-6 text-gray-500'>
											Пройденных курсов
										</div>
									</div>
								</div>
							</div>

							<div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
								<div className='d-flex justify-content-between w-100 mt-auto mb-2'>
									<span className='fw-bold fs-6 text-gray-500'>
										Профиль завершен
									</span>
									<span className='fw-bolder fs-6'>50%</span>
								</div>
								<div className='h-5px mx-3 w-100 bg-light mb-3'>
									<div
										className='bg-success rounded h-5px'
										role='progressbar'
										style={{ width: '50%' }}
									></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export { ProfileHeaderAdmin }
