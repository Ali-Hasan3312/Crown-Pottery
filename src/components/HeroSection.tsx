import { forwardRef } from "react";
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../assets/images/drinkwares.jpg";
import heroImage2 from "../assets/images/heroImg2.png";
import heroImage3 from "../assets/images/Products/chinh-le-duc-iCW1ahH3SpE-unsplash.jpg";
import { useNavigate } from "react-router-dom";

interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroSection = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate()

  // Updated product offers with Mugs, Cups, and Plates
  const products = [
    {
      image: heroImage,
      title: "Exclusive Ceramic Mugs",
      description: "Enjoy 20% off on our new arrivals – Perfect for every coffee lover!",
    },
    {
      image: heroImage2,
      title: "Modern Tea & Coffee Cups",
      description: "Buy 2, Get 1 Free on all elegant coffee cups!",
    },
    {
      image: heroImage3,
      title: "Designer Plates Collection",
      description: "Flat 30% off on premium ceramic plates – Limited stock!",
    },
  ];

  return (
    <div
      ref={ref}
      className="relative w-[90%] mx-auto mt-8 rounded-xl h-screen bg-cover bg-center"
    >
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="relative h-screen">
            {/* Background image for each slide */}
            <div
              className="w-full h-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${product.image})` }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="relative top-32 z-10 flex flex-col items-start justify-center h-full p-8 md:p-16 text-white space-y-6">
                <h1 className="text-4xl max-sm:text-3xl font-extrabold leading-tight tracking-wide drop-shadow-md">
                  {product.title}
                </h1>
                <p className="max-w-lg text-lg md:text-xl text-white/80 drop-shadow-sm">
                  {product.description}
                </p>
                <button onClick={()=>navigate("/shop")} className="mt-4 px-8 py-4 bg-red-500 hover:bg-red-600 text-white rounded-lg text-lg font-semibold shadow-lg transform hover:scale-105 transition-transform duration-300">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default HeroSection;
