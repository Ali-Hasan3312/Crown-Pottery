import heroImage from "../assets/images/heroImage.jpg";

const HeroSection = () => {
  return (
    <div className="relative w-[90%] mx-auto mt-8 rounded-xl h-screen bg-cover bg-center" style={{ backgroundImage: `url(${heroImage})` }}>
      {/* Overlay */}
      <div className="absolute inset-0 rounded-xl bg-black/50"></div>
      
      {/* Content */}
      <div className="relative top-28 z-10 flex flex-col  items-start justify-center h-full p-8 md:p-16 text-white">
        <h1 className="text-[42px] font-bold leading-tight mb-4 w-[40%]">
          We are passionate about all things coffee
        </h1>
        <p className="max-w-md text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.
        </p>
      </div>
    </div>
  );
}

export default HeroSection;
