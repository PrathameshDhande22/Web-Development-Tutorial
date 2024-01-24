import { useState } from "react";
import supportimages from "../assets/support.png";
import useAuth from "../Hooks/useAuth";
import api from "../Api";
import { toast } from "react-toastify";

export const Contact = () => {
  const [contactData, setcontactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [userData, setUserData] = useState(true);
  const [disabled, setDisabled] = useState(false);

  const { userdata, isLoggedIn } = useAuth();

  if (userData && userdata) {
    setcontactData({
      email: userdata?.email,
      username: userdata?.username,
      message: "",
    });
    setDisabled(true);
    setUserData(false);
  }

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setcontactData({
      ...contactData,
      [key]: value,
    });
  };

  const onSubmitHandle = async (e) => {
    e.preventDefault();

    if (contactData.message.length <= 0) {
      toast.info("Please enter a message");
    } else {
      try {
        const contactResponse = await api.post(
          "/contact",
          JSON.stringify(contactData)
        );

        if (contactResponse.status === 200) {
          toast.success(contactResponse.data?.msg);
        }

        if (isLoggedIn) {
          setcontactData({
            email: contactData.email,
            username: contactData.username,
            message: "",
          });
        } else {
          setcontactData({
            email: "",
            username: "",
            message: "",
          });
        }
      } catch (error) {
        console.log(error);
        if (error?.response?.status === 502) {
          toast.error(error?.response?.data?.msg);
        } else {
          toast.error("Problem with our Backend Servers.");
        }
      }
    }
  };

  return (
    <div className="main-content">
      <div className="main-flex">
        <div className="homeimage">
          <img src={supportimages} alt="Contact Us image of Website" />
        </div>
        <form action="" className="main-form">
          <div className="main-header">Contact US</div>
          <div>
            <label htmlFor="usernamebox">Username</label>
            <input
              value={contactData.username}
              required
              type="text"
              name="username"
              id="usernamebox"
              onChange={onChangeInputs}
              disabled={disabled}
            />
          </div>
          <div>
            <label htmlFor="emailbox">Email</label>
            <input
              value={contactData.email}
              required
              type="email"
              name="email"
              id="emailbox"
              onChange={onChangeInputs}
              disabled={disabled}
            />
          </div>
          <div>
            <label htmlFor="messagebox">Message</label>
            <textarea
              value={contactData.message}
              required
              name="message"
              id="messagebox"
              rows="5"
              onChange={onChangeInputs}
            ></textarea>
          </div>
          <button
            onClick={onSubmitHandle}
            type="button"
            className="btn btn-blue"
          >
            Submit
          </button>
        </form>
      </div>
      <section className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
};
