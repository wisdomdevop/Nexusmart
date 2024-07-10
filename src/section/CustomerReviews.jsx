import React from 'react'

const CustomerReviews = () => {
  return (
    <div className='text-center p-3 bg-orange-50'>
        <section className='flex flex-col justify-center items-center pt-24 gap-10 '>
            <div className='text-center'>
                <h1 className='text-xl font-bold md:text-3xl'>What Our Customers Say?</h1>
                <p className='text-base md:text-lg'>
                    Hear genuine stories from our satisfied customers about their exceptional Experience with us
                </p>
            </div>


            <div className='flex md:justify-around md:flex-row flex-col justify-center items-center '>

                <div className='flex flex-col items-center justify-center w-[80%] md:w-[30%] p-7  gap-5'>
                    <img src="/man.jpeg" alt="" width={100} className='object-cover rounded-full' />

                    <h2 className='font-normal text-lg'>The attention to detail and the quality of the product exceeded my expectations. Highly recommended!</h2>

                    <div className='flex gap-1 items-center justify-center'>
                        <img src="/star.svg" alt="" width={30 } height={24} />
                        <h3>(4.5)</h3>
                    </div>
                    <h2 className='font-semibold'>Morich Brown</h2>
                </div>

                <div className='flex flex-col items-center justify-center w-[80%] md:w-[30%] p-7  gap-5'>
                    <img src="/woman.svg" alt="" width={100} className='object-cover rounded-full' />

                    <h2 className='font-normal md:text-lg'>The product not only met but exceeded my expectations. I'll definitely be a returning customer!</h2>

                    <div className='flex gap-1 items-center justify-center'>
                        <img src="/star.svg" alt="" width={30 } height={24} />
                        <h3>(4.5)</h3>
                    </div>
                    <h2 className='font-semibold'>Morich Brown</h2>
                </div>

            </div>
        </section>
    </div>
  )
}

export default CustomerReviews