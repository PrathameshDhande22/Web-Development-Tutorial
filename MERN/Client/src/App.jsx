import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  About,
  Contact,
  Home,
  Login,
  Register,
  Services,
  Error,
  Logout,
  Admin,
  AdminContact,
  AdminUsers,
  AdminServices,
  AdminUserEdit,
} from "./Page";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProtectedAccess } from "./Components/ProtectedAccess";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover={false}
          theme="colored"
        />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route element={<ProtectedAccess />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/admin" element={<Admin />}>
            <Route index path="users" element={<AdminUsers />} />
            <Route path="contacts" element={<AdminContact />} />
            <Route path="services" element={<AdminServices />} />
            <Route path="user/:id/edit" element={<AdminUserEdit />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
export default App;
