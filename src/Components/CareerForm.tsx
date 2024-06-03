const CareerForm = () => {
  return (
    <div className="w-full flex flex-col items-center bg-gray-950 p-6">
      <div className="text-yellow-400 text-6xl font-bold text-center">
        JOIN OUR TEAM
      </div>
      <form
        action=""
        className=" md:w-[600px] w-full flex justify-center items-center flex-col py-6"
      >
        <div className="flex flex-col sm:flex-row w-full justify-between ">
          
          <input
            placeholder="First Name"
            className=" bg-gray-900 text-yellow-400 sm:w-[300px] w-full mr-3 my-3 p-3 rounded-xl"
            type="text"
            name="fname"
          />
          <input
            placeholder="Last Name"
            className="bg-gray-900 text-yellow-400  sm:ml-3 sm:my-3 p-3 rounded-xl sm:w-[300px] w-full"
            type="text"
            name="lname"
          />
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-between ">
          
          <input
            placeholder="email"
            className=" bg-gray-900 text-yellow-400 sm:w-[300px] w-full mr-3 my-3 p-3 rounded-xl"
            type="email"
            name="email"
          />
          <input
            placeholder="Mobile"
            className="bg-gray-900 text-yellow-400  sm:ml-3 sm:my-3 p-3 rounded-xl sm:w-[300px] w-full"
            type="text"
            name="mobile"
          />
        </div>
        <input
          placeholder="Street Address"
          className=" bg-gray-900 text-yellow-400 mt-3 sm:my-3 w-full py-3 px-3 rounded-xl"
          type="text"
          name="address"
        />
        <div className="flex flex-col sm:flex-row w-full justify-between ">
          
          <input
            placeholder="city"
            className=" bg-gray-900 text-yellow-400 sm:w-[300px] w-full mr-3 my-3 p-3 rounded-xl"
            type="text"
            name="city"
          />
          <input
            placeholder="state"
            className="bg-gray-900 text-yellow-400  sm:ml-3 sm:my-3 p-3 rounded-xl sm:w-[300px] w-full"
            type="text"
            name="state"
          />
        </div>
        <div className="flex flex-col sm:flex-row w-full justify-between ">
          
          <input
            placeholder="pincode"
            className=" bg-gray-900 text-yellow-400 sm:w-[300px] w-full mr-3 my-3 p-3 rounded-xl"
            type="text"
            name="pincode"
          />
          <input
            placeholder="Country"
            className="bg-gray-900 text-yellow-400  sm:ml-3 sm:my-3 p-3 rounded-xl sm:w-[300px] w-full"
            type="text"
            name="country"
          />
        </div>
        <textarea
          placeholder="About Yourself"
          className="h-48 bg-gray-900 text-yellow-400  my-3 w-full py-3 px-3 rounded-xl"
          name="about"
        />
        <div className=" flex w-full justify-center ">
          {/* <label htmlFor="dl" className="bg-gray-900 text-white p-3 rounded-xl">
            Aadhar Card
        </label>
        <input id="dl" name="dl" type="file" className="hidden bg-gray-900 text-white p-3 rounded-xl" />
        <label htmlFor="dl" className="bg-gray-900 text-white p-3 rounded-xl">
            Driving License
        </label>
        <input id="dl" name="dl" type="file" className="hidden bg-gray-900 text-white p-3 rounded-xl" /> */}
          <label htmlFor="dl" className="bg-gray-900 text-white p-3 rounded-xl">
            Resume/CV
          </label>
          <input
            id="dl"
            name="dl"
            type="file"
            className="hidden bg-gray-900 text-white p-3 rounded-xl"
          />
        </div>
        <div className="w-full my-6 relative">
          <button className="absolute right-0 py-3 px-10 bg-gray-900 text-white rounded-xl">
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default CareerForm;
