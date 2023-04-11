import "./App.css";
import Header from "./Components/Header";
import TextField from "@mui/material/TextField";
import { Stack } from "@mui/material";
import Button from "@mui/material/Button";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Divider from "@mui/material/Divider";

// project based on useState react hooks
const Project1 = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({});

  const storeData = () => {
    if (form !== "") {
      setData([...data, form]);
      setForm("");
    }
  };

  const deleteData = (index) => {
    data.splice(index, 1);
    setData([...data]);
  };

  return (
    <div className="App">
      <Header name={"Record"} />
      <div className="formwindow">
        <Stack spacing={3} direction={"row"} alignItems={"center"}>
          <TextField
            className="outline"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          <TextField
            className="outline"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
            }}
          />
          <Button variant="contained" onClick={storeData}>
            <AddCircleIcon />
          </Button>
        </Stack>
      </div>
      <div className="detailwindow">
        <span>Name</span>
        <span>Email</span>
        <span>Remove</span>
      </div>
      <Divider style={{ height: "4px", color: "black " }} />

      {data.map((element, index) => {
        return (
          <div className="records" key={index}>
            <div className="detailwindow">
              <span>{element.name}</span>
              <span>{element.email}</span>
              <Button
                variant="contained"
                onClick={() => {
                  deleteData(index);
                }}
                color="success"
              >
                <DeleteOutlineIcon />
              </Button>
            </div>
            <Divider />
          </div>
        );
      })}
    </div>
  );
};

export default Project1;
