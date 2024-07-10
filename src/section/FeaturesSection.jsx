import React from 'react'

const FeaturesSection = () => {
  return (
    <div className='mt-24 bg-black text-white flex flex-col gap-10 p-10 py-20'>
        <section>
            <h1 className='font-semibold text-lg md:text-3xl '>
            Why Shop With Nexusmart?</h1>
        </section>

        <section>
            <div className='flex md:justify-around flex-col md:flex-row justify-center items-center gap-10'> 

                <div  className='flex flex-col p-5 md:w-[30%] shadow-3xl gap-5 w-[80%] rounded-2xl shadow-orange-200 md:animate-none animate-slideIn'>
                    <img src="/ship.svg" alt="" width={34} className='bg-coral-red rounded-2xl' />
                    <h1 className='font-bold font-poppins'>
                        Free Shipping
                    </h1>
                    <p className='text-base md:text-lg font-normal'>
                        Enjoy seamless shopping with our complimentary shipping service.
                    </p>
                </div>
              <div className='flex flex-col p-5 md:w-[30%] shadow-3xl gap-5 w-[80%] rounded-2xl shadow-orange-200 md:animate-none animate-slideIn'>
                    <img src="/shield.svg" alt=""  className='bg-coral-red rounded-2xl 'width={35}/>
                    <h1 className='font-bold font-poppins' >
                        Secure Payment
                    </h1>
                    <p className='text-base md:text-lg font-normal'>
                        Experience worry-free transactions with our secure payment options.
                    </p>
                </div>

                      <div className='flex flex-col p-5 md:w-[30%] shadow-3xl gap-5 w-[80%] rounded-2xl shadow-orange-200 md:animate-none animate-slideIn'>
                    <img src="/support.svg" alt="" className='bg-coral-red rounded-2xl' width={35}/>
                    <h1 className='font-bold font-poppins'>
                        Customer Support
                    </h1>
                    <p className='text-base md:text-lg font-normal'>
                        24/7 customer support for all your needs.
                    </p>
                </div>


            </div>
        </section>
    </div>
  )
}

export default FeaturesSection