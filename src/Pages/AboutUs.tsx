
import Carousel from '../Components/Carousel'
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LeftAboutUs from '../Components/LeftAboutUs'
import RightAboutUs from '../Components/RightAboutUs'

const AboutUs = () => {
  return (
   <>
    <Header width='full' active='About Us' />
    <Carousel images={['logo_.png','logo.png', 'welcome.jpg']} />
    <LeftAboutUs />
    <RightAboutUs />
    <LeftAboutUs />
    <RightAboutUs />
    <Footer />
   </>
  )
}

export default AboutUs
