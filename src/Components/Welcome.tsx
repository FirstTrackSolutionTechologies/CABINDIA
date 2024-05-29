const Welcome = () => {
  const welcome = "welcome.jpg";
  return (
    <div className="flex h-screen bg-gray-900">
      <div className="flex-col text-white w-2/3 bg-gray-900 flex items-center justify-center ">
        <div className="flex justify-center items-center flex-col">
        <p className="text-5xl font-extrabold">GET YOUR <span className="text-yellow-400">FIRST RIDE</span> NOW</p>
        <p className="text-xl text-white">BIKES • CARS • TRANSPORTATION • SCHEDULED RIDES</p>
        <div>
          <form
            className="flex w-full items-center justify-between mt-16"
            action=""
          >
            <div className="flex flex-col w-60">
              <input
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
                placeholder="Source"
                type="text"
                name="source"
              />
            </div>
            <div className="flex justify-center items-center w-16 h-10">
              • • •
            </div>
            <div className="flex flex-col w-60">
              <input
                className="w-60 h-10 rounded-xl p-2 text-black font-bold bg-white"
                type="text"
                name="destination"
                placeholder="Destination"
              />
            </div>

            <button className="w-32 h-10 p-2 bg-white rounded-xl mx-4 text-black">
              Get Your Fare
            </button>
          </form>
        </div>
        </div>
      </div>
      <div className="absolute right-0 w-[40%] bg-black rounded-tl-[85%] overflow-hidden">
        <div className="w-full bg-gray-300 flex items-center justify-center ">
            <div className="overflow-hidden bg-black border-none">
          <img className="w-full h-screen " src={welcome} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
