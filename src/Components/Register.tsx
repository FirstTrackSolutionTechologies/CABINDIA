import  { useState, FC,  } from 'react';
import { useNavigate } from 'react-router-dom';


interface ILoginregisterProps {
  isLogin: Boolean;
  setIsLogin : React.Dispatch<React.SetStateAction<Boolean>>;
}

const CustomerLogin : FC<ILoginregisterProps> = ({isLogin, setIsLogin}) => {
  const navigate = useNavigate()
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent the default form submission

    // Manually collect form data
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

    const data = {
      email,
      password,
    };

    // Make the API call
    fetch('/.netlify/functions/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          navigate('/dashboard');
          // Handle successful login
        } else {
          alert('Login failed: ' + result.message);
          // Handle login failure
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
  };
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' onSubmit={handleLogin}>
      <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="text" name='email' placeholder='Your E-mail Address' />
      <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="password" name='password' placeholder='Your Password' />
      <div className='p-1 -mb-2' onClick={()=>setIsLogin(!isLogin)}>Don't have an account? Register Now</div>
      <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4' type='submit'>
        Login
      </button>
    </form>
  )
}

const CustomerRegister  : FC<ILoginregisterProps> = ({isLogin, setIsLogin}) => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent the default form submission

    // Manually collect form data
    const email = (document.querySelector('input[name="email"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;
    const name = (document.querySelector('input[name="fullName"]') as HTMLInputElement).value;
    const confirmPassword = (document.querySelector('input[name="confirmPassword"]') as HTMLInputElement).value;
    const mobile = (document.querySelector('input[name="mobile"]') as HTMLInputElement).value;

    const data = {
      name,
      email,
      mobile,
      password,
      confirmPassword,
    };

    // Make the API call
    fetch('/.netlify/functions/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          alert('Register successful!');
          // Handle successful login
        } else {
          alert('Register failed: ' + result.message);
          // Handle login failure
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during Register');
      });
  };
  return (
    <form className='text-yellow-400 bg-gray-800 p-4' onSubmit={handleLogin}>
    <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="text" name='fullName' placeholder='Full Name' />
    <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="email" name='email' placeholder='Your E-mail Address' />
    <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="text" name='mobile' placeholder='Your mobile number' />
    <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="password" name='password' placeholder='Enter Password' />
    <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="password" name='confirmPassword' placeholder='Confirm Password' />
    <div className='p-1 -mb-2' onClick={()=>setIsLogin(!isLogin)}>Already have an account? Login Now</div>
    <button className=' w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4' type='submit'>
      Register
    </button>
  </form>
  )
}


const RiderLogin: React.FC = () => {
  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();  // Prevent the default form submission

    // Manually collect form data
    const riderId = (document.querySelector('input[name="riderId"]') as HTMLInputElement).value;
    const password = (document.querySelector('input[name="password"]') as HTMLInputElement).value;

    const data = {
      riderId,
      password,
    };
    
    // Make the API call
    fetch('/.netlify/functions/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(result => {
        if (result.success) {
          alert('Login successful!');
          
          // Handle successful login
        } else {
          alert('Login failed: ' + result.message);
          // Handle login failure
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('An error occurred during login');
      });
  };

  return (
    <form id='myForm' className='text-yellow-400 bg-gray-800 p-4' onSubmit={handleLogin}>
      <input className='bg-gray-900 p-4 xs:w-80 w-full mb-4' type="text" name='riderId' placeholder='Your Rider Id' />
      <input className='bg-gray-900 p-4 xs:w-80 w-full' type="password" name='password' placeholder='Your Password' />
      
      <button className='w-32 p-4 bg-yellow-400 text-black font-bold rounded-xl mt-4' type="submit">
        Login
      </button>
    </form>
  );
};


const ChooseLogin = ({togglePanel, isOpen} : any) => {
  const [customerLogin, setCustomerLogin] = useState<Boolean>(true)
  const [isLogin,setIsLogin] = useState<Boolean>(true)
  
  
  return (
    <>
      <div className={`fixed z-50 top-0 right-0 ${isOpen?"md:w-96 w-full":"w-0"} h-full bg-white transition-all duration-300 ease-in-out z-50`}>
      <button onClick={togglePanel} className={`md:block hidden absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
        {isOpen ? 'X' : 'Login'}
      </button>
      <button onClick={togglePanel} className={`${isOpen?"md:hidden block":"hidden"} absolute top-4 right-4 px-4 py-2 bg-yellow-400 text-black font-bold rounded-md`}>
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
