import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import { getUserByToken, register } from "../../core/_requests";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../../../../_metronic/helpers";
import { PasswordMeterComponent } from "../../../../../_metronic/assets/ts/components";
import { useAuth } from "../../core/Auth";
import SVG from "react-inlinesvg";
import { registrationFormFieldsData, registrationFormSchema } from "./schema";

const initialValues = {
  school: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

export function Registration() {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationFormSchema,
    onSubmit: async (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        );
        saveAuth(auth.user);
        const { data: user } = await getUserByToken(auth.user.token);
        setCurrentUser(user);
      } catch (error) {
        console.error(error);
        saveAuth(undefined);
        setStatus("The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
    <div className="d-flex bg-light p-5 m-auto w-100 h-100">
      <div className="d-none d-md-flex w-50 p-5 flex-column justify-content-center align-items-center">
        <SVG src={toAbsoluteUrl("media/svg/illustrations/easy/landing.svg")} />
        <h2 className="text-center mt-5">
          Добро пожаловать в Center.Nnpcfk.Kz
        </h2>
        <p className="text-center mt-2 w-75">
          Доступ к эксклюзивным ресурсам и функциям для образовательных
          профессионалов в сфере физической культуры. Войдите, чтобы получить
          доступ к курсам, тренировкам, соревнованиям и всестороннему развитию
          спортивного потенциала Казахстана.
        </p>
      </div>

      <div
        className="container m-auto bg-white rounded w-100 w-md-50"
        style={{ padding: "40px", maxWidth: "600px" }}
      >
        <div>
          <h1 className="text-center">Создать аккаунт</h1>
          <p className="text-center text-gray-500 fw-semibold fs-6">
            Для доступа на платформу
          </p>
        </div>
        <form
          className="m-auto p-5 form w-130 fv-plugins-bootstrap5 fv-plugins-framework"
          noValidate
          id="kt_login_signup_form"
          onSubmit={formik.handleSubmit}
        >
          {formik.status && (
            <div className="mb-lg-15 alert alert-danger">
              <div className="alert-text font-weight-bold">{formik.status}</div>
            </div>
          )}

          {registrationFormFieldsData.map((field) => (
            <div key={field.name} className="fv-row mb-8">
              {/* <label className="form-label fw-bolder text-gray-900 fs-6">
                {field.label}
              </label> */}
              <input
                placeholder={field.placeholder}
                type={field.type}
                autoComplete="off"
                {...formik.getFieldProps(
                  field.name as keyof typeof initialValues
                )}
                className={clsx(
                  "form-control bg-transparent",
                  {
                    "is-invalid":
                      formik.touched[field.name] && formik.errors[field.name],
                  },
                  {
                    "is-valid":
                      formik.touched[field.name] && !formik.errors[field.name],
                  }
                )}
              />
              {formik.touched[field.name] && formik.errors[field.name] && (
                <div className="fv-plugins-message-container">
                  <div className="fv-help-block">
                    <span role="alert">{formik.errors[field.name]}</span>
                  </div>
                </div>
              )}
            </div>
          ))}

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
                {...formik.getFieldProps("acceptTerms")}
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
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <div className="fv-plugins-message-container">
                <div className="fv-help-block">
                  <span role="alert">{formik.errors.acceptTerms}</span>
                </div>
              </div>
            )}
          </div>
          {/* end::Form group */}

          {/* begin::Form group */}
          <div className="text-center">
            <button
              type="submit"
              id="kt_sign_up_submit"
              className="btn btn-lg btn-primary w-100 mb-5"
              disabled={
                formik.isSubmitting ||
                !formik.isValid ||
                !formik.values.acceptTerms
              }
            >
              {!loading && <span className="indicator-label">Регистрация</span>}
              {loading && (
                <span
                  className="indicator-progress"
                  style={{ display: "block" }}
                >
                  Please wait...{" "}
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

          {/* end::Form group */}
        </form>
      </div>
    </div>
  );
}
