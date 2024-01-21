import { useState } from "react";
import registerImage from "../assets/register.png";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setRegisterData({
      ...registerData,
      [key]: value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    setRegisterData({
      email: "",
      message: "",
      password: "",
    });
    return false
  };
  
  return (
    <div className="main-content">
      <div className="main-flex">
        <div className="homeimage">
          <img src={registerImage} alt="Contact Us image of Website" />
        </div>
        <form action="" className="main-form">
          <div className="main-header">Registration Form</div>
          <div>
            <label htmlFor="usernamebox">Username</label>
            <input
              value={registerData.username}
              required
              type="text"
              name="username"
              id="usernamebox"
              onChange={onChangeInputs}
            />
          </div>
          <div>
            <label htmlFor="emailbox">Email</label>
            <input
              value={registerData.email}
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
              value={registerData.password}
              onChange={onChangeInputs}
            />
          </div>
          <button
            onSubmit={onSubmitHandle}
            type="submit"
            className="btn btn-blue"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};
