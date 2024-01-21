import { useState } from "react";
import loginImage from "../assets/login.png";
import api from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navi = useNavigate();

  const { storeTokeninLS } = useAuth();

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setLoginData({
      ...loginData,
      [key]: value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    try {
      const loginResponse = await api.post("/auth/login", loginData);

      if (loginResponse.status == 200) {
        storeTokeninLS(loginResponse.data?.access_token);

        toast.success(loginResponse.data?.msg);
        
        setLoginData({
          email: "",
          password: "",
        });
        navi("/");
      }
    } catch (error) {
      if (error?.response?.status == 502 || error.response?.status == 401) {
        toast.error(error?.response?.data?.msg);
      } else {
        toast.error("Error in our Backend Servers");
      }
      console.log(error);
    }
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
              placeholder="Enter your email address"
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
              placeholder="Enter your password"
            />
          </div>
          <button
            onClick={onSubmitHandle}
            type="button"
            className="btn btn-blue"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
