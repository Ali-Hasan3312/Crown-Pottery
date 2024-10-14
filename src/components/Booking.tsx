import { forwardRef } from "react";
import blackMug from "../assets/images/MugBlack.jpg"
import yellowmugs from "../assets/images/yellowmugs.jpg"

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const Booking = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className="py-12 bg-aboutbg flex items-center">
      <div className="w-[85%] mx-auto flex max-sm:flex-col max-sm:justify-normal items-center justify-between">
        <div className="flex flex-col gap-4 w-[45%] max-sm:w-[90%]">
          <h2 className="text-lg uppercase font-semibold text-orange-700">Craftsmanship</h2>
          <h1 className="text-[40px] md:text-[55px] leading-[1] font-semibold">
            Timeless Ceramics for Every Occasion
          </h1>
          <p>
            At Crown Pottery, we are committed to creating beautiful, high-quality ceramics that enhance your daily life. Each piece is carefully crafted by skilled artisans to ensure both elegance and durability, making every meal a special experience.
          </p>
          <div className="flex items-center gap-4">
            <button className="h-10 w-32 text-white rounded-lg bg-orange-700 hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">
              Shop Now
            </button>
            <button className="h-10 w-32 text-black border border-black rounded-lg bg-inherit hover:scale-110 transition-all duration-500 hover:opacity-70 hover:text-black">
              View Collection
            </button>
          </div>
        </div>
        <div className="flex gap-8 max-sm:flex-col">
          <img
            className="h-[340px] md:w-[280px] max-sm:w-[80vw] max-sm:mx-auto max-sm:mt-4 object-cover rounded-lg"
            src={blackMug}
            alt="Ceramic Mug"
          />
          <img
            className="h-[340px] w-[280px] max-sm:w-[80vw] max-sm:mx-auto object-cover rounded-lg"
            src={yellowmugs}
            alt="Ceramic Mugs"
          />
        </div>
      </div>
    </div>
  );
});

export default Booking;
