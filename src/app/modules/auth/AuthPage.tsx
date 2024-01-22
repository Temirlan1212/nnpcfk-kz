import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/register/Registration";
import { ForgotPassword } from "./components/ForgotPassword";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { RegistrationFormProvider } from "./components/register/core/RegistrationForm";

const AuthPage = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route
      path="registration"
      element={
        <AuthLayout
        // title="Создать аккаунт"
        // description="Для доступа на платформу"
        >
          <RegistrationFormProvider>
            <Registration />
          </RegistrationFormProvider>
        </AuthLayout>
      }
    />
    <Route
      path="forgot-password"
      element={
        <AuthLayout
        // title="Забыли пароль"
        // description="Введите вашу почту, мы отправим вам ссылку для смены пароля"
        >
          <ForgotPassword />
        </AuthLayout>
      }
    />
    <Route index element={<Login />} />
  </Routes>
);

export { AuthPage };
