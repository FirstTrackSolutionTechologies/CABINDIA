import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import axios from 'axios';
import RideCard from './RideCard';

const Booking = () => {
  const [formData,setFormData] = useState({
    source: '',
    destination : ''
  })
  setFormData({source: '', destination:''})
  const containerStyle = {
    width: '100%',
    height: '100%',

  };
  
  const [center,setCenter] = useState({
    lat: 26.6469618,
    lng: 84.9088929
  });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyDOvHfx4YllThHklrc1ngcYVLuRNBYnHM0' // Replace with your API key
});

const [markerPosition, setMarkerPosition] = useState(center);
// const [coordinates, setCoordinates] = useState<{lat : number, lng:number} | null>(null);

const handleMapClick = async (event : any) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setMarkerPosition({ lat, lng });
    // setCoordinates({ lat, lng });

    const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(formData.source)}&key=AIzaSyDOvHfx4YllThHklrc1ngcYVLuRNBYnHM0`);
    if (response.data.results.length > 0) {
      const { lat, lng } = response.data.results[0].geometry.location;
      setCenter({ lat, lng });
      setMarkerPosition({ lat, lng });
    } else {
        
    }
};
// const handleChange = (e :any) => {
//   const { name, value } = e.target;
//   setFormData((prevData) => ({
//     ...prevData,
//     [name]: value
//   }));
// };

useEffect(() => {
  // Get user's current location
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
          (position) => {
              const { latitude, longitude } = position.coords;
              setCenter({ lat: latitude, lng: longitude });
              setMarkerPosition({ lat: latitude, lng: longitude });
          },
          (error) => {
              console.error('Error getting user location:', error);
          }
      );
  } else {
      console.error('Geolocation is not supported by this browser.');
  }
}, []);
  const [step, setStep] = useState<number>(0)
  const stepUp = () => {
    if (step==3) return
    setStep(step+1);
  }
  // const stepDown = () => {
  //   if (step ==0) return
  //   setStep(step-1);
  // }
  return (
    <>
      <div className='absolute inset-0 pt-16 flex justify-center items-center'>
      {isLoaded ? (
        <>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={16}
                onClick={handleMapClick}
                // onCenterChanged={() => setCenter((window as any).google.maps.getCenter())}
            >
                <Marker position={markerPosition} />
            </GoogleMap>
           
        </>
    ) : <></>} 
        <div onClick={()=>stepUp()} className={`absolute ${step==0?"":"hidden"} bottom-0 md:w-[700px] w-full bg-white py-4`}>
          <div className='w-full text-xl text-center p-2 font-bold'>
            CHOOSE YOUR WAY
          </div>
          <div className='relative'>
          <div className='absolute bottom-[73px] left-[8%] h-14 border-r-[4px] w-[12px] border-gray-500'>
                    <div className='relative h-full '>
                      <p className='absolute text-5xl top-0 h-1 flex items-center justify-center'>•</p>
                      <p className='absolute text-5xl bottom-0 h-1 flex items-center justify-center '>•</p>
                    </div>
              </div>
            <form
            className="w-full flex flex-col justify-center items-center "
            action=""
          >

              <input
                className="bg-gray-100 p-2 w-4/5 rounded-3xl mb-3"
                placeholder="Source"
                type="text"
                name="source"
              />
            
              <input
                className="bg-gray-100 p-2 w-4/5 rounded-3xl mb-3"
                type="text"
                name="destination"
                placeholder="Destination"
              />
            

            <button className="w-4/5 p-2 rounded-3xl bg-gray-200 ">
              Get Your Fare
            </button>
          </form>
          
          </div>
        </div>

        <div onClick={()=>stepUp()} className={`absolute ${step==1?"":"hidden"} bottom-0 sm:w-[500px] w-full bg-white py-4`}>
        <div className='w-full text-xl text-center p-2 font-bold'>
            CHOOSE YOUR RIDE
          </div>
          <RideCard />
          <RideCard />
          <RideCard />
          <RideCard />
        </div>

        <div onClick={()=>stepUp()} className={`absolute ${step==2?"":"hidden"} bottom-0 sm:w-[500px] w-full bg-white py-4 flex flex-col justify-center items-center`}>
          <div className='w-full text-xl text-center p-2 font-bold'>
            CHOOSE YOUR PAY METHOD
          </div>
          <div className='w-full flex flex-col items-center py-4'>
            <div className='w-full flex justify-center border'> 
            <label htmlFor="cash" className='py-4  w-4/5 text-center '>Cash</label>
            </div>
            <div className='w-full flex justify-center border mb-4'>
            
            <label htmlFor="online" className='py-4 w-4/5 text-center'>Online</label>
            </div>
            <form action="" className='w-full flex px-4'>
              <input className='flex-1 p-2 border-2' type="text" placeholder='Coupon Code' />
              <button className='px-4 py-2 border-2'>Apply</button>
            </form>
          </div>
          
        </div>

        <div onClick={()=>stepUp()} className={`absolute ${step==3?"":"hidden"} bottom-0 sm:w-[400px] w-full bg-white py-4 flex flex-col justify-center items-center`}>
        <div className='w-full text-xl text-center p-2 font-bold'>
            YOUR RIDE INFO
          </div>
          <div className='w-full px-4 flex my-3'>
            <img src="logo.png" alt="" className='w-24 h-24 border' />
            <div className='h-24 flex-1 flex flex-col items-center justify-center'>
              <p className='font-bold'>Aditya Kumar Prakash</p>
              <p className=''>Mahindra SUV</p>
              <p className=''>MH12B1234</p>
            </div>
          </div>
          <div className='w-full px-4 my-3'>
            <p className='font-bold text-center text-lg mb-2'>DRIVER DETAILS</p>
            <div className='flex'>
            <img src="logo.png" alt="" className='w-18 h-24 border' />
            <div className='flex-1'>
              <p className='font-bold text-center'>Aditya Kumar Prakash</p>
              <p className='text-center'>Rating : 4.5</p>
              <p className='text-center'>Age: 37</p>
            </div>
            </div>
            <button className='px-4 py-2 w-full border border-green-400 my-2 text-green-400'>Call Now</button>
          </div>
          <div className='w-full px-4 my-3'>
            <p className='font-bold text-center text-lg'>FARE DETAILS</p>
            <div className="relative px-3 h-6">
                <p className="mx-3 flex relative">
                    <p className="absolute left-0">Source</p>
                    <p className="absolute right-0">Motihari</p>
                </p>
            </div>
            <div className="relative px-3 h-6">
                <p className="mx-3 flex relative">
                    <p className="absolute left-0">Destination</p>
                    <p className="absolute right-0">Bhagalpur</p>
                </p>
            </div>
            <div className="relative px-3 h-6">
                <p className="mx-3 flex relative">
                    <p className="absolute left-0">Estd. Time</p>
                    <p className="absolute right-0">35 mins</p>
                </p>
            </div>
            <div className="relative px-3 h-6">
                <p className="mx-3 flex relative">
                    <p className="absolute left-0">Distance</p>
                    <p className="absolute right-0">15 Km</p>
                </p>
            </div>
            <div className="relative px-3 h-6">
                <p className="mx-3 flex relative">
                    <p className="absolute left-0">Estd Fare</p>
                    <p className="absolute right-0">₹520</p>
                </p>
            </div>
            <button className='px-4 py-2 w-full border my-2 text-red-400 border-red-400'>Cancel Ride</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
