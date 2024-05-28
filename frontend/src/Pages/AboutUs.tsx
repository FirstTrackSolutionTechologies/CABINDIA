
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import LeftAboutUs from '../Components/LeftAboutUs'
import RightAboutUs from '../Components/RightAboutUs'

const AboutUs = () => {
  return (
   <>
    <Header width='full' active='About US' />
    <LeftAboutUs />
    <RightAboutUs />
    <LeftAboutUs />
    <RightAboutUs />
    <Footer />
   </>
  )
}

export default AboutUs
