import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import { ThreeDots } from "react-loader-spinner";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

// tutorial on using the external packages which will be interesting tutorial
export const ExtraTutorial = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  const showNoti = () => {
    toast.success("Very Good");
  };

  const showError = () => {
    toast.error("Error Occured");
  };

  return (
    <div className="App">
      <Header name={"Extras Tutorial Exploring the packages"} />
      {loading ? (
        <div className="loaderscr">
          <ThreeDots
            height="100"
            width="100"
            radius="20"
            color="#4290f5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
          <h2>LOADING....</h2>
        </div>
      ) : null}
      <ToastContainer
        position="top-right"
        draggable={true}
        closeButton={true}
        theme="colored"
      />
      <div className="btns">
        <button onClick={showNoti}>Show Notification</button>
        <button onClick={showError}>Show Error Notification</button>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MobileDatePicker defaultValue={dayjs("2022-04-17")} />
      </LocalizationProvider>
    </div>
  );
};
