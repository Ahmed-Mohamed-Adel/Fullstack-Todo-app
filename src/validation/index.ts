import * as yup from "yup";

export const registerSchema = yup
  .object({
    username: yup
      .string()
      .required("Username is required!")
      .min(5, "Username Should be at least 5 Characters."),
    email: yup
      .string()
      .required("Email is required!")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Not a Valid Email Address.",
      ),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password Should be at least 6 Characters."),
  })
  .required();

export const loginSchema = yup
  .object({
    identifier: yup
      .string()
      .required("Email is required!")
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Not a Valid Email Address.",
      ),
    password: yup
      .string()
      .required("Password is required!")
      .min(6, "Password Should be at least 6 Characters."),
  })
  .required();
