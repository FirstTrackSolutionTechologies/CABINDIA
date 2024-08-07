

const RideCard = ({stepUp} : any) => {
  return (
    <div onClick={()=>stepUp((prev : any)=>(prev+1))} className='w-full h-20 flex relative justify-center items-center bg-white border-b-2'>
                  <img src="logo.png" alt="" className='h-4/5 rounded-full overflow-hidden shadow-userCard absolute left-0 mx-2' />
                  
                  <div className='relative h-16 px-3'>
                    <p className='font-bold'>AUTO</p>
                    <p className='text-sm'>Capacity : 5</p>
                    <p className='text-sm'>5 minutess</p>
                  </div>
                  <div className='absolute h-16 w-16 right-0 rounded-full mx-2 text-xl font-bold flex items-center justify-center'>
                    ₹500
                  </div>
                </div>
  )
}

export default RideCard
