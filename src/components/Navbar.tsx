import { useEffect, useState } from "react";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/CROWN POTTERY.png";
import CartSidebar from "./CartSidebar"; // Import CartSidebar
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";


interface NavbarProps {
  onScrollToContact?: () => void;
  onScrollToBooking?: () => void;
  onScrollToMenus?: () => void;
  onScrollToAbout?: () => void;
  onScrollToLanding?: () => void;
  onScrollToGallery?: () => void;
}

const Navbar = (props: NavbarProps) => {
  const location = useLocation();
  const [phoneActive, setPhoneActive] = useState(false); // State for tracking if phone view is active
  const [sidebarOpen, setSidebarOpen] = useState(false); // Sidebar state
  const [cartOpen, setCartOpen] = useState(false); // State for CartSidebar
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
          <img
            className="md:w-28 md:h-36 h-20 w-16 ml-0 md:ml-10"
            src={logo}
            alt=""
          />  
          <Link className="absolute top-0 w-full h-full" to={"/"}></Link>
        </div>
        <div className="cartSidebar absolute flex items-center gap-4 top-6 lg:top-3 text-black right-20 lg:right-6">
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
              className={`fixed text-xl top-0 right-0 w-[75%] h-full bg-gray-800 text-black z-50 flex flex-col items-start p-4 transition-transform duration-300 ${
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
                onClick={() => {
                  props.onScrollToLanding?.();
                  setSidebarOpen(false);
                }}
                className={`${
                  location.pathname === "/" ? " text-red-500" : ""
                } mb-4`}
              >
                Home
              </Link>
              <button
                onClick={() => {
                  props.onScrollToAbout?.();
                  setSidebarOpen(false);
                }}
                className="mb-4"
              >
                About
              </button>
              <button
                onClick={() => {
                  props.onScrollToGallery?.();
                  setSidebarOpen(false);
                }}
                className="mb-4"
              >
                Factory
              </button>
              <Link
                to="/shop"
                onClick={() => setSidebarOpen(false)}
                className={`${
                  location.pathname === "/shop"
                    ? " text-red-500"
                    : ""
                } mb-4`}
              >
                Shop
              </Link>
              <Link
                to="/shop"
                onClick={() => setSidebarOpen(false)}
                className={`${
                  location.pathname === "/shop"
                    ? " text-red-500"
                    : ""
                } mb-4`}
              >
                Orders
              </Link>
              <Link
                to="/history"
                onClick={() => setSidebarOpen(false)}
                className={`${
                  location.pathname === "/history"
                    ? " text-red-500"
                    : ""
                } mb-4`}
              >
                History
              </Link>
              <button
                onClick={() => {
                  props.onScrollToContact?.();
                  setSidebarOpen(false);
                }}
                className="mb-4"
              >
                Contact
              </button>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-8 text-black text-base lg:text-xl font-medium">
            <Link
              to="/"
              onClick={props.onScrollToLanding}
              className={`${
                location.pathname === "/" ? "text-red-500" : ""
              }`}
            >
              Home
            </Link>
            <button onClick={props.onScrollToAbout}>About</button>
            <Link to={"/custom"}>Custom Design</Link>
            <button onClick={props.onScrollToGallery}>Factory</button>
            <Link
              to="/shop"
              className={`${
                location.pathname === "/shop" ? " text-red-500" : ""
              }`}
            >
              Shop
            </Link>
            <Link
              to="/orderDetails"
              className={`${
                location.pathname === "/orderDetails" ? " text-red-500" : ""
              }`}
            >
              Orders
            </Link>
            <Link
              to="/history"
              className={`${
                location.pathname === "/history" ? " text-red-500" : ""
              }`}
            >
              History
            </Link>
            <button onClick={props.onScrollToContact}>Contact</button>
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
      {/* Cart Sidebar Component */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;
