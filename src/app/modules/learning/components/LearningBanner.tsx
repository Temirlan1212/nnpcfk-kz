const LearningBanner = () => {
	return (
		<div className='col-xxl-4'>
			<div className='card bg-primary h-xl-100'>
				<div className='card-body d-flex flex-column pt-13 pb-14'>
					<div className='m-0 d-flex align-items-center justify-content-center flex-column'>
						<h1 className='fw-semibold text-white text-center lh-lg mb-9'>
							Как проходит ваше обучение?
							<span className='fw-bolder'>Нужна ли вам помощь?</span>
						</h1>
						<img
							className='flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center card-rounded-bottom h-200px mh-200px my-5 mb-lg-12 '
							src={'/media/illustrations/easy/service.svg'}
						></img>
					</div>
					<div className='text-center'>
						<button
							type='button'
							className='btn btn-sm btn-success btn-color-white me-2'
							data-bs-target='#kt_modal_invite_friends'
							data-bs-toggle='modal'
						>
							У меня есть вопрос
						</button>
						<div
							className='modal fade'
							tabIndex={-1}
							id='kt_modal_invite_friends'
						>
							<div className='modal-dialog'>
								<div className='modal-content'>
									<div className='modal-header'>
										<h3 className='modal-title'>Введите ваш вопрос</h3>

										<div
											className='btn btn-icon btn-sm btn-active-light-primary ms-2'
											data-bs-dismiss='modal'
											aria-label='Close'
										>
											<i className='ki-duotone ki-cross fs-1'>
												<span className='path1'></span>
												<span className='path2'></span>
											</i>
										</div>
									</div>

									<div className='modal-body'>
										<textarea
											className='form-control'
											aria-label='With textarea'
											rows={10}
										></textarea>
									</div>

									<div className='modal-footer d-flex justify-content-center'>
										<button type='button' className='btn btn-primary'>
											Отправить
										</button>
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

export default LearningBanner
