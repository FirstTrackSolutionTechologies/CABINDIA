import Header from '../Components/Header'
import Carousel from '../Components/Carousel'
import LeftAboutUs from '../Components/LeftAboutUs'
import RightAboutUs from '../Components/RightAboutUs'
import Footer from '../Components/Footer'
import CareerForm from '../Components/CareerForm'

const Career = () => {
  return (
    <>
        <Header width='full' active='Career' isLoggedIn={true} />
        <Carousel images={['logo.png','logo_.png','welcome.jpg', 'career_1.jpg']} />
        <CareerForm />
        <LeftAboutUs />
        <RightAboutUs />
        <LeftAboutUs />
        <RightAboutUs />
        <Footer />
    </>
  )
}

export default Career
