import Index from "../Pages/Index";
import { Routes, Route } from "react-router-dom";
import AboutUs from "../Pages/AboutUs";
const Laptop = () => {
  return (
    <>
      <Routes>
        <Route index element={<Index/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
      </Routes>
    </>
  );
};

export default Laptop;
