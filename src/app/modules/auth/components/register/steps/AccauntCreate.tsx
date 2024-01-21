import { useState, useEffect } from "react";
import { useFormik } from "formik";
import clsx from "clsx";
import { getUserByToken, register } from "../../../core/_requests";
import { Link } from "react-router-dom";
import { PasswordMeterComponent } from "../../../../../../_metronic/assets/ts/components";
import { useAuth } from "../../../core/Auth";
import { registrationFormFieldsData, registrationFormSchema } from "../schema";
import { handle400FormErrors } from "../../../../../helpers/errors";
import { AuthModel } from "../../../core/_models";

const initialValues = {
  school: "",
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

export function AccauntCreate({
  onSubmit,
}: {
  onSubmit: (user: AuthModel) => void;
}) {
  const [loading, setLoading] = useState(false);
  const { saveAuth, setCurrentUser } = useAuth();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationFormSchema,
    onSubmit: async (values, { setFieldError, setStatus, setSubmitting }) => {
      setLoading(true);
      try {
        const { data: auth } = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        );
        onSubmit(auth.user);
      } catch (error: any) {
        const errors = error?.response?.data?.errors || {};
        const message = error?.response?.data?.message;
        handle400FormErrors(errors, { setFieldError });
        saveAuth(undefined);
        setStatus(message || "The registration details is incorrect");
        setSubmitting(false);
        setLoading(false);
        console.error(error);
      }
    },
  });

  useEffect(() => {
    PasswordMeterComponent.bootstrap();
  }, []);

  return (
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
            {...formik.getFieldProps(field.name as keyof typeof initialValues)}
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
            formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms
          }
        >
          {!loading && <span className="indicator-label">Регистрация</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
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

      {/* end::Form group */}
    </form>
  );
}
