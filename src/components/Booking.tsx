import { forwardRef } from "react";
import blackMug from "../assets/images/Products/product15.jpg";
import yellowmugs from "../assets/images/yellowmugs.jpg";
import { Link } from "react-router-dom";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Booking = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className="py-12 bg-aboutbg flex items-center">
      <div className="w-[88%] mx-auto flex max-sm:flex-col max-sm:justify-normal items-center justify-between">
        <div className="flex flex-col gap-4 w-[45%] max-sm:w-[90%]">
          <h2 className="text-lg uppercase font-semibold text-orange-700">Our Collections</h2>
          <h1 className="text-[40px] md:text-[55px] leading-[1] font-semibold">
            Handcrafted Elegance for Every Space
          </h1>
          <p>
            Discover the art of modern pottery at Crown Pottery. Each piece in our collection is a testament to our passion for quality and design, combining functionality with beauty to elevate your home and dining experience.
          </p>
          <div className="flex items-center gap-4">
           
            <Link to={"/shop"} className="h-10 w-32 flex items-center justify-center text-black border border-black rounded-lg bg-inherit hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">
              View Collection
            </Link>
          </div>
        </div>
        <div className="flex gap-8 max-sm:flex-col">
          <img
            className="h-[340px] md:w-[320px] w-[80vw] max-sm:mx-auto max-sm:mt-4 rounded-lg"
            src={blackMug}
            alt="Black Ceramic Mug"
          />
          <img
            className="h-[340px] w-[320px] max-sm:w-[80vw] max-sm:mx-auto object-cover rounded-lg"
            src={yellowmugs}
            alt="Yellow Ceramic Mugs"
          />
        </div>
      </div>
    </div>
  );
});

export default Booking;
