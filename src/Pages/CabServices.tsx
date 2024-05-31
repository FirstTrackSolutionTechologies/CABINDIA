import Carousel from "../Components/Carousel"
import Header from "../Components/Header"


const ServiceCard = () => {
    return (
        <>
            <div className="flex w-full bg-gray-800 h-96 justify-center items-center">
                <div className="flex w-4/5 min-w-[1000px] h-96 bg-gray-900">
                    <div className="w-1/3 h-96 bg-gray-800"></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

const Services = () => {
  return (
    <>
        <Header width="full" active="Cabs" />
        <Carousel images={['career_1.jpg']} />
        <div className="w-full h-32 py-8 bg-gray-800 flex justify-center items-center text-5xl font-bold text-white">
            WE ARE ALWAYS AT YOUR SERVICE
        </div>
        <ServiceCard />
    </>
  )
}

export default Services
