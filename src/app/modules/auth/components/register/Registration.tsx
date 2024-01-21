import { AuthModel } from "../..";
import { AuthContentBlockLayout } from "../../AuthContentBlockLayout";
import { AccauntCreate } from "./steps/AccauntCreate";
import { useAuth } from "../../core/Auth";
import { getUserByToken } from "../../core/_requests";
import { useState } from "react";
import { EmailVerification } from "./steps/EmailVerification";

export function Registration() {
  const [step, setStep] = useState(0);
  const [user, setUser] = useState<AuthModel>();
  const { saveAuth, setCurrentUser } = useAuth();

  const onAccauntCreate = async (auth: AuthModel) => {
    setUser(auth);
    setStep(1);
  };

  const handleCurrentUser = async (user: AuthModel) => {
    if (user != null) {
      saveAuth(user);
      const { data } = await getUserByToken(user.token);
      setCurrentUser(data);
    }
  };

  if (step === 0) {
    return (
      <AuthContentBlockLayout
        title="Создать аккаунт"
        description="Для доступа на платформу"
      >
        <AccauntCreate onSubmit={onAccauntCreate} />
      </AuthContentBlockLayout>
    );
  }

  if (step === 1) {
    return (
      <AuthContentBlockLayout
        title="Подтвердите email"
        description="Введите код, который пришел на вашу почту"
        iconUrl="media/svg/general/smartphone.svg"
        props={{ back: { onClick: () => setStep(0) } }}
      >
        <EmailVerification />
      </AuthContentBlockLayout>
    );
  }
}
