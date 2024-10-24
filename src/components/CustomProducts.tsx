import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import product1 from "../assets/images/Products/product1.jpg";
import product2 from "../assets/images/Products/product2.jpg";
import product3 from "../assets/images/Products/product3.jpg";
import { addToCart } from "../redux/reducer/cartReducer";
const CustomProducts = () => {
  const dispatch = useDispatch();
  const productList = [
    {
      productId: 1,
      name: "Product 1",
      price: "150",
      image: product1,
      stock: 10,
      quantity: 1,
    
    },
    {
      productId: 2,
      name: "Product 2",
      price: "150",
      image: product2,
      stock: 10,
      quantity: 1, // replace with actual image URL
    },
    {
      productId: 3,
      name: "Product 3",
      price: "150",
      image: product3,
      stock: 10,
      quantity: 1, // replace with actual image URL
    },
   
    
    
  ];
  const addToCartHandler = (cartItem:any)=>{
    if(cartItem.stock < 1) return toast.error("Out Of Stock");
    toast.success("Added to cart");
    dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity }));
    dispatch(addToCart(cartItem));
  }
  return (
   <div>
    
     <div className="container mt-4 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <div key={product.productId} className="bg-white shadow-lg rounded-lg p-6">
            <img src={product.image} alt={product.name} className=" aspect-auto mb-4 rounded-lg" />
            <h2 className="text-2xl font-bold mb-2 text-center">{product.name}</h2>
            <p className="text-gray-700 mb-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p className="text-orange-600 font-bold text-xl text-center">{product.price}</p>
            <button
            onClick={()=>addToCartHandler(product)}
            className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center">
    <Link to={"/shop"} className="h-10 w-32 flex items-center justify-center text-black rounded-lg border border-black hover:scale-125 transition-all duration-500 hover:opacity-70 hover:text-black">
            View More
          </Link>
    </div>
   </div>
  );
};

export default CustomProducts;
