import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../stores/cart';


const Product = ({ product }) => {
  const {slug}= useParams()
  const dispatch= useDispatch();
  const handleAddToCart=()=> {
    dispatch(addToCart({
      productId: product.id,
      quantity:1,
    }))
  }

  const carts= useSelector(store=> store.cart.items)
  console.log(carts)
  return(
      <div className="border p-4 rounded-2xl bg-white-400 flex flex-col items-center justify-center gap-5  text-center mt-5 shadow-3xl">
    

       <Link to={product.slug}><img src={product.image} alt={product.name} className="w-[80%] h-64 object-cover" /></Link>
    <h2 className="text-lg font-semibold">{product.name}</h2>
    <p className="text-zinc-900 font-medium">${product.price}</p>
    <button className='bg-orange-600 p-3 rounded-lg font-medium text-white' onClick={handleAddToCart}>
      Add to Cart
    </button>
  </div>

  )

};

export default Product;
