import { FC, useState } from 'react'
import InventoryPageAdmin from './InventoryPageAdmin.tsx'

const InventoryPageWrapperAdmin: FC = () => {
	const [isEdit, setIsEdit] = useState(false)

	const handleIsEdit = () => {
		setIsEdit(prev => !prev)
	}

	return (
		<>
			<div
				className='card-title d-flex justify-content-between align-items-center'
				style={{ marginBottom: '28px' }}
			>
				<span>
					<h3 className='fw-bolder fs-2 m-0 mb-1'>Инвертарь</h3>
					<p className='text-gray-600 fs-5 fw-normal'>
						Отредактируйте инвентарь своей школы
					</p>
				</span>
				<span>
					<button
						type='button'
						className='btn btn-light'
						onClick={handleIsEdit}
					>
						{isEdit ? 'Сохранить изменение' : 'Редактировать инвентарь'}
					</button>
				</span>
			</div>
			<InventoryPageAdmin isEdit={isEdit} />
		</>
	)
}

export default InventoryPageWrapperAdmin
