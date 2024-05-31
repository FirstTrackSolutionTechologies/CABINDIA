import Carousel from "../Components/Carousel"
import Footer from "../Components/Footer"
import Header from "../Components/Header"


const RightServiceCard = () => {
    return (
        <>
            <div className="flex w-full bg-gray-800 h-96 justify-center items-center py-8">
                <div className="flex w-4/5 min-w-[1000px] h-80 bg-gray-900">
                    <div className="w-1/3 h-80 bg-yellow-400">
                        <img src="logo.png" alt="" />
                    </div>
                    <div className="flex flex-col justify-center w-2/3 h-80 bg-gray-700 text-white font-md p-4">
                        <div className="text-3xl my-2">
                            SERVICE TITLE
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!                    
                    </div>
                </div>
            </div>
        </>
    )
}

const LeftServiceCard = () => {
    return (
        <>
            <div className="flex w-full bg-gray-800 h-96 justify-center items-center py-8">
                <div className="flex w-4/5 min-w-[1000px] h-80 bg-gray-900">
                    <div className="flex flex-col justify-center w-2/3 h-80 bg-gray-700 text-white font-md p-4">
                        <div className="text-3xl my-2">
                            SERVICE TITLE
                        </div>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas facilis maxime, atque iure deleniti maiores, nihil aliquam dicta molestias praesentium esse eaque, veritatis blanditiis eos libero excepturi hic beatae a!                    
                    </div>
                    <div className="w-1/3 h-80 bg-yellow-400">
                        <img src="logo.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}



const CabServices = () => {
  return (
    <>
        <Header width="full" active="Cabs" isLoggedIn={true} />
        <Carousel images={['career_1.jpg']} />
        <div className="w-full h-32 py-8 bg-gray-800 flex justify-center items-center text-5xl font-bold text-white">
            WE ARE ALWAYS AT YOUR SERVICE
        </div>
        <RightServiceCard />
        <LeftServiceCard />
        <RightServiceCard />
        <LeftServiceCard />
        <RightServiceCard />
        <Footer />
    </>
  )
}

export default CabServices
