import { Route, Routes } from "react-router-dom";
import { Registration } from "./components/register/Registration";
import { Login } from "./components/Login";
import { AuthLayout } from "./AuthLayout";
import { RegistrationFormProvider } from "./components/register/core/RegistrationForm";
import { ForgotPassword } from "./components/forgot-password/ForgotPassword";
import { ForgotPasswordProvider } from "./components/forgot-password/core/ForgotPasswordContext";

const AuthPage = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route
      path="registration"
      element={
        <AuthLayout>
          <RegistrationFormProvider>
            <Registration />
          </RegistrationFormProvider>
        </AuthLayout>
      }
    />
    <Route
      path="forgot-password"
      element={
        <AuthLayout>
          <ForgotPasswordProvider>
            <ForgotPassword />
          </ForgotPasswordProvider>
        </AuthLayout>
      }
    />
    <Route index element={<Login />} />
  </Routes>
);

export { AuthPage };
