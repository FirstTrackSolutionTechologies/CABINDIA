import Carousel from '../Components/Carousel'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'

const ContactUs = () => {
  return (
    <>
        <Carousel images={['logo.png', 'logo_.png', 'welcome.jpg']} />
        <Contact />
        <Footer />
    </>
  )
}

export default ContactUs
