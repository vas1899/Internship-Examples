import * as yup from "yup";

export const SignupValidaitonSchema = yup.object({
  name: yup
    .string()
    .min(6, "Full Name should be at least 4 characters long")
    .required("Full Name is required"),
  username: yup
    .string()
    .min(4, "Username should be at least 4 characters long")
    .required("Username is required"),
  password: yup
    .string()
    .min(6, "Password should be at least 6 characters long")
    .required("Password is required"),
});
