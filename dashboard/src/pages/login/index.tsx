import React, { useState } from "react";
import logo from "../../assets/logo.svg?url";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState<boolean>(false);
 

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/overview')
  }

  return (
    <>
      <div className="flex justify-center items-center mx-auto my-28 w-full">
        <form className="pt-10 w-2/6" onSubmit={handleSubmit}>
          <div className="flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <p className="text-2xl text-center pt-10 font-semibold">
            Welcome back !
          </p>
          <InputField
            name="username"
            type="text"
            className="w-full mt-7 border-2 border-borderAsh"
            placeholder="Enter your username"
            required
          />
          <InputField
            className="w-full mt-6"
            type={visible ? "text" : "password"}
            name="password"
            show={visible ? "hide" : "show"}
            placeholder="Enter your password"
            message="Please enter password"
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
