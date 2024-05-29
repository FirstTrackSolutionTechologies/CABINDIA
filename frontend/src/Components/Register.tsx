import  { useState } from 'react';




const CustomerLogin= () => {
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' action="">
      <input className='bg-gray-900 p-4 w-80 mb-4' type="text" name='mobile' placeholder='Your E-mail Address' />
      <input className='bg-gray-900 p-4 w-80' type="password" name='password' placeholder='Your Password' />
      <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4'>
        Login
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
        <div className={`flex justify-center items-center h-10 w-20 ${!customerLogin?"bg-gray-800 text-white":"bg-yellow-300 text-black"} text-sm`} onClick={()=>{setCustomerLogin(false)}}>Rider</div>

          <div className={` flex justify-center items-center h-10 w-20 ${customerLogin?"bg-gray-800 text-white":"bg-yellow-300 text-black"} text-sm`} onClick={()=>{setCustomerLogin(true)}}>Customer</div>
        </div>
        {customerLogin && <CustomerLogin />}
      {!customerLogin && <RiderLogin />}
      </div>
    </div>
     
    </>
  );
};

export default ChooseLogin;
