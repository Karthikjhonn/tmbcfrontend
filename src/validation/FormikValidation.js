import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("First name required"),
  lastName: Yup.string()
    .min(1, "Too Short!")
    .max(50, "Too Long!")
    .required("Last name required"),
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
});
export const logInValidation = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email required"),
  password: Yup.string().required("Password required"),
});
