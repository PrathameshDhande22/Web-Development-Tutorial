import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import { About, Home } from "./RouterTut";
import { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import DoneOutlineIcon from "@mui/icons-material/DoneOutline";

// tutorial on dynamic router contains the url parameter and search query
export const DynamicRouter = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/details" element={<Details />} />
          {/* defining the dynamic route using :parametername */}
          <Route path="/details/:userId" element={<DetailCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

// tutorial on useSearchParams hooks in react
export const Contact = () => {
  // search params means the parameter given to the url just like /api?name=Prathamesh here name is key of the params
  const [params, setParams] = useSearchParams();
  return (
    <div className="App">
      {/* use to get the value form the given parameter of url using get method */}
      <h3>{params.get("name")}</h3>
      {/* setting the parameter of the url */}
      <button onClick={() => setParams({ name: "Prathamesh", age: 22 })}>
        Click Here to set Params
      </button>
      {/* clearing the parameter of the url */}
      <button onClick={() => setParams({})}>Click Here to remove params</button>
    </div>
  );
};

export const Details = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/users`)
      .then((val) => val.json())
      .then((val) => {
        setRows(val);
      });
  }, []);

  const navi = useNavigate();

  return (
    <div className="table">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow className="tableheader">
              <TableCell>ID</TableCell>
              <TableCell align="right">Select</TableCell>
              <TableCell align="right">First Name</TableCell>
              <TableCell align="right">Last Name</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">
                  {" "}
                  <Button
                    variant="contained"
                    endIcon={<DoneOutlineIcon />}
                    onClick={() => {
                      navi(`${row.id}`);
                    }}
                  >
                    Select
                  </Button>
                </TableCell>
                <TableCell align="right">{row.name.firstname}</TableCell>
                <TableCell align="right">{row.name.lastname}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export const DetailCard = () => {
  // useParams hook is used to get the parameter of the url which we have passed
  const { userId } = useParams();
  return (
    <div className="App">
      <h3>ID : {userId}</h3>
    </div>
  );
};
