import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Home, Login, Register, Services } from "./Page";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
