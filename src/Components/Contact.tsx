

const Contact = () => {
  return (
    <>
    <div className='w-full flex flex-col justify-center items-center bg-gray-900'>
      {/* <div className=" flex justify-center items-center text-white text-3xl font-bold w-[900px] p-4">
        WANT TO REACH OUT TO US?
      </div> */}
      <div className="flex w-[1100px] justify-between items-center p-16">
    <div className="w-[600px] p-4 text-6xl font-bold text-white" >
      CONTACT US FROM <span className="text-yellow-400">ANY PART OF THE WORLD</span>
    </div>
      <form action="" className="h-96 flex flex-col justify-between py-6 w-96">
        <input className="w-80 p-2 rounded-xl" type="text" name="name" placeholder="Your good name" />
        <input className="w-80 p-2 rounded-xl" type="email" name="email" placeholder="Your E-mail Address" />
        <textarea name="message" className="h-32 w-96 p-2 rounded-xl" placeholder="Your Message" />
        <button className="w-32 h-10 p-2 bg-white rounded-xl  text-black">
              Submit
        </button>
      </form>
    </div>
    </div>
    </>
  )
}

export default Contact
