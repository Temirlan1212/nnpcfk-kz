import React from "react";
import {KTIcon} from "../../../../_metronic/helpers";
import {useNavigate} from "react-router-dom";

export function AddTraining() {
    const navigate = useNavigate()

    return (
        <>
            <div onClick={() => navigate('/training/table')} className='btn p-0 btn-color-dark'
                 style={{margin: '0px 0 16px 0'}}>
                <KTIcon iconName="arrow-left" className='fs-1'/>
            </div>
            <div className="card mb-5 mb-xl-8">
                <div className="card-header border-0 pt-5"><h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold fs-3 mb-1">Добавить тренировку</span><span
                    className="text-muted mt-1 fw-semibold fs-7">Введите данные вашей тренировки</span></h3>
                </div>
                <div id="kt_account_profile_details" className="collapse show">
                    <div className="card-body border-top p-9">
                        <div className="mb-6">
                            <div className="row gap-3">
                                <div className='col-lg-8'>
                                    <div className='row mb-6'>
                                        <div className="col-lg-6"><label
                                            className="col-lg-8 pt-0 col-form-label required fw-bold fs-6">Вид спорта</label>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row"><input type="text"
                                                                                         className="form-control form-control-lg form-control-solid"
                                                                                         name="area"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6"><label
                                            className="col-lg-8 pt-0 col-form-label required fw-bold fs-6">Классы</label>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row"><input type="text"
                                                                                         className="form-control form-control-lg form-control-solid"
                                                                                         name="area"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='row mb-6'>
                                        <div className="col-lg-6"><label
                                            className="col-lg-8 pt-0 col-form-label required fw-bold fs-6">Количество мальчиков</label>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row"><input type="text"
                                                                                         className="form-control form-control-lg form-control-solid"
                                                                                         name="area"/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6"><label
                                            className="col-lg-8 pt-0 col-form-label required fw-bold fs-6">Количество девочек</label>
                                            <div className="col-lg-12 fv-row">
                                                <div className="col-lg-12 fv-row"><input type="text"
                                                                                         className="form-control form-control-lg form-control-solid"
                                                                                         name="area"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-auto' style={{backgroundColor: '#F9F9F9', borderRadius: '12px', padding: '30px 40px'}}>
                                    <h3 className='fs-2'>Зачем добавлять мою <br/>тренировку?</h3>
                                    <p className='fs-5'>Платформа center.nnpcfk.kz <br/>предназначена для того,
                                        чтобы <br/> каждый тренер получал деньги за <br/> выполненую работу</p>
                                </div>
                            </div>
                            <button type="submit" className="btn btn-primary mt-3">Добавить</button>
                        </div>
                    </div>
                </div>

            </div>
        </>

    );
}
