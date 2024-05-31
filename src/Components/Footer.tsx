
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="flex w-full h-96 bg-gray-950 text-white  items-center">
      <div className="w-1/3 h-96">
      
      </div>
      <div className="flex w-2/3 h-96 ">
      <div className="flex flex-col w-1/2 h-96 justify-center px-8 border-2">
        <div className="text-2xl font-bold mb-4">
          IMPORTANT LINKS
        </div>
          <Link to="/aboutus">About Us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/FAQ">FAQ</Link>
          <Link to="/tnc">Terms & Conditions</Link>
          <Link to="/career">Work with Us</Link>
          <Link to="cancelandrefund">Cancellation & Refund Policy</Link>
          <Link to="privacypolicy">Privacy Policy</Link>
        </div>
        <div className="w-1/2 h-80">
        {/* <div className="flex flex-col w-full h-80 justify-center px-8 border-2">
          
          <p>About Us</p>
          <p>Contact</p>
          <p>Terms & Conditions</p>
          <p>Work with Us</p>
          <p>Cancellation Policy</p>
          <p></p>
         
        </div> */}
        </div>
      </div>
    </div>
  )
}

export default Footer
