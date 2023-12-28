import React, {FC} from 'react'
import InventoryPage from "./InventoryPage.tsx";

const InventoryPageWrapper: FC = () => {
  return (
    <>
        <div className='card-title' style={{marginBottom: '28px'}}>
            <h3 className='fw-bolder fs-2 m-0 mb-1'>Инвертарь</h3>
            <p className='text-gray-600 fs-5 fw-normal'>
                Отредактируйте инвентарь своей школы
            </p>
        </div>
        <InventoryPage/>
    </>
  )
}

export default InventoryPageWrapper
