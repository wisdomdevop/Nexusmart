import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { productse } from '../constants'
import { useDispatch } from 'react-redux'
import { addToCart } from '../stores/cart'
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';
import { auth, db } from '../authen/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Petails = () => {
    const {pay}= useParams();
    const [detail, setDetail]= useState([]);
    const [quantity, setQuantity]= useState(1);
    const [address, setAddress]= useState('')
    const [infoValid, setInfoValid]= useState(false)
    const [userDetails, setUserDetails]= useState(
        ''
    )
    const stuff= detail.price * quantity
    const key= 'FLWPUBK_TEST-0a7c5d2506fd8dcbf462d781842b5ff4-X'

       const config = {
    public_key: key,
    tx_ref: Date.now(),
    amount: `${detail.price * quantity}`,
    currency: 'USD',
    payment_options: 'card, mobilemoney ,ussd, banktransfer',
    customer: {
      email: userDetails.email,
      phone_number:userDetails.phone,
      name: userDetails.firstName,
    },
    customizations: {
      title: 'Nexusmart',
      description: `Payment for the Purchase of ${detail.name}`,
      logo: 'https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...GIpBVImBnJwXs1M3EMoAJtlyIthftp9vo...PExevg9C3ktKMcs8',
    },
  };

  const fwConfig = {
    ...config,
    text: `Pay $${Math.floor(detail.price * quantity)}`,
    callback: (response) => {
      if(response.status !== "completed") {
        console.log("failed Transaction");
        toast.error("Failed Transaction", {
            position:"top-center"
        })
      }
      else{
        console.log("Success")
        toast.success("Successful, Get your  package in some mins.", {
            position:"top-center"
        })
      }
      closePaymentModal() // this will close the modal programmatically
    },
    onClose: () => {
        console.log("User Closed it Himself")
    },
  };

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
    const makeValid=()=> {
        setInfoValid(true)
    }
   
    useEffect(()=> {
        const findDetail= productse.filter(product=> product.pay === pay);
        if(findDetail.length > 0) {
            setDetail(findDetail[0])
        }
        else{
            window.location.href='/product'
        }
    }, [pay])

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

  useEffect(() => {
    FetchUserData();
  }, []);

      const handleAddressSubmit=(e)=> {
       e.preventDefault();

       setAddress(true)
    }
  return (
    <div className='text-center bg-orange-50 flex flex-col gap-10 p-10 '>
        {!infoValid? (
            <>
       <section>
        <h1 className='text-2xl font-bold'>Purchase Product</h1>

        
       </section>
       <section className='flex items-center justify-center md:flex-row flex-col gap-20 '>
        <div className='w-[20%]'>
            <img src={detail.image} alt="" className='rounded-lg shadow-xl w-[100%]' />
        </div>

        <main className='flex-col flex gap-10 font-medium'> 
                    <div>
            <h1 className='text-lg mb-2'> 
                {detail.name}
            </h1>
            <p className='font-bold text-lg font-merriweather'>
                ${ Math.floor(detail.price * quantity) }
            </p>
        </div>
        <div className='flex flex-col  gap-5 mx-auto font-medium'>
            <div className='flex flex-row gap-2 items-center justify-center'>
                <button onClick={minusQuantity} className='bg-white text-black p-2 rounded-lg'>-</button>
                <span>{quantity}</span>
                <button onClick={addQuantity} className='bg-white text-black p-2 rounded-lg'>+</button>
            </div>
            <div>
                <button className='bg-coral-red p-3 rounded-3xl text-orange-50' onClick={makeValid}>Purchase Item</button>
            </div>

            
        </div>
        <div>
            <p className='w-[80%] mx-auto md:w-[50%]'>
                {detail.description}
            </p>
        </div>
        </main>

       </section>
       </>
        ): (
           <section className='flex flex-col gap-10'>
                {!address? (
                    <>
                    <h2 className='font-semibold text-xl'>Billing Info</h2>
                
                  <form className='flex flex-col items-center justify-center gap-5 w-[80%] mx-auto font-medium outline-none' onSubmit={handleAddressSubmit}>
                      <input type="text" required placeholder='enter Delivery Address' className='w-[100%] mx-auto p-3 rounded-2xl outline-none' />
                    <button className='bg-zinc-900 text-white w-[40%] p-2 rounded-lg'>
                        Add
                    </button>
                  </form>

               

                </>
                ): (
                    <div className='flex justify-center flex-col items-center gap-7 font-medium w-[80%] mx-auto'>
                        <img src={detail.image} alt="" width={200} />
                        <h1 className='text-xl'>
                            {detail.name}
                        </h1>
                        

                        <button className='bg-black p-3 rounded-2xl text-orange-50'><FlutterWaveButton {...fwConfig} /></button>
                        
                    </div>
                )}
            </section>

            
        ) }
    </div>
  )
}

export default Petails