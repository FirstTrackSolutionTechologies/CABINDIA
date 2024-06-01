
import { navItems } from "../Constants"
import { NavItem } from "./Header"
const Menu = ({isOpen} :any) => {
     const togglePanel = () => {
        
     }
  return (
    <>
      <div className={`fixed top-0 right-0 ${isOpen?"w-96":"w-0"} h-full bg-white transition-all duration-300 ease-in-out z-50`}>
      <button onClick={togglePanel} className={`md:block hidden absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
        {isOpen ? 'X' : 'Login'}
      </button>
      <div className="flex flex-col justify-center p-4 bg-gray-900 h-screen text-white">
        <div className='w-60 h-16 text-2xl font-bold'>I AM A.....</div>
        <div className='flex w-60 h-10 text-2xl font-bold'>
        <div className={`flex justify-center items-center h-10 w-20  text-sm`} >Rider</div>

          <div className={` flex justify-center items-center h-10 w-20  text-sm`} >Customer</div>
        </div>
       

      </div>
    </div>
     
    </>
  )
}

export default Menu
