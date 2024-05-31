
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Register from '../Components/Register'

const Index = () => {
  return (
    <>
        <Header width='2/3' active="Home" isLoggedIn={false} />
        <Welcome />
        <Register />
    </>
  )
}

export default Index
