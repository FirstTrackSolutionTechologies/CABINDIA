import Carousel from '../Components/Carousel'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Header from '../Components/Header'

const ContactUs = () => {
  return (
    <>
        <Header width='full' active="" />
        <Carousel images={['logo.png', 'logo_.png', 'welcome.jpg']} />
        <Contact />
        <Footer />
    </>
  )
}

export default ContactUs
