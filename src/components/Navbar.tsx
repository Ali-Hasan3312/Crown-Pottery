import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/CrownPottery-Letterhead.pdf-image-000.png";

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

  // Function to check if screen size is less than 768px (mobile view)
  const checkScreenSize = () => {
    setPhoneActive(window.innerWidth < 768);
  };

  useEffect(() => {
    // Check screen size on initial load
    checkScreenSize();

    // Add event listener for window resize to handle screen size changes
    window.addEventListener("resize", checkScreenSize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const handleHamburgerClick = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex items-center justify-between mt-4 w-[90%] mx-auto">
      <img
        className="md:w-36 md:h-28 h-20 w-24 cursor-pointer"
        src={logo}
        alt=""
      />

      {/* Show hamburger menu if phoneActive is true */}
      {phoneActive ? (
        <>
          <button
            className="text-3xl focus:outline-none"
            onClick={handleHamburgerClick}
          >
            &#9776; {/* Hamburger icon */}
          </button>
          {/* Sidebar */}
          {sidebarOpen && (
            <div className="fixed top-0 left-0 w-[75%] h-full bg-gray-800 text-white z-50 flex flex-col items-start p-4">
              <button
                className="text-2xl self-end mb-4 focus:outline-none"
                onClick={handleHamburgerClick}
              >
                &times; {/* Close icon */}
              </button>
              <Link
                to="/"
                onClick={() => {
                  props.onScrollToLanding?.();
                  setSidebarOpen(false); // Close sidebar on click
                }}
                className={`${
                  location.pathname === "/" ? "underline text-red-700" : ""
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
                  props.onScrollToMenus?.();
                  setSidebarOpen(false);
                }}
                className="mb-4"
              >
                Products
              </button>
              <button
                onClick={() => {
                  props.onScrollToGallery?.();
                  setSidebarOpen(false);
                }}
                className="mb-4"
              >
                Gallery
              </button>
              <Link
                to="/shop"
                onClick={() => setSidebarOpen(false)}
                className={`${
                  location.pathname === "/shop"
                    ? "underline text-red-700"
                    : ""
                } mb-4`}
              >
                Shop
              </Link>
              <Link
                to="/history"
                onClick={() => setSidebarOpen(false)}
                className={`${
                  location.pathname === "/history"
                    ? "underline text-red-700"
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
          )}
        </>
      ) : (
        <div className="flex items-center gap-4 text-base lg:text-2xl font-medium">
          <Link
            to="/"
            onClick={props.onScrollToLanding}
            className={`${
              location.pathname === "/" ? "underline text-red-700" : ""
            }`}
          >
            Home
          </Link>
          <button onClick={props.onScrollToAbout}>About</button>
          <button onClick={props.onScrollToMenus}>Products</button>
          <button onClick={props.onScrollToGallery}>Gallery</button>
          <Link
            to="/shop"
            className={`${
              location.pathname === "/shop" ? "underline text-red-700" : ""
            }`}
          >
            Shop
          </Link>
          <Link
            to="/history"
            className={`${
              location.pathname === "/history" ? "underline text-red-700" : ""
            }`}
          >
            History
          </Link>
          <button onClick={props.onScrollToContact}>Contact</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
