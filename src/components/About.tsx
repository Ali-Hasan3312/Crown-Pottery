import { forwardRef } from "react";
import aboutImage from "../assets/images/about.jpg";
import { Link } from "react-router-dom";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const About = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  return (
    <div ref={ref} className="w-full py-8 bg-aboutbg mt-16 flex items-center">
      <div className="flex max-sm:flex-col items-center gap-8 w-[85%] mx-auto">
        <div className="flex gap-6 flex-col w-full md:w-[600px]">
          <h2 className="text-lg uppercase font-semibold text-orange-700">Who We Are</h2>
          <h1 className="md:text-[55px] text-[40px] leading-[1] font-bold">
            Redefining Ceramic Excellence.
          </h1>
          <p>
            At Crown Pottery, we combine timeless craftsmanship with modern innovation to create exceptional ceramic products. Every piece we make reflects our dedication to quality, functionality, and aesthetics, making it the perfect addition to your home or collection.
          </p>
          <Link to={"/history"} className="h-10 w-32 flex items-center justify-center text-white rounded-lg bg-orange-700 hover:scale-125 transition-all duration-500 hover:opacity-70 hover:text-black">
            Learn More
          </Link>
        </div>
        <img className="h-[500px] rounded-lg w-[500px] object-cover" src={aboutImage} alt="Who We Are" />
      </div>
    </div>
  );
});

export default About;
