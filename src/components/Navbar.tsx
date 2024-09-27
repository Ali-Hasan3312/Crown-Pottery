import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-4 w-[90%] mx-auto">
        <h2 className=" text-5xl font-bold">Crema.</h2>
        <div className="flex items-center gap-4 text-2xl font-medium">
            <Link to={"/landing"} className=" underline text-red-700">Landing</Link>
            <Link to={"/about"}>About</Link>
            <Link to={"/menus"}>Menus</Link>
            <Link to={"/booking"}>Booking</Link>
            <Link to={"/contact"}>Contact</Link>
        </div>
    </div>
  )
}

export default Navbar