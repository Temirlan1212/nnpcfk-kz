import {KTIcon} from "../../../../_metronic/helpers";
import {useNavigate} from "react-router-dom";

export function TrainingTable() {
    const navigate = useNavigate()
    return (
        <div className="card mb-5 mb-xl-8">
            <div className="card-header border-0 pt-5"><h3 className="card-title align-items-start flex-column">
                <span className="card-label fw-bold fs-3 mb-1">Тренировки</span><span
                className="text-muted mt-1 fw-semibold fs-7">Список проведенных вами тренировок</span></h3>
                <div onClick={() => navigate('/training/add-training')} className="card-toolbar"><a href="#"
                                                                                                    className="btn btn-sm btn-light-primary"><i
                    className="ki-duotone ki-plus fs-2"></i>Добавить тренировку</a></div>
            </div>
            <div className="card-body py-3">
                <div className="table-responsive">
                    <table className="table align-middle gs-0 gy-4">
                        <thead>
                        <tr className="fw-bold text-muted bg-light">
                            <th className="ps-4 rounded-start" style={{width: '5%'}}></th>
                            <th style={{width: '40%'}}>Тренировка</th>
                            <th style={{width: '25%'}}>Классы</th>
                            <th style={{width: '20%'}}>Учеников</th>
                            <th className=" text-end rounded-end" style={{width: '10%'}}></th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-5"><img
                                        src="/public/media/training-img/football.png"
                                        className="object-fit-cover"
                                        alt=""/></div>
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">Футбол
                                </div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">17.12.2023</span>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">1А, 1В,
                                    2С
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">23</div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">12 м/ 11 д</span>
                            </td>

                            <td className="text-end">
                                <div className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-3">
                                    <KTIcon iconName='pencil' className='fs-3'/>
                                </div>
                                <div
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_1">
                                    <KTIcon iconName='trash' className='fs-3'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-5"><img
                                        src="/public/media/training-img/football.png"
                                        className="object-fit-cover"
                                        alt=""/></div>
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">Футбол
                                </div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">12.12.2023</span>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">1А, 1В,
                                    2С
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">24</div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">13 м/ 11 д</span>
                            </td>

                            <td className="text-end">
                                <div className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-3">
                                    <KTIcon iconName='pencil' className='fs-3'/>
                                </div>
                                <div
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_1">
                                    <KTIcon iconName='trash' className='fs-3'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-5"><img
                                        src="/public/media/training-img/football.png"
                                        className="object-fit-cover"
                                        alt=""/></div>
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">Футбол
                                </div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">07.12.2023</span>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">1А, 1В,
                                    2С
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">18</div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">7 м/ 11 д</span>
                            </td>

                            <td className="text-end">
                                <div className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-3">
                                    <KTIcon iconName='pencil' className='fs-3'/>
                                </div>
                                <div
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_1">
                                    <KTIcon iconName='trash' className='fs-3'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-5"><img
                                        src="/public/media/training-img/running.png"
                                        className="object-fit-cover"
                                        alt=""/></div>
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">Бег
                                </div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">18.11.2023</span>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">3А, 3В
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">20</div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">10 м/ 10 д</span>
                            </td>

                            <td className="text-end">
                                <div className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-3">
                                    <KTIcon iconName='pencil' className='fs-3'/>
                                </div>
                                <div
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_1">
                                    <KTIcon iconName='trash' className='fs-3'/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <div className="d-flex align-items-center">
                                    <div className="symbol symbol-50px me-5">
                                        <img
                                            src="/public/media/training-img/basketball.png"
                                            className="object-fit-cover"
                                            alt=""/></div>
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">Баскетбол
                                </div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">11.11.2023</span>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">6А, 6В, 6С
                                </div>
                            </td>
                            <td>
                                <div className="text-gray-900 fw-bold d-block mb-1 fs-6">20</div>
                                <span className="text-muted fw-semibold text-muted d-block fs-7">9 м/ 11 д</span>
                            </td>

                            <td className="text-end">
                                <div className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm me-3">
                                    <KTIcon iconName='pencil' className='fs-3'/>
                                </div>
                                <div
                                    className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm"
                                    data-bs-toggle="modal"
                                    data-bs-target="#kt_modal_1">
                                    <KTIcon iconName='trash' className='fs-3'/>
                                </div>
                            </td>
                        </tr>

                        </tbody>
                    </table>
                </div>
            </div>

            <div className="modal fade" tabIndex={-1} id="kt_modal_1">
                <div className="modal-dialog">
                    <div className="modal-content" style={{backgroundColor: '#FFF5F8', padding: '24px'}}>
                        <div className="modal-body">
                            <div className='d-flex flex-column w-100 justify-content-center gap-1 mb-5'>
                                <h5 className="modal-title text-center fs-2">Вы уверены, что хотите удалить</h5>
                                <p className='text-center fs-5'>Тренировку “Футбол” от 17.12.2023?</p>
                            </div>
                            <div className='d-flex w-100 justify-content-center gap-4'>
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Да
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    data-bs-dismiss="modal"
                                >
                                    Нет
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
