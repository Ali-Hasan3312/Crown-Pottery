import { Link } from "react-router-dom";

interface NavbarProps {
  onScrollToContact: () => void;
  onScrollToBooking: () => void;
  onScrollToMenus: () => void;
  onScrollToAbout: () => void;
  onScrollToLanding: () => void;
  onScrollToGallery: () => void;
}
const Navbar = (
  props: NavbarProps
) => {
  return (
    <div className="flex max-sm:flex-col max-sm:gap-4 items-center justify-between mt-4 w-[90%] mx-auto">
        <h2 className=" lg:text-5xl text-3xl font-bold">Crown Pottery</h2>
        <div className="flex items-center gap-4 text-base lg:text-2xl font-medium">
            <button onClick={props.onScrollToLanding} className=" underline text-red-700">Home</button>
            <button onClick={props.onScrollToAbout}>About</button>
            <button onClick={props.onScrollToMenus}>Products</button>
            <button onClick={props.onScrollToGallery}>Gallery</button>
            <Link to={"/shop"} >Shop</Link>
            <button onClick={props.onScrollToContact}>Contact</button>
        </div>
    </div>
  )
}

export default Navbar