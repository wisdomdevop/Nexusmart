import React from 'react';
import { useCart } from '../contexts/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleRemoveFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', id });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold">Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cart.map(product => (
            <div key={product.id} className="border p-4">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-2" />
              <h2 className="text-xl font-bold">{product.name}</h2>
              <p>${product.price}</p>
              <button onClick={() => handleRemoveFromCart(product.id)} className="bg-red-500 text-white p-2 mt-2">Remove</button>
              <Link to={`/product/${product.id}`}>
                <button className="bg-blue-500 text-white p-2 mt-2">View Product</button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
