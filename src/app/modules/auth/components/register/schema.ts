import { string, ref, bool, object, InferType } from "yup";

export type IRegistrationFormSchema = InferType<typeof registrationFormSchema>;

export const registrationFormSchema = object().shape({
  firstname: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  email: string()
    .email("Неверный формат email")
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  lastname: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  school: string(),
  password: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле"),
  changepassword: string()
    .min(3, "Минимум 3 символа")
    .max(50, "Максимум 50 символов")
    .required("Это обязательное поле")
    .oneOf([ref("password")], "Пароль и подтверждение пароля не совпадают"),
  acceptTerms: bool().required("Вы должны принять условия и положения"),
});

export const registrationFormFieldsData = [
  {
    name: "firstname",
    label: "Имя *",
    placeholder: "Имя",
    type: "text",
  },
  {
    name: "lastname",
    label: "Фамилия *",
    placeholder: "Фамилия",
    type: "text",
  },
  {
    name: "email",
    label: "Email *",
    placeholder: "Email",
    type: "email",
  },
  {
    name: "password",
    label: "Пароль *",
    placeholder: "Пароль",
    type: "password",
  },
  {
    name: "changepassword",
    label: "Подтверждение пароля *",
    placeholder: "Подтверждение пароля",
    type: "password",
  },
  {
    name: "school",
    label: "Школа",
    placeholder: "Школа",
    type: "text",
  },
] as const;

const registrationFormSteps = {
  required: [registrationFormFieldsData[0], registrationFormFieldsData[1]],
  optional: [
    registrationFormFieldsData[2],
    registrationFormFieldsData[3],
    registrationFormFieldsData[4],
    registrationFormFieldsData[5],
  ],
};

export const registrationFormStepsData = [
  {
    title: "",
    schema: registrationFormSteps["required"],
    fieldNames: registrationFormSteps["required"].map((field) => field.name),
  },
  {
    title: "",
    schema: registrationFormSteps["optional"],
    fieldNames: registrationFormSteps["optional"].map((field) => field.name),
  },
] as const;
