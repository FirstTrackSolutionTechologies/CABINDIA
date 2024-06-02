
import Header from '../Components/Header'
import Welcome from '../Components/Welcome'
import Register from '../Components/Register'

const Index = () => {
  return (
    <>
        <Header width='full' active="Home" isLoggedIn={false} />
        <Welcome />
    </>
  )
}

export default Index
