import { TextField } from "@mui/material";
import LoginForm from "./Login.form";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/auth.action";

const LogInFields = () => {
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    dispatch(loginUser(data));
  };

  const { values, handleSubmit, touched, errors, handleChange } = LoginForm({
    handleLogin,
  });

  return (
    <form className="w-full flex flex-col gap-[16px]" onSubmit={handleSubmit}>
      <TextField
        name="username"
        label="Username"
        value={values.username}
        onChange={handleChange}
        helperText={touched.username ? errors.username : ""}
        error={touched.username && Boolean(errors.username)}
      />

      <TextField
        type="password"
        name="password"
        label="Password"
        value={values.password}
        onChange={handleChange}
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
      />

      <button
        type="submit"
        className="bg-[#7C4EE4] rounded-[8px] h-[56px] text-white"
      >
        Log In
      </button>
    </form>
  );
};

export default LogInFields;
