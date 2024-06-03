import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Booking = () => {
  const [formData,setFormData] = useState({
    source: '',
    destination : ''
  })
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
const handleChange = (e :any) => {
  const { name, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [name]: value
  }));
};

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
  const [info, setInfo] = useState<Boolean>(true)
  const toggleInfo = () => {
    setInfo(!info);
  }
  return (
    <>
      <div className="h-screen flex  flex-col">
        <div className="h-16 w-full flex flex-col justify-center items-center bg-gray-800 mt-16">
          <div className="md:w-[700px] w-full  h-16 items-center justify-center">
            <form
              className="flex md:flex-row flex-col w-full items-center justify-between h-16"
              action=""
            >
              <input
                className="md:w-60 w-1/2 h-10 rounded-xl p-2 text-black font-bold bg-white"
                placeholder="Source"
                onChange={handleChange}
                value={formData.source}
                type="text"
                name="source"
              />
              <div className="flex justify-center items-center w-16 h-10 text-white">
                • • •
              </div>
              <input
                className="md:w-60 w-1/2 h-10 rounded-xl p-2 text-black font-bold bg-white"
                type="text"
                onChange={handleChange}
                value={formData.destination}
                name="destination"
                placeholder="Destination"
              />

              <button className="w-32 h-10 p-2 bg-white rounded-xl mx-4 text-black">
                Get Your Fare
              </button>
            </form>
          </div>
        </div>
        <div className="flex w-full justify-center flex-1 pb-4 px-4 bg-gray-800">
          <div onClick={()=>{toggleInfo()}} className={`lg:flex absolute lg:h-full ${true?"h-auto":"h-0"} transition-all duration-300 bottom-0 z-30 lg:static flex-col lg:w-1/2 md:w-3/4 w-full bg-gray-900 rounded-xl overflow-hidden items-center`}>
            <div className="flex justify-evenly w-full h-16">
            <div className="relative flex flex-1 h-full bg-gray-900 text-xl font-bold text-white border-2 border-gray-900 rounded-tl-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">AUTO</div>
              </div>
            </div>
            <div className="relative flex flex-1 h-full bg-yellow-400 text-xl font-bold text-black border-2 border-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MINI</div>
              </div>
            </div>
            <div className="relative flex flex-1 h-full bg-yellow-400 text-xl font-bold text-black border-2 border-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MACRO</div>
              </div>
            </div>
            <div className="relative flex flex-1 h-full bg-yellow-400 text-xl font-bold text-black border-2 border-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">BIKE</div>
              </div>
            </div>
            </div>
            <div className='w-full flex relative md:h-4/5 p-6'>
              <div className='p-3 w-full relative h-full bg-[rgba(255,255,255,0.1)] shadow-cabCard shadow-gray-100 rounded-3xl flex flex-col items-center justify-evenly'>
              <div className='p-3 w-full flex items-center text-white justify-evenly border-2 rounded-xl'>
                  <div className='flex flex-1 flex-col justify-center items-center '>
                    <img src="logo.png" alt="" className='sm:h-32 h-16'/>
                    <p className='sm:text-xl text-lg text-white text-center font-medium'>AUTO</p>
                  </div>
                  {/* <div className='font-bold text-white flex flex-1 items-center justify-evenly text-left  h-20'> */}
                    <div className='flex flex-1 flex-col sm:text-xl text-md w-full items-center'>
                    <p className='text-center text-gray-400'>Type : Electric</p>
                    <p className='text-center text-gray-400'>Capacity : 5</p>
                    <p className='text-center text-gray-400'>Est. Time : 5 mins</p>
                    </div>
                    <div className='w-full flex flex-1 justify-center border-l-2 border-dashed border-gray-400 h-[100px] relative items-center'>
                      
                    <p className='text-center text-4xl text-green-400'> ₹500</p>
                    </div>
                    {/* <p>No hassle, Right at your doorstep</p> */}
                  {/* </div> */}
              </div>
              <div className='p-3 w-full flex items-center text-white justify-evenly border-2 mt-2 rounded-xl'>
                  <div className='flex flex-1 flex-col justify-center items-center '>
                    <img src="logo.png" alt="" className='sm:h-32 h-16'/>
                    <p className='sm:text-xl xs:text-lg text-md text-white font-medium text-center'>DRIVER NAME</p>
                  </div>
                  {/* <div className='font-bold text-white flex flex-1 items-center justify-evenly text-left  h-20'> */}
                    <div className='flex flex-1 flex-col sm:text-xl text-md w-full items-center'>
                    <p className='text-center text-gray-400'>Age : 29</p>
                    <p className='text-center text-gray-400'>Rating: 4.7</p>
                    <p className='text-center text-white sm:text-2xl text-lg'>AB01C1234</p>
                    </div>
                    <div className='w-full flex flex-1 justify-center border-l-2 border-dashed border-gray-400 h-[100px] relative items-center'>
                      
                    <p className='text-center text-xl text-green-400'></p>
                    </div>
                    {/* <p>No hassle, Right at your doorstep</p> */}
                  {/* </div> */}
              </div>
              </div>
              
            </div>
            <div className='h-16  w-full px-6 flex items-center justify-between'>
              <div className='flex items-center justify-center h-16 w-1/2 rounded-xl  '>
                  <form action="" className='text-white'>
                    <input name='coupon' type="text" placeholder='Coupon Code' className='p-2 bg-gray-800 rounded-xl' />
                    <button type='submit' className='mx-2 py-2 px-4  bg-gray-800 text-white rounded-xl'>Apply</button>
                  </form>
              </div>
              <div className='flex h-16 w-1/2 rounded-xl items-center justify-center '>
                  <form action=" " className='text-white'>
                    <label className=' font-bold px-3 py-2 bg-yellow-400 text-black' htmlFor="cash">Cash</label>
                    <input checked className='hidden' value="cash" type="radio" id='cash' name='payMethod' />
                    <label className=' font-bold px-3 py-2 bg-gray-800 ' htmlFor="online">Online</label>
                    <input  value="online" className='hidden' type="radio" id='online' name='payMethod' />
                    <button className='mx-2 py-2 px-4  bg-gray-800 text-white rounded-xl'>Book Now</button>
                  </form>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full flex bg-slate-400">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
