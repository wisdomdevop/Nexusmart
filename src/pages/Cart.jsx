import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import Footer from '../section/Footer';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../authen/Firebase';
import { Link } from 'react-router-dom';


const Cart = () => {
      const [userDetails, setUserDetails]= useState(
        ''
    )

    const carts= useSelector(store => store.cart.items);


          const FetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, 'Users', user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
        console.log(docSnap.data());
      } else {
        console.log('User is not logged in');
      }
    });
  };

  useEffect
  (() => {
    FetchUserData();
  }, []);
  return (
    <div>
        <section>
            <h2 className='text-center mb-7 text-xl padAir:text-2xl font-bold'>
                Shopping Cart
            </h2>
        </section>
        <section className='flex flex-col gap-10 items-center justify-end w-[90%] mx-auto '>
           {userDetails? (
            <>
             {carts.map((item, key)=> (
                <CartItem key={key} data= {item}/>
            ))}
            </>
           ): (
            <div>
                Pls Login to continue.... <Link to='/login' className='text-coral-red'>Login</Link>
            </div>
           )}
        </section>
        <section className='text-center mt-52'>
            
            <Footer/>
        </section>
    </div>
  )
}

export default Cart