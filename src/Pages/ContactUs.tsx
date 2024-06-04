import Carousel from '../Components/Carousel'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import SubFooter from '../Components/SubFooter'

const ContactUs = () => {
  return (
    <>
        <Carousel images={['logo.png',  'welcome.jpg']} />
        <Contact />
        <SubFooter />
        <Footer />
    </>
  )
}

export default ContactUs
