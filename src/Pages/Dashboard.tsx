import { useEffect } from 'react';
import Booking from '../Components/Booking'
import { useNavigate } from 'react-router-dom'

const Dashboard = ({isLoggedIn} : any) => {
  const navigate = useNavigate();
  useEffect(()=>{
    isLoggedIn?(''):(navigate('/'))
  },[])
  return (
    <>
        {isLoggedIn?<Booking />:null}
    </>
  )
}

export default Dashboard
