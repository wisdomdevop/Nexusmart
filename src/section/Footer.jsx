import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-black text-white mt-24'>
        <section className='p-8 flex flex-col gap-10'>
            <div>
                <img src="/nexus.jpg" alt="" width={120} />
                <h1>Discover top-tier electronics - blending cutting-edge tech with sleek design for an elevated lifestyle</h1>
            </div>

            <div className='flex md:justify-around items-start justify-start flex-col md:flex-row gap-10'> {/**div c */}
                <div className='w-[30%] '> {/** first wrp */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-xl font-bold'>
                            Products
                        </h1>
                        <div className='flex flex-col gap-2'>
                            <Link to='/product' className='text-white hover:text-slate-100'>Laptop</Link>
                        <Link to='/product' className='text-white hover:text-slate-100'>Phones</Link>
                            <Link to='/product' className='text-white hover:text-slate-100'>Cameras</Link>
                            <Link to='/product' className='text-white hover:text-slate-100'>Television</Link>
                                <Link to='/product' className='text-white hover:text-slate-100'>Play Station</Link>
                        </div>
                    </div>

                    <div>

                    </div>
                </div>

            <div className='flex flex-col gap-5'>
                <h1 className='text-xl font-bold'>
                    Help
                </h1>
                <div className='flex flex-col gap-3'>  
                      <Link to='/aboutus' className='text-white hover:text-slate-300'>About Us</Link>
                  <Link to='/faqs' className='text-white hover:text-slate-300'>Faq</Link>
                    
                        <Link to='/payment' className='text-white hover:text-slate-300'>Payment</Link>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <h1 className='font-bold '>
                    Get in Touch
                </h1>
                <div className='flex flex-col gap-5'>
                    <a href="mailto:customer@nexusmart.com">customer@nexusmart.com</a>
                     <a href="tel:+1 2342342345">+9345664456</a>
                </div>
            </div>


        </div>   

        <div className='flex md:justify-between justify-center items-center flex-col gap-2 md:flex-row '>
            <div>
                © {new Date().getFullYear()} CopyRight . All Right reserved
            </div>

            <div>
                Terms & Condition
            </div>
        </div>
        </section>
    </div>
  )
}

export default Footer