import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { OrderItem } from "../redux/types/types";
import Navbar from "./Navbar";



const OrderDetails = () => {
 let status = "Processing"
 
 const { shippingCharges, discount, tax, total, subtotal, cartItems} = useSelector((state: RootState)=> state.cartReducer)
 const {name, address, city, state, country, pinCode } = useSelector((state: RootState)=> state.cartReducer.shippingInfo)
 console.log("Cart Items",cartItems)
  return (
    <main className="">
      <Navbar />
     <div className="flex items-start gap-8 py-28 justify-center">
      <section className="p-8 w-96 bg-white rounded shadow-gray-700 shadow-sm">
        <h2 className="tracking-wider uppercase text-center font-semibold">Order Items</h2>
        {cartItems.map((i) => (
          <ProductCard
            key={i.productId} // Add the key prop here
            name={i.name}
            image={i.image}
            price={i.price}
            quantity={i.quantity}
            productId={i.productId}
            _id={i.productId}
          />
        ))}
      </section>
      <article className="relative p-8 w-96 bg-white rounded shadow-gray-700 shadow-sm">
        <h1 className="text-center tracking-wider font-bold uppercase">Order Info</h1>
        <h5 className="mt-8 ml-2 text-lg font-semibold">User Info</h5>
        <p className="m-1">Name: {name}</p>
        <p className="m-1">
          Address: {`${address}, ${city}, ${state}, ${country} ${pinCode}`}
        </p>
        <h5 className="mt-8 ml-2 text-lg font-semibold">Amount Info</h5>
        <p className="m-1">Subtotal: {subtotal}</p>
        <p className="m-1">Shipping Charges: {shippingCharges}</p>
        <p className="m-1">Tax: {tax}</p>
        <p className="m-1">Discount: {discount}</p>
        <p className="m-1">Total: {total}</p>

        <h5 className="mt-8 ml-2 text-lg font-semibold">Status Info</h5>
        <p className="m-1">
          Status: {" "}
          <span
            className={
              status === "Delivered"
                ? `text-purple-500`
                : status === "Shipped"
                  ? "text-green-500"
                  : "text-red-500"
            }
          >
            {status}
          </span>
        </p>
      </article>
     </div>
    
    </main>
  )
}

const ProductCard = ({
  name,
  image,
  price,
  quantity,
  productId,
}: OrderItem) => (
  <div className="mt-6">
    <img className="w-[320px] mx-auto" src={`${image}`} alt={name} />
    <div className=" mt-4 flex justify-center">
    <Link to={`/product/${productId}`}>{name}</Link>
    <span>
      ₹{price} X {quantity} = ₹{price * quantity}
    </span>
    </div>
  </div>
);

export default OrderDetails;
