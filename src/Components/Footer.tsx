
import { Link } from "react-router-dom"
import Closing from "./Closing"
const Footer = () => {
  return (
    <>
    <div className="flex md:flex-row flex-col  w-full bg-gray-950 text-white   items-center">
      <div className="flex sm:flex-row flex-col md:w-2/3 w-full items-center justify-center">
      <div className="flex justify-center items-center md:w-1/2 w-full  p-6 flex-col">
          <img src="logo.png" alt="" className="lg:h-40 h-48 sm:h-32" />
          <div className="text-center lg:text-5xl text-3xl font-bold">CAB5155</div>
      </div>
      <div className="flex flex-col  md:w-1/2 w-full  items-center justify-center md:p-8 p-4 border-x-2 border-gray-700">
        <div className="lg:text-2xl text-xl font-bold mb-4">
          IMPORTANT LINKS
        </div>
        <div className="flex flex-col lg:text-md text-sm">
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/tnc">Terms & Conditions</Link>
          <Link to="/career">Work with Us</Link>
          <Link to="/cancelandrefund">Cancellation & Refund Policy</Link>
          <Link to="/privacypolicy">Privacy Policy</Link>
          </div>
        </div>
        </div>
        <div className="flex flex-col  md:w-1/3 w-full justify-center items-center md:p-8 p-4">
          <div className="lg:text-2xl text-xl font-bold mb-10 ">
            DOWNLOAD THE APP
          </div>
         <div className="md:block flex flex-col sm:flex-row md:flex-col">
            <img src="playstore.png" className="h-16 mb-10 md:mx-0 mx-2"/>
            <img src="appstore.png" className="h-16 md:mx-0 mx-2"/>
            </div>
        </div>
      
    </div>
    <Closing/>
    </>
  )
}

export default Footer
