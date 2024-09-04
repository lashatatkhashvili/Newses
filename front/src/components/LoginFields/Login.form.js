import { useFormik } from "formik";
import { logInSchema } from "../../validation/authSchemas";

const LoginForm = ({ handleLogin }) => {
  const formValues = () => {
    const values = {
      username: "",
      password: "",
    };

    return values;
  };

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: formValues(),

    validationSchema: logInSchema,

    onSubmit: (values) => {
      const { username, password } = values;

      handleLogin({ username, password });
    },
  });

  return formik;
};

export default LoginForm;
