import React, { useEffect } from 'react';
import { FiMinus, FiPlus, FiX } from 'react-icons/fi';
import type { CartItem } from '../redux/types/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addToCart, calculatePrice, removeCartItem } from '../redux/reducer/cartReducer';
import { Link } from 'react-router-dom';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartSidebar: React.FC<CartSidebarProps> = ({
  isOpen,
  onClose,
 
}) => {
    const {cartItems,subtotal} = useSelector((state:RootState)=>state.cartReducer )
    const dispatch = useDispatch()
    const incrementHandler = (cartItem: CartItem) => {
      if (cartItem.quantity >= cartItem.stock) return;
      dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
    };
    const decrementHandler = (cartItem: CartItem) => {
      if (cartItem.quantity <= 1) return;
      dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    };
    const removeHandler = (productId: string) => {
      dispatch(removeCartItem(productId));
    };
    useEffect(() => {
      
      dispatch(calculatePrice());
    }, [cartItems]);
  return (
    <div
      className={`fixed top-0 right-0 z-[2000] w-96 bg-gray-900 h-full shadow-lg transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-5 border-b border-gray-700">
        <h2 className="text-xl font-semibold text-white">
          Cart ({cartItems.length})
        </h2>
        <button onClick={onClose}>
          <FiX className="text-white text-2xl" />
        </button>
      </div>

      <div className="p-5 space-y-4">
  {cartItems.map((item, index) => (
    <div key={`${item.productId}-${index}`} className="flex items-center space-x-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-20 h-20 object-cover"
      />
      <div className="flex-1">
        <h3 className="text-lg text-white">{item.name}</h3>
        <p className="text-gray-400">₹ {item.price}</p>
      </div>
      <div className="flex items-center">
        <button
          className="p-2 text-white"
          onClick={() => decrementHandler(item)}
        >
          <FiMinus />
        </button>
        <span className="px-2 text-white">{item.quantity}</span>
        <button
          className="p-2 text-white"
          onClick={() => incrementHandler(item)
          }
        >
          <FiPlus />
        </button>
      </div>
      <button
        className="text-red-500"
        onClick={() => removeHandler(item.productId)}
      >
        <FiX />
      </button>
    </div>
      ))}
    </div>
      <div className="p-5 border-t border-gray-700">
        <div className="flex justify-between text-white text-lg font-semibold">
          <span>Total:</span>
          <span>
            ₹{' '}
            {subtotal}
          </span>
        </div>
        <Link to={"/shipping"} className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-4 rounded-md">
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default CartSidebar;
