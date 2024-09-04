import { object, string } from "yup";

export const logInSchema = object().shape({
  username: string().required("Field is required"),
  password: string().required("Field is required"),
});
