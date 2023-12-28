import React, {FC} from 'react'
import {KTIcon} from "../../../_metronic/helpers";
import {useNavigate} from "react-router-dom";

const ViewReport: FC = () => {
    const navigate = useNavigate()
    return (
        <>
            <div onClick={() => navigate('/report')} className='btn p-0 btn-color-dark'
                 style={{margin: '0px 0 16px 0'}}>
                <KTIcon iconName="arrow-left" className='fs-1'/>
            </div>
            <div className='card-title justify-content-between d-flex' style={{marginBottom: '28px'}}>
                <div>
                    <h3 className='fw-bolder fs-2 m-0 mb-1'>Мои отчёты</h3>
                    <p className='text-gray-600 fs-5 fw-normal'>
                        Данные о ваших отчётах
                    </p>
                </div>
                <button type="button" className="btn btn-color-gray-700 bg-body btn-sm my-auto"
                        style={{height: '38px'}}>
                    <KTIcon iconName="cloud-download" className='fs-3 pr-4'/>
                    Скачать отчёт
                </button>
            </div>
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
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Полное имя</label>
                            <div className="col-lg-8 row">
                                <div className='col-lg-4'>
                                    <input type="text"
                                           className="form-control form-control-lg form-control-flush"
                                           disabled
                                           value="Батырхан"
                                           name="fullName"
                                    />
                                </div>
                                <div className='col-lg-4'>
                                    <input type="text"
                                           className="form-control form-control-lg form-control-flush"
                                           disabled
                                           value="Омирбеков"
                                           name="fullName"
                                    />
                                </div>
                                <div className='col-lg-4'>
                                    <input type="text"
                                           className="form-control form-control-lg form-control-flush"
                                           disabled
                                           value="Ерланович"
                                           name="fullName"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">ИИН</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="999999999999"
                                       name="iin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Должность</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="Преподаватель физической культуры"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Образование</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="Образовательные технологии"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label fw-bold fs-6 "><span
                                className="required">Квалификационный уровень {"  "}
                                <KTIcon iconName='information-5'/>
                            </span></label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="Педагог-Модератор"
                                       name="bin"
                                /></div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Место работы</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control  form-control-lg form-control-flush"
                                       disabled
                                       value="ТОО “Спортивные дети”"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Общий стаж{"  "}
                                <KTIcon iconName='information-5'/>
                            </label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="10"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Педагогический стаж <KTIcon
                                iconName='information-5'/></label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="8"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Проводимая секция</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="Футбол"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Домашний адрес</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="г. Алматы, пр. Аль-Фараби, 405"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Телефон</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="+7 777 777 7777"
                                       name="bin"
                                />
                            </div>
                        </div>
                        <div className="row mb-6">
                            <label className="col-lg-4 col-form-label required fw-bold fs-6">Электронная почта</label>
                            <div className="col-lg-8 fv-row">
                                <input type="text"
                                       className="form-control form-control-lg form-control-flush"
                                       disabled
                                       value="b.omirbekov@center.nnpcfk.kz"
                                       name="bin"
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <div id='kt_account_profile_details' className='collapse show'>
                    <div className='card-body border-top p-9'>
                        <div className='mb-6'>
                            <h3 className='fw-bolder fs-5 m-0 mb-5'>Предыдущие курсы повышения квалификации</h3>
                            <div>
                                <div className='row mb-2 justify-content-between'>
                                    <div className='col-lg-1 align-items-end d-flex pr-0'>
                                        <p className='fw-bolder fs-5 m-0 pr-0'>1</p>
                                    </div>
                                    <div className='col-lg-9 row p-0'>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Номер
                                                сертификата</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Тема
                                                курса</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Место
                                                прохождения</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Дата</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 align-items-end d-flex'>
                                        <label
                                            className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Продолжительность</label>
                                    </div>
                                </div>
                                <div className='row mb-6 justify-content-between'>
                                    <div className='col-lg-1'>
                                        <p className='fw-bolder fs-5 m-0 mb-5'></p>
                                    </div>
                                    <div className='col-lg-9 row p-0'>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="1234567"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="Курс по Action Research"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="г. Алматы"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <input type="text"
                                                       className="form-control form-control-lg form-control-flush"
                                                       disabled
                                                       value="13.09.2023"
                                                       name="area"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div className="col-lg-12 fv-row">
                                            <input type="text"
                                                   className="form-control form-control-lg form-control-flush"
                                                   disabled
                                                   value="5 месяцев"
                                                   name="area"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className='row mb-2 justify-content-between'>
                                    <div className='col-lg-1 align-items-end d-flex pr-0'>
                                        <p className='fw-bolder fs-5 m-0 pr-0'>1</p>
                                    </div>
                                    <div className='col-lg-9 row p-0'>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Номер
                                                сертификата</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Тема
                                                курса</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Место
                                                прохождения</label>
                                        </div>
                                        <div className='col-lg-3 align-items-end d-flex'>
                                            <label
                                                className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Дата</label>
                                        </div>
                                    </div>
                                    <div className='col-lg-2 align-items-end d-flex'>
                                        <label
                                            className="col-lg-8 p-0 col-form-label fw-bold required fs-8">Продолжительность</label>
                                    </div>
                                </div>
                                <div className='row mb-6 justify-content-between'>
                                    <div className='col-lg-1'>
                                        <p className='fw-bolder fs-5 m-0 mb-5'></p>
                                    </div>
                                    <div className='col-lg-9 row p-0'>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="1234567"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="Курс по Action Research"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row">
                                                    <input type="text"
                                                           className="form-control form-control-lg form-control-flush"
                                                           disabled
                                                           value="г. Алматы"
                                                           name="area"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-3'>
                                            <div className="col-lg-12 fv-row">
                                                <input type="text"
                                                       className="form-control form-control-lg form-control-flush"
                                                       disabled
                                                       value="13.09.2023"
                                                       name="area"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-lg-2'>
                                        <div className="col-lg-12 fv-row">
                                            <input type="text"
                                                   className="form-control form-control-lg form-control-flush"
                                                   disabled
                                                   value="5 месяцев"
                                                   name="area"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </div>


        </>

    )
}


export default ViewReport
