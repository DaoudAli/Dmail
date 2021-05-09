import React from "react";
import "./Login.css";
import Button from "@material-ui/core/Button/Button";
import TextField from "@material-ui/core/TextField";
import signInAPI from "./api";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { signIn } from "../../features/mailSlice";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await signInAPI(data).then((results) => console.log(results));
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
