import { Link, useLocation } from 'react-router-dom'

const SecondNavbar = () => {
    const location = useLocation()
    return (
      <div className="flex max-sm:flex-col max-sm:gap-4 items-center justify-between mt-4 w-[90%] mx-auto">
          <h2 className=" lg:text-5xl text-3xl font-bold">Crown Pottery</h2>
          <div className="flex items-center gap-4 text-base lg:text-2xl font-medium">
              <Link to={"/"} className={`${location.pathname == "/"? "underline text-red-700" : ""}`}>Home</Link>
              <Link to={"/"} >About</Link>
              <Link to={"/products"} className={`${location.pathname == "/products"? "underline text-red-700" : ""}`}>Products</Link>
              <Link to={"/"} >Gallery</Link>
              <Link to={"/shop"} className={`${location.pathname == "/shop"? "underline text-red-700" : ""}`}>Shop</Link>
              <Link to={"/history"} className={`${location.pathname == "/history"? "underline text-red-700" : ""}`}>History</Link>
              <Link to={"/"} >Contact</Link>
          </div>
      </div>
    )
}

export default SecondNavbar