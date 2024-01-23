import { AuthContentBlockLayout } from "../../AuthContentBlockLayout";
import { useState } from "react";
import { EmailSend } from "./steps/EmailSend";
import { useForgotPassword } from "./core/ForgotPasswordContext";
import { PasswordRecovery } from "./steps/PasswordRecovery";

export function ForgotPassword() {
  const { step, setStep } = useForgotPassword();

  if (step === 0) {
    return (
      <AuthContentBlockLayout
        title="Забыли пароль?"
        description="Введите вашу почту, мы отправим вам ссылку для смены пароля"
        iconUrl="media/svg/general/forgot-password-vector.svg"
      >
        <EmailSend />
      </AuthContentBlockLayout>
    );
  }

  if (step === 1) {
    return (
      <AuthContentBlockLayout
        title="Подтвердите email"
        description="Введите код, который пришел на вашу почту"
        iconUrl="media/svg/general/password-recovery-vector.svg"
        props={{ back: { onClick: () => setStep(0) } }}
      >
        <PasswordRecovery />
      </AuthContentBlockLayout>
    );
  }
}
