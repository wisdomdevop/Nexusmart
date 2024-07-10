import React from 'react'
import { Link } from 'react-router-dom'
import Stats from '../components/Stats'

const Hero = () => {
  return (
    <section className='flex flex-col lg:flex-row lg:justify-around lg:p-10 items-center gap-10 lg:gap-2 justify-center mt-8  md:p-16
    '>
        <section className='lg:w-[50%] w-[90%] items-center justify-center mx-auto animate-slideIn'>

            <div className='font-medium text-lg flex flex-col gap-10 justify-center items-center lg:items-start'>
                <p className='text-coral-red text-base font-normal text-center lg:text-start'>
                    Discover the latest in technology and innovation.
                </p>
                <h1 className='text-xl font-bold md:text-3xl lg:text-4xl lg:w-[60%] w-[90%] text-center lg:text-start '>
                    Join the Tech Revolution with <span className='text-coral-red'>NexusMart!</span>
                </h1>
                <p className='lg:w-[50%] text-zinc-800 font-normal md:font-medium w-[90%] text-center lg:text-start '>Your Ultimate Destination for Electronics, Gadgets, and Accessories</p>
            
            </div>

            <div className='mt-12 text-center lg:text-left '>
                <button className='text-center mx-auto hover:animate-bounce '>
                    <Link to='/product' className='bg-black text-white p-3 rounded-xl px-9 mx-auto text-center '>Shop Now</Link>
                </button>
            </div>

            <section>
                <Stats/>
            </section>

        </section>

        <section className='lg:w-[40%] bg-black flex items-center rounded-3xl w-[80%] p-3 justify-center lg:mb-12 animate-slideDown  '>
            <div className='w-[100%] text-center flex justify-center '>
                <img src="/hero5.jpg" alt="" className='bg-white w-[100%] ' />
            </div>
        </section>
    </section>
  )
}

export default Hero