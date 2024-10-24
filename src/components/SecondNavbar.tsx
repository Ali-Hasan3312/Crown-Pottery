import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/images/CROWN POTTERY.png";
import { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import CartSidebar from './CartSidebar';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

const SecondNavbar = () => {
  const location = useLocation();
  const [phoneActive, setPhoneActive] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const {cartItems} = useSelector((state:RootState)=>state.cartReducer)
  const checkScreenSize = () => {
    setPhoneActive(window.innerWidth < 768);
  };

  useEffect(() => {
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <>
    <div className="flex items-center pt-2 gap-20 bg-white w-full px-8">
      <div className="relative">
        <img className="md:w-28 md:h-36 h-20 w-16 ml-0 md:ml-10" src={logo} alt="" />
        <Link className="absolute top-0 w-full h-full" to="/" />
      </div>
      <div className="cartSidebar absolute flex items-center gap-4 top-3 text-black right-6">
          <div className="absolute text-white h-4 w-4 rounded-full bg-red-600 flex items-center justify-center top-0 right-20">
            {cartItems.length}
          </div>
          <HiOutlineShoppingBag className="text-3xl" />
          <button
            onClick={() => setCartOpen(true)} // Open CartSidebar on click
            className="text-black"
          >
            View Cart
          </button>
        </div>
      {phoneActive ? (
        <>
          <button
            className="text-3xl text-black focus:outline-none"
            onClick={handleHamburgerClick}
          >
            &#9776;
          </button>

          <div
            className={`fixed top-0 text-xl right-0 w-[75%] h-full bg-gray-800 text-black z-50 flex flex-col items-start p-4 transition-transform duration-300 ${
              sidebarOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              className="text-4xl self-end mb-4 focus:outline-none"
              onClick={handleHamburgerClick}
            >
              &times;
            </button>
            <Link
              to="/"
              onClick={() => setSidebarOpen(false)}
              className={`${
                location.pathname === "/" ? " text-red-700" : ""
              } hover:text-red-500 mb-4`}
            >
              Home
            </Link>
            <Link to="/about" onClick={() => setSidebarOpen(false)} className="mb-4 hover:text-red-500">
              About
            </Link>
            <Link to="/custom" onClick={() => setSidebarOpen(false)} className="mb-4 hover:text-red-500">
              Custom Design
            </Link>
            <Link to="/" onClick={() => setSidebarOpen(false)} className="mb-4 hover:text-red-500">
              Factory
            </Link>
            <Link
              to="/shop"
              onClick={() => setSidebarOpen(false)}
              className={`${
                location.pathname === "/shop" ? " text-red-700" : ""
              } mb-4 hover:text-red-500`}
            >
              Shop
            </Link>
            <Link
              to="/history"
              onClick={() => setSidebarOpen(false)}
              className={`${
                location.pathname === "/history" ? " text-red-700" : ""
              } mb-4 hover:text-red-500`}
            >
              History
            </Link>
            <Link to="/" onClick={() => setSidebarOpen(false)} className="mb-4">
              Contact
            </Link>
          </div>
        </>
      ) : (
        <div className="flex items-center gap-8 text-black text-base lg:text-xl font-medium">
          <Link
            to="/"
            className={`${
              location.pathname === "/" ? " text-red-500 " : ""
            } hover:text-red-500 transition-all duration-300`}
          >
            Home
          </Link>
          <Link to="/" className='hover:text-red-500 transition-all duration-300'>About</Link>
          <Link
            to="/custom"
            className={`${
              location.pathname === "/custom" ? " text-red-500 " : ""
            } hover:text-red-500 transition-all duration-300`}
          >
            Custom Design
          </Link>
          <Link to="/" className='hover:text-red-500 transition-all duration-300'>Gallery</Link>
          <Link
            to="/shop"
            className={`${
              location.pathname === "/shop" ? " text-red-500 " : ""
            } hover:text-red-500 transition-all duration-300`}
          >
            Shop
          </Link>
          <Link
            to="/orderDetails"
            className={`${
              location.pathname === "/orderDetails" ? " text-red-500 " : ""
            } hover:text-red-500 transition-all duration-300`}
          >
            Orders
          </Link>
          <Link
            to="/history"
            className={`${
              location.pathname === "/history" ? " text-red-500 " : ""
            } hover:text-red-500 transition-all duration-300`}
          >
            History
          </Link>
          <Link to="/" className='hover:text-red-500 transition-all duration-300'>Contact</Link>
          <Link
              to="/login"
              className={` py-2 px-4 text-white transition-all duration-300 border border-blue-500 hover:text-black hover:bg-transparent rounded-lg bg-blue-600`}
            >
              Login
            </Link>
            <Link
              to="/register"
              className={`py-2 px-4 rounded-lg bg-transparent border border-blue-600 hover:bg-blue-500 hover:text-white transition-all duration-300`}
            >
              Register
            </Link>
        </div>
      )}
    </div>
     <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
     </>
  );
};

export default SecondNavbar;
