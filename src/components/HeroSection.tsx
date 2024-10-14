import { forwardRef } from "react";
import Slider from "react-slick"; // Import react-slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import heroImage from "../assets/images/heroImg1.jpg";
import heroImage2 from "../assets/images/heroImg2.png"; // Add more images
import heroImage3 from "../assets/images/heroImg3.jpg";
interface ContactSectionProps extends React.HTMLAttributes<HTMLDivElement> {}
const HeroSection = forwardRef<HTMLDivElement, ContactSectionProps>((_, ref) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [heroImage, heroImage2, heroImage3]; // Array of images

  return (
    <div ref={ref} className="relative w-[90%] mx-auto mt-8 rounded-xl h-screen bg-cover bg-center">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="relative h-screen">
            {/* Background image for each slide */}
            <div
              className="w-full h-full bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${image})` }}
            >
              {/* Overlay */}
              <div className="absolute inset-0 rounded-xl bg-black/50"></div>

              {/* Content */}
              <div className="relative top-28 z-10 flex flex-col items-start justify-center h-full p-8 md:p-16 text-white">
                <h1 className="text-[42px] max-sm:text-[30px] max-sm:w-[60%] font-bold leading-tight mb-4 w-[40%]">
                  We are passionate about all things coffee
                </h1>
                <p className="max-w-md text-lg md:text-xl">
  At Crown Pottery, we bring together craftsmanship and creativity to deliver the finest ceramic pieces. Our collection blends tradition with modern designs, crafted with care and attention to detail.
</p>

              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
});

export default HeroSection;
