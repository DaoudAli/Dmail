import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField";
import signInAPI from "./apis/loginAPI";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setCurrentUser, signIn } from "../features/mailSlice";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const signInSuccess = await signInAPI(data);

    if (signInSuccess) {
      dispatch(setCurrentUser(data.username));
      dispatch(signIn());
    }
  };

  return (
    <div className="login">
      <div className="loginContainer">
        <h2> Dmail </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="loginField1">
            <TextField
              id="outlined-basic"
              label="Username"
              variant="outlined"
              {...register("username", { required: true })}
            />
          </div>
          <div className="loginField2">
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              {...register("password", { required: true })}
            />
          </div>

          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
