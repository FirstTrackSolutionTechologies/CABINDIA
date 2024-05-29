import  { useState, FC } from 'react';


interface ILoginregisterProps {
  isLogin: Boolean;
  setIsLogin : React.Dispatch<React.SetStateAction<Boolean>>;
}

const CustomerLogin : FC<ILoginregisterProps> = ({isLogin, setIsLogin}) => {
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' action="">
      <input className='bg-gray-900 p-4 w-80 mb-4' type="text" name='mobile' placeholder='Your E-mail Address' />
      <input className='bg-gray-900 p-4 w-80 mb-4' type="password" name='password' placeholder='Your Password' />
      <div className='p-1 -mb-2' onClick={()=>setIsLogin(!isLogin)}>Don't have an account? Register Now</div>
      <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4'>
        Login
      </button>
    </form>
  )
}

const CustomerRegister  : FC<ILoginregisterProps> = ({isLogin, setIsLogin}) => {
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' action="">
    <input className='bg-gray-900 p-4 w-80 mb-4' type="text" name='fullName' placeholder='Full Name' />
    <input className='bg-gray-900 p-4 w-80 mb-4' type="email" name='email' placeholder='Your E-mail Address' />
    <input className='bg-gray-900 p-4 w-80 mb-4' type="text" name='mobile' placeholder='Your mobile number' />
    <input className='bg-gray-900 p-4 w-80 mb-4' type="password" name='password' placeholder='Enter Password' />
    <input className='bg-gray-900 p-4 w-80 mb-4' type="password" name='confirmPassword' placeholder='Confirm Password' />
    <div className='p-1 -mb-2' onClick={()=>setIsLogin(!isLogin)}>Already have an account? Login Now</div>
    <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4'>
      Register
    </button>
  </form>
  )
}

const RiderLogin  = () => {
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' action="">
      <input className='bg-gray-900 p-4 w-80 mb-4' type="text" name='riderId' placeholder='Your Rider Id' />
      <input className='bg-gray-900 p-4 w-80' type="password" name='password' placeholder='Your Password' />
      
      <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4'>
        Login
      </button>
    </form>
  )
}

const ChooseLogin = () => {
  const [customerLogin, setCustomerLogin] = useState<Boolean>(true)
  const [isOpen,setIsOpen] = useState<Boolean>(false)
  const [isLogin,setIsLogin] = useState<Boolean>(true)

  const togglePanel = () => {
  setIsOpen(!isOpen);
}
  return (
    <>
      <div className={`fixed top-0 right-0 ${isOpen?"w-96":"w-0"} h-full bg-white transition-all duration-300 ease-in-out z-50`}>
      <button onClick={togglePanel} className={`absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
        {isOpen ? 'X' : 'Login'}
      </button>
      <div className="flex flex-col justify-center p-4 bg-gray-900 h-screen text-white">
        <div className='w-60 h-16 text-2xl font-bold'>I AM A.....</div>
        <div className='flex w-60 h-10 text-2xl font-bold'>
        <div className={`flex justify-center items-center h-10 w-20 ${!customerLogin?"bg-gray-800 text-white":"bg-yellow-400 text-black"} text-sm`} onClick={()=>{setCustomerLogin(false)}}>Rider</div>

          <div className={` flex justify-center items-center h-10 w-20 ${customerLogin?"bg-gray-800 text-white":"bg-yellow-400 text-black"} text-sm`} onClick={()=>{setCustomerLogin(true)}}>Customer</div>
        </div>
        {(customerLogin && isLogin) && <CustomerLogin isLogin={isLogin} setIsLogin={setIsLogin} />}
        {(customerLogin && !isLogin) && <CustomerRegister  isLogin={isLogin} setIsLogin={setIsLogin} />}
        {(!customerLogin) && <RiderLogin />}

      </div>
    </div>
     
    </>
  );
};

export default ChooseLogin;
