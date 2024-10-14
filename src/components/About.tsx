import { forwardRef } from "react";
import aboutImage from "../assets/images/about.jpg";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className="w-full py-8 bg-aboutbg mt-16 flex items-center">
      <div className="flex max-sm:flex-col items-center gap-8 w-[85%] mx-auto">
        <div className="flex gap-6 flex-col w-full md:w-[600px]">
          <h2 className="text-lg uppercase font-semibold text-orange-700">About Us</h2>
          <h1 className="md:text-[55px] text-[40px] leading-[1] font-bold">
            Crafting timeless ceramic pieces with precision.
          </h1>
          <p>
            At Crown Pottery, we blend traditional craftsmanship with innovative design to create unique and high-quality ceramics. Each piece is thoughtfully made to bring beauty and function to your everyday life. Whether it's tableware or home decor, our commitment to excellence is reflected in every item we produce.
          </p>
          <button className="h-10 w-24 text-white rounded-lg bg-orange-700 hover:scale-125 transition-all duration-500 hover:opacity-70 hover:text-black">
            Our Story
          </button>
        </div>
        <img className="h-[500px] rounded-lg w-[500px] object-cover" src={aboutImage} alt="About Us" />
      </div>
    </div>
  );
});

export default About;
