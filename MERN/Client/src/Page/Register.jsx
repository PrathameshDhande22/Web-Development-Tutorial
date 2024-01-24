import { useState } from "react";
import registerImage from "../assets/register.png";
import api from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export const Register = () => {
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navi = useNavigate();

  const { storeTokeninLS } = useAuth();

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setRegisterData({
      ...registerData,
      [key]: value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    try {
      const registerResponse = await api.post("/auth/register", registerData);

      if (registerResponse.status == 202) {
        toast.success(registerResponse.data?.msg);

        storeTokeninLS(registerResponse.data?.access_token);

        setRegisterData({
          email: "",
          username: "",
          password: "",
        });

        navi("/");
      }
    } catch (error) {
      if (error?.response?.status == 502 || error?.response?.status == 401) {
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
          <img src={registerImage} alt="Contact Us image of Website" />
        </div>
        <form action="" className="main-form" onSubmit={onSubmitHandle}>
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
              placeholder="Enter your username"
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
              placeholder="Enter your email"
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
              placeholder="Enter your Password"
            />
          </div>
          <button type="submit" className="btn btn-blue">
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};
