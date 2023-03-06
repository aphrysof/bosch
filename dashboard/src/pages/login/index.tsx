import React, { useState } from "react";
import logo from "../../assets/logo.svg?url";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useNavigate, redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ILogin } from "../../types";
import { ErrorAlert } from "../../components/Alerts/ErrorAlert";
import { loginUser } from "../../store/users/login";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Login = () => {

  const [visible, setVisible] = useState<boolean>(false);

  const {error, data} = useSelector((state: RootState) => state.login)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ILogin>();

  const handleLoginUser = ({...data}: ILogin) => {
    
    dispatch(loginUser({navigate, ...data}));
    // console.log("logindata", data);
    // navigate("/overview");
  };

  return (
    <>
      <div className="flex justify-center items-center mx-auto my-28 w-full">
        <form className="pt-10 w-2/6" onSubmit={handleSubmit(handleLoginUser)}>
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-2xl text-center pt-10 font-semibold">
            Welcome back !
          </p>
          {error === "Network Error" && (
            <ErrorAlert
              message={<p>Sorry, Something went wrong, try again </p>}
            />
          )}

          {data === "HTTP 401 Unauthorized" && (
            <ErrorAlert
              message={
                <>
                  <p>The username or password is not correct. </p>{" "}
                </>
              }
            />
          )}
          <InputField
            register={register}
            name="username"
            type="text"
            className="w-full mt-7 border-2 border-borderAsh"
            placeholder="Enter your username"
            message="Please enter username"
            errors={errors.username}
            required
          />
          <InputField
            register={register}
            className="w-full mt-6"
            type={visible ? "text" : "password"}
            name="password"
            show={visible ? "hide" : "show"}
            placeholder="Enter your password"
            message="Please enter password"
            errors={errors.password}
            onClick={() => setVisible(!visible)}
            required
          />
          <Button
            className="bg-darkGreen mt-12 py-3.5 font-semibold text-white flex items-center  justify-center rounded-lg cursor-pointer w-full"
            type="submit"
            child="Login to ImaliPay"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
