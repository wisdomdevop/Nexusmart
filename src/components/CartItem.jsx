import React, { useEffect, useState } from 'react'
import { productse } from '../constants';
import { useDispatch, useSelector } from 'react-redux';
import { changeQuantity } from '../stores/cart';
import { Link } from 'react-router-dom';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


const CartItem = (props) => {
    const {productId, quantity}= props.data;
    const [detail, setDetail]= useState([]);
    const [userAddress, setUserAddress]= useState('')
    const [payment , setPayment]= useState()
    const [infoValid, setInfoValid]= useState(false)
    const dispatch = useDispatch();
  

        const addQuantity= ()=> {
         dispatch(changeQuantity ({
            productId: productId,
            quantity:quantity + 1
        }))
    }
       const minusQuantity= ()=> {
        dispatch(changeQuantity ({
            productId: productId,
            quantity:quantity - 1
        }))
    }
   

    useEffect(()=> {
        const findDetail= productse.filter(product=> product.id ===productId)[0];  setDetail(findDetail)
    }, [productId])
  
  return (
    <div className='flex justify-around  items-center bg-zinc-800 text-white w-[90%] font-medium mx-auto padAir:flex-row flex-col gap-4 pb-5 p-3 rounded-lg'>
        <img src={detail.image}alt="" width={200} className='bg-zinc-600 rounded-xl' />
        <h3>
            {detail.name}
        </h3>
        <p>
            ${detail.price * quantity}
        </p>
        <div className='flex gap-10'>
            <button onClick={minusQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={addQuantity}>+</button>
        </div>

        <div>
            <Link to={detail.pay}>Purchase</Link>
        </div>
        
    </div>
  )
}

export default CartItem