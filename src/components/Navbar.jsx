import React, { useEffect, useState } from 'react';
import { navL, navLinks } from '../constants';
import { Link } from 'react-router-dom';
import { auth, db } from '../authen/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [userDetails, setUserDetails] = useState('');
  const [openNavigation, setOpenNavigation] = useState(false);
  const [totalQuantity, setTotalQuantity]= useState(0);
  const carts= useSelector(store=> store.cart.items);
  useEffect(()=> {
    let total= 0;
    carts.forEach(item=> total += item.quantity);
    setTotalQuantity(total)
  })

  const switchNav = () => {
    setOpenNavigation(!openNavigation);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  // Fetch user data
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

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log('User Logged Out');
      window.location.href = '/login';
      toast.success(`${userDetails.userName} logged out successfully`, {
        position: 'top-center',
      });
    } catch (error) {
      console.log('Error Logging Out:', error.message);
    }
  };

  return (
    <div className="w-[100%] text-base padAir:text-lg font-medium fixed top-0 bg-orange-50">
      <section>
        <div className="flex md:justify-around justify-between px-4 md:px-0">
          <div>
            <Link to="/">
              <img src="/whitr.jpg" alt="" />
            </Link>
          </div>

          <div className="flex spro:hidden text-orange-900 gap-5 mini:gap-10 items-center">
            <div className="flex mini:flex">
              {userDetails ? (
                <Link to="/cart" className='flex'>
                  <img src="/cart.svg" alt="" className="w-[32px]" />
                  <span className='text-red-500'>{totalQuantity}</span>
                </Link>
              ) : (
                <div className="hidden"></div>
              )}
            </div>
            <button>
              <img
                src="/menu.svg"
                alt=""
                onClick={switchNav}
                className="padAir:w-[40px] w-[30px]"
              />
            </button>
          </div>

          <div className="text-white gap-16 justify-center items-center hidden spro:flex">
            {/**nav for laptop */}
            {userDetails
              ? navLinks.map((item, index) => (
                  <div key={index} className="relative">
                    {item.children ? (
                      <DropdownMenu
                        title={item.title}
                        items={item.children}
                        handleLogout={handleLogout}
                      />
                    ) : (
                      <Link
                        to={item.link}
                        className="text-black hover:text-orange-500"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))
              : navL.map((item, index) => (
                  <div key={index} className="relative">
                    {item.children ? (
                      <DropdownMenu
                        title={item.title}
                        items={item.children}
                      />
                    ) : (
                      <Link
                        to={item.link}
                        className="text-black hover:text-zinc-900"
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                ))}
          </div>

          <div className="hidden spro:flex">
            {!userDetails ? (
              <div className="flex gap-5 text-black items-center justify-center ">
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>

          <div className="hidden md:flex items-center">
            {!userDetails ? (
              <div className="hidden"></div>
            ) : (
              <div>
                <Link to="/cart" className='flex' onClick={handleClick}>
                  <img src="/cart.svg" alt="" width={30} />
                  <span className='text-red-400'>{totalQuantity}</span>
                </Link>
                
              </div>
            )}
          </div>
        </div>

        <div
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } text-white gap-20 mt-9 lg:hidden flex-col h-[450px] items-center justify-center animate-slideIn bg-orange-50`}
        >
          {/**phone nav */}
          {userDetails
            ? navLinks.map((item, index) => (
                <div key={index} className="relative">
                  {item.children ? (
                    <DropdownMenu
                      title={item.title}
                      items={item.children}
                      handleLogout={handleLogout}
                    />
                  ) : (
                    <Link
                      to={item.link}
                      className="text-black hover:text-black"
                      onClick={handleClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))
            : navL.map((item, index) => (
                <div key={index} className="relative">
                  {item.children ? (
                    <DropdownMenu title={item.title} items={item.children} />
                  ) : (
                    <Link
                      to={item.link}
                      className="text-zinc-900 hover:text-zinc-950 bg-or"
                      onClick={handleClick}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}

          <div>
            {!userDetails ? (
              <div className="flex gap-5 text-black items-center justify-center mt-8 ">
                <Link to="/register" onClick={handleClick}>
                  Register
                </Link>
                <Link to="/login" onClick={handleClick}>
                  Login
                </Link>
              </div>
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

const DropdownMenu = ({ title, items, handleLogout }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (!openNavigation) return;
    setOpenNavigation(false);
  };

  return (
    <div className="relative">
      <button onClick={toggleDropdown} className="text-black hover:text-zinc-950 ">
        {title}
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-white shadow-lg rounded-lg py-2 w-48">
          {items.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200 font-normal"
              onClick={item.title === 'Logout' ? handleLogout : handleClick}
            >
              {item.title}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
