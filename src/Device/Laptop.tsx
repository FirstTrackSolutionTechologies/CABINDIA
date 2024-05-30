import Index from "../Pages/Index";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Dashboard from "../Pages/Dashboard";
import Career from "../Pages/Career";
import ContactUs from "../Pages/ContactUs";
const Laptop = () => {
  return (
    <>
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<ContactUs/>} />
      </Routes>
    </>
  );
};

export default Laptop;
