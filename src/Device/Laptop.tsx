import Index from "../Pages/Index";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
import Dashboard from "../Pages/Dashboard";
import Career from "../Pages/Career";
import ContactUs from "../Pages/ContactUs";
import CabServices from "../Pages/CabServices";
import RiderDash from "../Pages/RiderDash";
import Header from "../Components/Header";
import { useState } from "react";
const Laptop = () => {
  const [isCustLoggedIn, setCustIsLoggedIn] = useState<Boolean>(false)
  return (
    <>
      <Header width='full' active="Home" isLoggedIn={false} setCustIsLoggedIn={setCustIsLoggedIn} isCustLoggedIn={isCustLoggedIn} />
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/dashboard" element={<Dashboard isCustLoggedIn={isCustLoggedIn} />} />
        <Route path="/career" element={<Career/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/cabs" element={<CabServices/>} />
        <Route path="/RiderDash" element={<RiderDash/>} />
        <Route path="*" element={<AboutUs/>} />
      </Routes>
    </>
  );
};

export default Laptop;
