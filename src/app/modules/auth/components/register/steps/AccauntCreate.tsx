import { useEffect } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { PasswordMeterComponent } from "../../../../../../_metronic/assets/ts/components";
import { IRegistrationFormSchema, registrationFormStepsData } from "../schema";
import { Button, ProgressBar } from "react-bootstrap";
import { validateFields } from "../../../../../helpers/formik";
import { useRegistrationForm } from "../core/RegistrationForm";

const initialValues = {
  school: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  password_confirmation: "",
  acceptTerms: false,
};

export function AccauntCreate() {
  const { formik, loading, step, setStep } = useRegistrationForm();

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  const handleNext = async (fieldNames: (keyof IRegistrationFormSchema)[]) => {
    if (!formik?.setFieldTouched || !formik?.validateForm) return;
    const isValid = await validateFields(fieldNames, {
      setFieldTouched: formik.setFieldTouched,
      validateForm: formik?.validateForm,
    });
    if (!isValid) return;
    setStep && setStep((prev) => prev + 1);
  };

  const handlePrevious = () => {
    setStep && setStep((prev) => prev - 1);
  };

  return (
    <form
      className="m-auto p-5 form w-130 fv-plugins-bootstrap5 fv-plugins-framework"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik?.handleSubmit}
    >
      {formik?.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik?.status}</div>
        </div>
      )}

      <ProgressBar now={(step / 1) * 100} className="my-5" />

      {registrationFormStepsData.map((item, index) =>
        step === index ? (
          <div key={index}>
            {item.schema.map(({ label, name, placeholder, type, required }) => (
              <div key={name} className="fv-row mb-8">
                <label className="form-label fw-bolder text-gray-900 fs-6">
                  {label} {!!required && <span className="text-danger">*</span>}
                </label>
                <input
                  placeholder={placeholder}
                  type={type}
                  autoComplete="off"
                  {...formik?.getFieldProps(name as keyof typeof initialValues)}
                  className={clsx(
                    "form-control bg-transparent",
                    {
                      "is-invalid":
                        formik?.touched[name] && formik?.errors[name],
                    },
                    {
                      "is-valid":
                        formik?.touched[name] && !formik?.errors[name],
                    }
                  )}
                  onKeyDown={(event) => {
                    if (event.code === "Enter") handleNext(item.fieldNames);
                  }}
                />
                {formik?.touched[name] && formik?.errors[name] && (
                  <div className="fv-plugins-message-container">
                    <div className="fv-help-block">
                      <span role="alert">{formik?.errors[name]}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="d-flex justify-content-between my-5">
              {registrationFormStepsData.length - 1 !== index && (
                <Button
                  variant="secondary"
                  disabled={step < 1}
                  onClick={handlePrevious}
                >
                  Назад
                </Button>
              )}
              {registrationFormStepsData.length - 1 !== index && (
                <Button
                  type="button"
                  variant="primary"
                  onClick={() => handleNext(item.fieldNames)}
                >
                  Вперед
                </Button>
              )}
            </div>
          </div>
        ) : null
      )}

      {registrationFormStepsData.length - 1 === step && (
        <>
          {/* begin::Form group */}
          <div className="fv-row mb-8">
            <label
              className="form-check form-check-inline"
              htmlFor="kt_login_toc_agree"
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="kt_login_toc_agree"
                {...formik?.getFieldProps("acceptTerms")}
                checked={formik?.getFieldProps("acceptTerms").value}
              />
              <span>
                Я согласен с
                <a
                  href="https://keenthemes.com/metronic/?page=faq"
                  target="_blank"
                  className="ms-1 link-primary"
                >
                  условиями конфиденциальности
                </a>
                .
              </span>
            </label>
            {formik?.touched.acceptTerms && formik?.errors.acceptTerms && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik?.errors.acceptTerms}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Form group */}
          <div className="d-flex text-center gap-5">
            <button
              onClick={handlePrevious}
              type="submit"
              id="kt_sign_up_submit"
              className="btn btn-lg btn-secondary w-100 mb-5"
            >
              <span className="indicator-label">Назад</span>
            </button>
            <button
              type="submit"
              id="kt_sign_up_submit"
              className="btn btn-lg btn-primary w-100 mb-5"
              disabled={
                formik?.isSubmitting ||
                !formik?.isValid ||
                !formik?.values.acceptTerms
              }
            >
              {!loading && <span className="indicator-label">Регистрация</span>}
              {loading && (
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Подождите...{" "}
                  <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                </span>
              )}
            </button>
          </div>

          <div className="text-gray-500  text-center">
            Уже есть аккаунт?
            <Link to="/auth/login">
              <span className="ms-1 link-primary">Войти</span>
            </Link>
          </div>
        </>
      )}

      {/* end::Form group */}
    </form>
  );
}
