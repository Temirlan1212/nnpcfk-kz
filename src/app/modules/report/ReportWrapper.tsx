import React, {FC} from 'react'
import {KTIcon} from "../../../_metronic/helpers";

const ReportPageWrapper: FC = () => {
    return (
        <>
            <div className='card-title justify-content-between d-flex' style={{marginBottom: '28px'}}>
                <div>
                    <h3 className='fw-bolder fs-2 m-0 mb-1'>Мои отчёты</h3>
                    <p className='text-gray-600 fs-5 fw-normal'>
                        Данные о ваших отчётах
                    </p>
                </div>
                <button type="button" className="btn btn-primary btn-sm my-auto" style={{height: '38px'}}>
                    <KTIcon iconName="plus-square" className='fs-3 pr-4'/>
                    Сдать отчёт
                </button>
            </div>

            <div className="notice d-flex bg-light-warning rounded border-warning border border-dashed p-6"
                 style={{marginBottom: '28px'}}>
                <KTIcon iconName="information" className='fs-2tx pr-4 text-warning me-4'/>
                <div className="d-flex flex-stack flex-grow-1">
                    <div className="fw-bold"><h4 className="text-gray-800 fw-bolder">Вам необходимо сдать отчёт!</h4>
                        <div className="fs-6 text-gray-600">Срок заполнения и подачи отчёта продлены до 1 января 2024
                            года. Просьба заполнить и сдать отчёт!
                        </div>
                    </div>
                </div>
                <button type="button" className="btn btn-light-warning me-3 btn-sm btn-flex">
                    Сдать отчёт
                </button>
            </div>

            <div className="card card-xl-stretch mb-5 mb-xl-8">
                <div className="card-header border-0 pt-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label fw-bold fs-3 mb-1">Invoices</span>
                    </h3>
                    <div className="card-toolbar">
                        <ul className="nav">
                            <li className="nav-item"><a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1"
                                data-bs-toggle="tab" >Этот год</a></li>
                            <li className="nav-item"><a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1"
                                data-bs-toggle="tab" >2020</a></li>
                            <li className="nav-item"><a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4"
                                data-bs-toggle="tab" >2019</a></li>
                            <li className="nav-item"><a
                                className="nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4"
                                data-bs-toggle="tab">2018</a></li>
                        </ul>
                    </div>
                </div>
                <div className="card-body py-3">
                    <div className="table-responsive">
                        <table className="table table-row-dashed table-row-gray-300 align-middle gs-0 gy-4">
                            <thead>
                            <tr className="fw-bold fs-5 text-muted">
                                <th className="w-60">Отчёт</th>
                                <th className="w-25">Дата</th>
                                <th className="w-15"></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-muted fw-semibold text-muted d-block fs-5">Отчёт о деятельности тренеров, соревнований и школ</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span
                                                className="text-muted fw-semibold text-muted d-block fs-5">01.12.2023</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-secondary me-3 btn-sm btn-flex">
                                        Посмотреть
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-muted fw-semibold text-muted d-block fs-5">Отчёт о деятельности тренеров, соревнований и школ</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span
                                                className="text-muted fw-semibold text-muted d-block fs-5">01.12.2023</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-secondary me-3 btn-sm btn-flex">
                                        Посмотреть
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-muted fw-semibold text-muted d-block fs-5">Отчёт о деятельности тренеров, соревнований и школ</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span
                                                className="text-muted fw-semibold text-muted d-block fs-5">01.12.2023</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-secondary me-3 btn-sm btn-flex">
                                        Посмотреть
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-muted fw-semibold text-muted d-block fs-5">Отчёт о деятельности тренеров, соревнований и школ</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span
                                                className="text-muted fw-semibold text-muted d-block fs-5">01.12.2023</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-secondary me-3 btn-sm btn-flex">
                                        Посмотреть
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span className="text-muted fw-semibold text-muted d-block fs-5">Отчёт о деятельности тренеров, соревнований и школ</span>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">
                                        <div className="d-flex justify-content-start flex-column">
                                            <span
                                                className="text-muted fw-semibold text-muted d-block fs-5">01.12.2023</span>
                                        </div>
                                    </div>
                                </td>
                                <td className="text-end">
                                    <button type="button" className="btn btn-secondary me-3 btn-sm btn-flex">
                                        Посмотреть
                                    </button>
                                </td>
                            </tr>

                            </tbody>
                        </table>
                        <div className="d-flex flex-stack flex-wrap pt-10 justify-content-end mb-4">
                            <ul className="pagination">
                                <li className="page-item previous"><a href="#" className="page-link"><i
                                    className="previous"></i></a></li>
                                <li className="page-item active"><a href="#" className="page-link">1</a></li>
                                <li className="page-item"><a href="#" className="page-link">2</a></li>
                                <li className="page-item"><a href="#" className="page-link">3</a></li>
                                <li className="page-item next"><a href="#" className="page-link"><i
                                    className="next"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}


export default ReportPageWrapper
