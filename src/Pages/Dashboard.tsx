import Booking from '../Components/Booking'
import Header from '../Components/Header'

const Dashboard = () => {
  

  return (
    <>
        <Header width='full' active='' isLoggedIn={true} />
        <Booking />
        
    </>
  )
}

export default Dashboard
