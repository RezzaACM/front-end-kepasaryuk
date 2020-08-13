import * as Yup from "yup";

export const LoginValidation = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().required().min("3", "too short!"),
});
