import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productse } from '../constants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../stores/cart'

const Detail = () => {
    const {slug}= useParams();
    const [detail, setDetail]= useState([]);
    const [quantity, setQuantity]= useState(1)

    const dispatch= useDispatch()
    const addQuantity= ()=> {
        setQuantity( quantity+ 1)
    }
       const minusQuantity= ()=> {
        setQuantity( quantity - 1 === 0 ? quantity= 1 : quantity -1)
    }
    const handleAddToCart=()=> {
        dispatch(addToCart({
            productId: detail.id,
            quantity:quantity
        }))
    }

    useEffect(()=> {
        const findDetail= productse.filter(product=> product.slug === slug);
        if(findDetail.length > 0) {
            setDetail(findDetail[0])
        }
        else{
            window.location.href='/product'
        }
    }, [slug])
  return (
    <div className='text-center bg-orange-50 flex flex-col gap-10 p-10 '>
       <section>
        <h1 className='text-2xl font-bold'>Product Details</h1>

        
       </section>
       <section className='flex items-center justify-center md:flex-row flex-col gap-20 '>
        <div className='w-[50%]'>
            <img src={detail.image} alt="" className='w-[50%] mx-auto'/>
        </div>

        <main className='flex-col flex gap-10'> 
                    <div>
            <h1>
                {detail.name}
            </h1>
            <p className='font-bold text-lg font-merriweather'>
                ${detail.price * quantity}
            </p>
        </div>
        <div className='flex flex-col md:flex-row gap-2 mx-auto'>
            <div className='flex flex-row gap-2 items-center justify-center'>
                <button onClick={minusQuantity} className='bg-white text-black p-2 rounded-lg'>-</button>
                <span>{quantity}</span>
                <button onClick={addQuantity} className='bg-white text-black p-2 rounded-lg'>+</button>
            </div>
            <div>
                <button className='bg-coral-red p-3 rounded-3xl text-orange-50' onClick={handleAddToCart}>Add to Cart</button>
            </div>

            
        </div>
        <div>
            <p className='w-[80%] mx-auto font-palanquin font-medium md:w-[50%] '>
                {detail.description}
            </p>
        </div>
        </main>

       </section>
    </div>
  )
}

export default Detail