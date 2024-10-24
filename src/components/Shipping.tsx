import { ChangeEvent, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { saveShippingInfo } from "../redux/reducer/cartReducer";
import { RootState } from "../redux/store";
import SecondNavbar from "./SecondNavbar";

const Shipping = () => {
  const {
    cartItems,
  } = useSelector((state: RootState) => state.cartReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    state: "",
    country: "",
    pinCode: ""
  });

  const changeHandler = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setShippingInfo((prev) => ({
      ...prev, [e.target.name]: e.target.value
    }));
  };

  const submitHandler = async () => {
    dispatch(saveShippingInfo(shippingInfo));  
    toast.success("Order Placed Successfully"); 
    navigate("/orderDetails"); 
  };
  useEffect(() => {
    if (cartItems.length < 0) navigate("/cart");
  }, [cartItems, navigate]);

  return (
    <>
    <SecondNavbar />
    <div className=" flex justify-center items-center gap-8 mt-16">
     
      <div className="flex flex-col justify-center items-stretch gap-8 p-8 max-w-[450px] w-full mt-[-50px]">
        <h1 className="tracking-[1px] font-xl text-lg text-center uppercase">Shipping Address</h1>
        <input
          type="text"
          required
          placeholder="Full Name"
          name="name"
          value={shippingInfo.name}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        />
        <input
          type="text"
          required
          placeholder="Address"
          name="address"
          value={shippingInfo.address}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        />
        <input
          type="text"
          required
          placeholder="City"
          name="city"
          value={shippingInfo.city}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        />
        <input
          type="text"
          required
          placeholder="State"
          name="state"
          value={shippingInfo.state}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        />
        <select
          name="country"
          required
          value={shippingInfo.country}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        >
          <option value="">Choose Country</option>
          <option value="pakistan">Pakistan</option>
        </select>
        <input
          type="number"
          required
          placeholder="Pin Code"
          name="pinCode"
          value={shippingInfo.pinCode}
          onChange={changeHandler}
          className="border border-solid border-gray-800 p-2 text-base rounded border-opacity-35 outline-none"
        />
        <button onClick={submitHandler} className="border-none outline-none cursor-pointer p-2 bg-teal-700 text-white rounded uppercase text-base hover:opacity-80">Confirm</button>
      </div>
    </div>
    </>
  );
}

export default Shipping;