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
const [address, setAddress] = useState<string | null>(null);

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

  return (
    <>
      <div className="h-screen flex  flex-col">
        <div className="h-16 w-full flex flex-col justify-center items-center bg-gray-800 mt-16">
          <div className="w-[700px] min-w-[700px] h-16 items-center justify-center">
            <form
              className="flex w-full items-center justify-between h-16"
              action=""
            >
              <input
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
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
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
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
        <div className="flex flex-1 pb-4 px-4 bg-gray-800">
          <div className="flex flex-col w-1/2 bg-gray-900 rounded-xl overflow-hidden items-center">
            <div className="flex w-full h-32">
            <div className="relative w-1/4 h-full bg-gray-900 text-xl font-bold text-white border-2 rounded-tl-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">AUTO</div>
              </div>
            </div>
            <div className="relative w-1/4 h-full bg-yellow-400 text-xl font-bold text-black border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MINI</div>
              </div>
            </div>
            <div className="relative w-1/4 h-full bg-yellow-400 text-xl font-bold text-black border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MACRO</div>
              </div>
            </div>
            <div className="relative w-1/4 h-full bg-yellow-400 text-xl font-bold text-black border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">BIKE</div>
              </div>
            </div>
            </div>
          </div>
          <div className="w-1/2 flex bg-slate-400">
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
