import { useState } from "react";
import loginImage from "../assets/login.png";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    setLoginData({
      email: "",
      message: "",
      password: "",
    });

    return false;
  };

  return (
    <div className="main-content">
      <div className="main-flex">
        <div className="homeimage">
          <img src={loginImage} alt="Contact Us image of Website" />
        </div>
        <form action="" className="main-form">
          <div className="main-header">Login Form</div>
          <div>
            <label htmlFor="emailbox">Email</label>
            <input
              value={loginData.email}
              required
              type="email"
              name="email"
              id="emailbox"
              onChange={onChangeInputs}
            />
          </div>
          <div>
            <label htmlFor="passwordbox">Password</label>
            <input
              type="password"
              name="password"
              id="passwordbox"
              required
              value={loginData.password}
              onChange={onChangeInputs}
            />
          </div>
          <button
            onSubmit={onSubmitHandle}
            type="submit"
            className="btn btn-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
