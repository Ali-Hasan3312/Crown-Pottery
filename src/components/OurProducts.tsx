import { forwardRef } from "react";
import blackmugs from "../assets/images/blackmugs.jpg"
import labourMan from "../assets/images/labourMan.jpg"
import { Link } from "react-router-dom";
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const OurProducts = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className="py-28 bg-aboutbg flex max-sm:flex-col items-center justify-center gap-8">
     
      <div className="flex flex-col gap-4 w-[80%] md:w-[45%]">
        <h2 className="text-lg uppercase font-semibold text-orange-700">Our Products</h2>
        <h1 className="text-[40px] md:text-[55px] leading-[1] font-semibold">Crafted with Care, Built to Last</h1>
        <p>
          At Crown Pottery, we believe in sourcing only the finest materials for our ceramic products. Each piece is thoughtfully designed and handcrafted by artisans who share our passion for quality and sustainability. From mugs to plates, every product tells a story of craftsmanship and dedication.
        </p>
        <Link to={"/products"} className="h-10 w-32 flex items-center justify-center text-white rounded-lg bg-orange-700 hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">
              View Products
            </Link>
        <div className="flex items-center gap-4"></div>
      </div>
      <div>
        <img
          className="h-[340px] w-[80vw] md:w-[280px] object-cover rounded-lg"
          src={blackmugs}
        />
      </div>
      <div className="flex gap-8">
        <img
          className="h-[340px] w-[80vw] md:w-[280px] object-cover rounded-lg"
          src={labourMan}
          alt="Labour"
        />
      </div>
      
    </div>
  );
});

export default OurProducts;
