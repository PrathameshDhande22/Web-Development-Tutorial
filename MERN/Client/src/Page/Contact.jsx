import { useState } from "react";
import supportimages from "../assets/support.png";

export const Contact = () => {
  const [contactData, setcontactData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const onChangeInputs = (e) => {
    const key = e.target.name;
    const value = e.target.value;

    setcontactData({
      ...contactData,
      [key]: value,
    });
  };

  const onSubmitHandle = (e) => {
    e.preventDefault();

    setcontactData({
      email: "",
      message: "",
      username: "",
    });
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
            onSubmit={onSubmitHandle}
            type="submit"
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
