const Booking = () => {
  return (
    <>
      <div className="h-screen flex flex-col">
        <div className="h-16 w-full flex flex-col justify-center items-center bg-gray-800 mt-16">
          <div className="w-[700px] min-w-[700px] h-16 items-center justify-center">
            <form
              className="flex w-full items-center justify-between h-16"
              action=""
            >
              <input
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
                placeholder="Source"
                type="text"
                name="source"
              />
              <div className="flex justify-center items-center w-16 h-10 text-white">
                • • •
              </div>
              <input
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
                type="text"
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
          <div className="flex flex-col w-2/5 bg-gray-900 rounded-l-xl overflow-hidden justify-center items-center">
            <div className="relative w-full h-1/5 bg-gray-900 text-3xl font-bold text-white border-2 rounded-tl-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">AUTO</div>
              </div>
            </div>
            <div className="relative w-full h-1/5 bg-gray-900 text-3xl font-bold text-white border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MINI</div>
              </div>
            </div>
            <div className="relative w-full h-1/5 bg-gray-900 text-3xl font-bold text-white border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">MACRO</div>
              </div>
            </div>
            <div className="relative w-full h-1/5 bg-gray-900 text-3xl font-bold text-white border-2">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">BIKE</div>
              </div>
            </div>
            <div className="relative w-full h-1/5 bg-gray-900 text-3xl font-bold text-white border-2 rounded-bl-xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" p-8 ">TRNASPORT</div>
              </div>
            </div>
            
          </div>
          <div className="flex w-3/5 bg-blue-400 rounded-r-xl justify-center items-center font-bold text-4xl">
            MAP
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
