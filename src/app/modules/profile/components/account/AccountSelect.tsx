interface AccountOptionsProps {
	value: string
	title: string
}

interface AccountSelectProps {
	label: string
	selectName: string
	ariaLabel: string
	dataControl: string
	dataPlaceholder: string
	options: AccountOptionsProps[]
	value: string
	isRequired: boolean
}

const AccountSelect = (props: AccountSelectProps) => {
	const {
		label,
		selectName,
		ariaLabel,
		dataControl,
		options,
		isRequired,
		dataPlaceholder,
	} = props

	return (
		<div className='row mb-6'>
			<label className='col-lg-4 col-form-label fw-semibold fs-6'>
				<span className={`${isRequired ? 'required' : ''}`}>{label}</span>
			</label>
			<div className='col-lg-8 fv-row'>
				<select
					name={selectName}
					aria-label={ariaLabel}
					data-control={dataControl}
					data-placeholder={dataPlaceholder}
					className='form-select form-select-solid form-select-lg fw-semibold'
					value={data.language}
					onChange={e => updateData({ language: e.target.value })}
					defaultValue={data.language}
				>
					<option value='almaty'>Алматы</option>
					<option value='kostanay'>Костанай</option>
					<option value='shym'>Шымкент</option>
				</select>
			</div>
		</div>
	)
}

export default AccountSelect
