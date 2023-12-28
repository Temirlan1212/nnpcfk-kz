import {
	ChartsWidget1,
	ListsWidget2,
	ListsWidget5,
} from '../../../../_metronic/partials/widgets'

export function ProfileEdit() {
	return (
		<div className='row g-5 g-xxl-8'>
			<div className='col-xl-6'>
				<ChartsWidget1 className='mb-5 mb-xxl-8' />

				<ListsWidget5 className='mb-5 mb-xxl-8' />

				<ListsWidget2 className='mb-5 mb-xxl-8' />
			</div>
		</div>
	)
}
