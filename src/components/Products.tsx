import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import product1 from "../assets/images/Products/product1.jpg";
import product10 from "../assets/images/Products/product10.jpg";
import product11 from "../assets/images/Products/product11.jpg";
import product12 from "../assets/images/Products/product12.jpg";
import product13 from "../assets/images/Products/product13.jpg";
import product14 from "../assets/images/Products/product14.jpg";
import product15 from "../assets/images/Products/product15.jpg";
import product16 from "../assets/images/Products/product16.jpg";
import product17 from "../assets/images/Products/product17.jpg";
import product18 from "../assets/images/Products/product18.jpg";
import product19 from "../assets/images/Products/product19.jpg";
import product2 from "../assets/images/Products/product2.jpg";
import product20 from "../assets/images/Products/product20.jpg";
import product21 from "../assets/images/Products/product21.jpg";
import product22 from "../assets/images/Products/product22.jpg";
import product23 from "../assets/images/Products/product23.jpg";
import product24 from "../assets/images/Products/product24.jpg";
import product25 from "../assets/images/Products/product25.jpg";
import product26 from "../assets/images/Products/product26.jpg";
import product27 from "../assets/images/Products/product27.jpg";
import product28 from "../assets/images/Products/product28.jpg";
import product29 from "../assets/images/Products/product29.jpg";
import product3 from "../assets/images/Products/product3.jpg";
import product30 from "../assets/images/Products/product30.jpg";
import product4 from "../assets/images/Products/product4.jpg";
import product5 from "../assets/images/Products/product5.jpg";
import product6 from "../assets/images/Products/product6.jpg";
import product7 from "../assets/images/Products/product7.jpg";
import product8 from "../assets/images/Products/product8.jpg";
import product9 from "../assets/images/Products/product9.jpg";
import { addToCart } from "../redux/reducer/cartReducer";
import { RootState } from "../redux/store";
import SecondNavbar from "./SecondNavbar";



const Products = () => {
  const dispatch = useDispatch()
  const {cartItems} = useSelector((state: RootState)=>state.cartReducer)
  console.log(cartItems);
  
  const productList = [
    {
      id: 1,
      name: "Product 1",
      price: "Rs 150",
      image: product1,
      stock: 10,
    
    },
    {
      id: 2,
      name: "Product 2",
      price: "Rs 150",
      image: product2,
      stock: 10, // replace with actual image URL
    },
    {
      id: 3,
      name: "Product 3",
      price: "Rs 150",
      image: product3,
      stock: 10, // replace with actual image URL
    },
    {
      id: 4,
      name: "Product 4",
      price: "Rs 150",
      image: product4,
      stock: 10, // replace with actual image URL
    },
    {
      id: 5,
      name: "Product 5",
      price: "Rs 200",
      image: product5,
      stock: 10, // replace with actual image URL
    },
    {
      id: 6,
      name: "Product 6",
      price: "Rs 200",
      image: product6,
      stock: 10, // replace with actual image URL
    },
    {
      id: 7,
      name: "Product 7",
      price: "Rs 200",
      image: product7,
      stock: 10, // replace with actual image URL
    },
    {
      id: 8,
      name: "Product 8",
      price: "Rs 200",
      image: product8,
      stock: 10, // replace with actual image URL
    },
    {
      id: 9,
      name: "Product 9",
      price: "Rs 150",
      image: product9,
      stock: 10, // replace with actual image URL
    },
    {
      id: 10,
      name: "Product 10",
      price: "Rs 150",
      image: product10,
      stock: 10, // replace with actual image URL
    },
    {
      id: 11,
      name: "Product 11",
      price: "Rs 200",
      image: product11,
      stock: 10, // replace with actual image URL
    },
    {
      id: 12,
      name: "Product 12",
      price: "Rs 200",
      image: product12,
      stock: 10, // replace with actual image URL
    },
    {
      id: 13,
      name: "Product 13",
      price: "Rs 200",
      image: product13,
      stock: 10, // replace with actual image URL
    },
    {
      id: 14,
      name: "Product 14",
      price: "Rs 200",
      image: product14,
      stock: 10, // replace with actual image URL
    },
    {
      id: 15,
      name: "Product 15",
      price: "Rs 200",
      image: product15,
      stock: 10, // replace with actual image URL
    },
    {
      id: 16,
      name: "Product 16",
      price: "Rs 150",
      image: product16,
      stock: 10, // replace with actual image URL
    },
    {
      id: 17,
      name: "Product 17",
      price: "Rs 150",
      image: product17,
      stock: 10, // replace with actual image URL
    },
    {
      id: 18,
      name: "Product 18",
      price: "Rs 150",
      image: product18,
      stock: 10, // replace with actual image URL
    },
    {
      id: 19,
      name: "Product 19",
      price: "Rs 150",
      image: product19,
      stock: 10, // replace with actual image URL
    },
   
    {
      id: 20,
      name: "Product 20",
      price: "Rs 150",
      image: product20,
      stock: 10, // replace with actual image URL
    },
    {
      id: 21,
      name: "Product 21",
      price: "Rs 150",
      image: product21,
      stock: 10, // replace with actual image URL
    },
    {
      id: 22,
      name: "Product 22",
      price: "Rs 150",
      image: product22,
      stock: 10, // replace with actual image URL
    },
    {
      id: 23,
      name: "Product 23",
      price: "Rs 150",
      image: product23,
      stock: 10, // replace with actual image URL
    },
    {
      id: 24,
      name: "Product 24",
      price: "Rs 200",
      image: product24,
      stock: 10, // replace with actual image URL
    },
    {
      id: 25,
      name: "Product 25",
      price: "Rs 200",
      image: product25,
      stock: 10, // replace with actual image URL
    },
    {
      id: 26,
      name: "Product 26",
      price: "Rs 150",
      image: product26,
      stock: 10, // replace with actual image URL
    },
    {
      id: 27,
      name: "Product 27",
      price: "Rs 150",
      image: product27,
      stock: 10, // replace with actual image URL
    },
    {
      id: 28,
      name: "Product 28",
      price: "Rs 150",
      image: product28,
      stock: 10, // replace with actual image URL
    },
    {
      id: 29,
      name: "Product 29",
      price: "Rs 200",
      image: product29,
      stock: 10, // replace with actual image URL
    },
    {
      id: 30,
      name: "Product 30",
      price: "Rs 150",
      image: product30,
      stock: 10, // replace with actual image URL
    },
    
    
  ];
  const addToCartHandler = (cartItem:any)=>{
    if(cartItem.stock < 1) return toast.error("Out Of Stock");
    toast.success("Added to cart");
    dispatch(addToCart(cartItem));
  }


  return (
   <div>
    <SecondNavbar />
     <div className="container mt-4 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {productList.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg p-6">
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
   </div>
  );
};

export default Products;
