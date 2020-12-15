import * as yup from "yup";

export default yup.object().shape({
  email: yup.string().email().required("Email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be atleast 8 characters long"),
});
