import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
interface FooterProps {
    onScrollToContact: () => void;
    onScrollToBooking: () => void;
    onScrollToMenus: () => void;
    onScrollToAbout: () => void;
    onScrollToLanding: () => void;
  }
const Footer = (
    props: FooterProps
) => {
    const ScrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
  return (
    <div className=' w-full bg-blue-900'>
       <div className="flex pt-8 gap-28 px-16 max-sm:px-4 max-sm:flex-col">
        <div className="">
        <div className=" uppercase relative text-white flex items-center gap-4">
             
            <button onClick={ScrollTop} className=" absolute top-0 h-20 w-24"></button>
            <span className="text-lg font-semibold text-nowrap tracking-widest">Crema.</span>
        </div>
            <div className="text-white flex flex-col mt-2 gap-1">
            <span>Master Park</span>
            <span>Crown Pottery</span>
            <span>Surrey</span>
            <span>RH8 9NA</span>
            <span>Tel: +(92) 3023342784</span>
            <Link className=" uppercase text-lg" to={""}>View With Google Maps</Link>
        </div>
        </div>
        <div className=" h-48 w-[1px] bg-gray-300 max-sm:opacity-0 max-sm:-mt-[380px]"></div>
        <div className="grid grid-cols-2 gap-14 max-sm:ml-2 -ml-6">
        <div onClick={props.onScrollToLanding} className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Landing</h2>
        </div>
        <div onClick={props.onScrollToAbout} className=" text-white">
            <h2 className=" text-xl font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">About</h2>
        </div>
        <div onClick={props.onScrollToMenus} className=" text-white">
            <h2 className=" text-xl -mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Menus</h2>
        </div>
        
        <div onClick={props.onScrollToBooking} className=" text-white">
            <h2 className=" text-xl -mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Booking</h2>
        </div>
        <div onClick={props.onScrollToContact} className=" text-white">
            <h2 className=" text-xl -mt-8 font-medium hover:text-lime-400 hover:cursor-pointer transition-all duration-300">Contact</h2>
        </div>
        </div>
        <div className=" h-48 w-[1px] bg-gray-300 max-sm:opacity-0 max-sm:-mt-[350px]"></div>
        <div className=" max-sm:-mt-8">
            <h2 className=" text-lg text-nowrap text-white uppercase font-semibold">Follow us on social media</h2>
            <div className="flex items-center gap-8 mt-4 text-xl text-white">
            <FaFacebook className=" hover:text-lime-400 hover:cursor-pointer transition-all duration-300" /> <FaXTwitter  className=" hover:text-lime-400 hover:cursor-pointer transition-all duration-300" />
            </div>
        </div>
        </div>
       <div className="flex items-center mt-4 justify-center w-full h-16 bg-zinc-800">
       <div>
            <p className=" text-white text-center">© 2024 Crema. All Rights Reserved.</p>
        </div>
        <div className=" text-white text-center ml-1">
            Powered by <Link to={""} className=" text-blue-500 hover:underline">CMYK Research and Development</Link>
        </div>
       </div>
    </div>
  )
}

export default Footer